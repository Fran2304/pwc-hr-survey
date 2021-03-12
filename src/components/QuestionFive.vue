<template>
  <div>
    <div class="module">
      <h2 v-if="allFive.length">{{ allFive[0].section }}</h2>
      <span class="paging">Hoja 1</span>
      <InstructionBoard />
      <!-- <pre>{{ allFive }}</pre> -->
      <div id="moduleIContent" class="moduleContent">
        <div v-if="allFive.length">
          <p v-if="allFive.length">{{ allFive[0].title }}</p>
          <br />
          <div class="options">
            <div class="eachOption">
              <label>{{ horizontal[0] }}</label>
              <input type="text" id="totalEmployes" v-model="answers.totalPlanilla" />
            </div>
            <div class="eachOption">
              <label>{{ horizontal[1] }}</label>
              <input type="text" id="permanent" v-model="answers.fijo" />
            </div>
            <div class="eachOption">
              <label>{{ horizontal[2] }}</label>
              <input type="text" id="temporary" v-model="answers.temporal" />
            </div>
            <div class="sume">
              <p>{{sumeTimeEmployee}}</p>
            </div>
            <div class="align">
              <div class="eachAlign">
                <label>{{ horizontal[3] }}</label>
                <input type="text" id="lima" v-model="answers.lima" />
              </div>
              <div class="eachAlign">
                <label>{{ horizontal[3] }}</label>
                <input type="text" id="province" v-model="answers.provincia" />
              </div>
              <div class="sume">
                <p>{{orignEmployee}}</p>
              </div>
            </div>
            <!-- <pre> totalPlanilla : {{ answers.totalPlanilla }}</pre>
            <pre> permanente : {{ answers.fijo }}</pre>
            <pre> temporal: {{ answers.temporal }}</pre>
            <pre> lima: {{ answers.lima }}</pre>
            <pre> province: {{ answers.provincia }}</pre> -->
          </div>
        </div>
        <div v-if="allSix.length">
           <p v-if="allSix.length">{{ allSix[0].title }}</p>
          <br />
          <div class="table-input">
            <table class="responsive-table-input-matrix">
              <thead>
                <tr>
                  <th></th>
                  <th>{{ verticalSix[0] }}</th>
                  <th>{{ verticalSix[1] }}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ horizontalSix[0] }}</td>
                  <td>
                    <input type="text" :id="verticalSix[0]"  v-model="answersSix.gerenciaF" />
                  </td>
                  <td>
                    <input type="type" :id="verticalSix[1]" v-model="answersSix.gerenciaM" />
                  </td>
                </tr>
                <!--Internet Bolsas de trabajo -->
                <tr>
                  <td>{{ horizontal[1] }}</td>
                  <td>
                    <input
                      type="text"
                      :id="verticalSix[0]"
                      v-model="answersSix.ejecutivosF"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      :id="verticalSix[1]"
                      v-model="answersSix.ejecutivosM"
                    />
                  </td>
                </tr>
                <!--Internet Redes -->
                <tr>
                  <td>{{ horizontalSix[2] }}</td>
                  <td>
                    <input type="text" :id="verticalSix[0]"  v-model="answersSix.mediosF" />
                  </td>
                  <td>
                    <input type="text" :id="verticalSix[1]" v-model="answersSix.mediosM" />
                  </td>
                </tr>
                <!--Otro -->
                <tr>
                  <td>{{ horizontalSix[3] }}</td>
                  <td>
                    <input
                      type="text"
                      :id="verticalSix[0]"
                      v-model="answersSix.empleadosF"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      :id="verticalSix[1]"
                      v-model="answersSix.empleadosM"
                    />
                  </td>
                </tr>
                <tr>
                  <td>{{ horizontalSix[4] }}</td>
                  <td>
                    <input type="text" :id="verticalSix[0]"  v-model="answersSix.obrerosF" />
                  </td>
                  <td>
                    <input type="text" :id="verticalSix[1]"  v-model="answersSix.obrerosM" />
                  </td>
                </tr>
                <tr>
                  <td>{{ horizontalSix[5] }}</td>
                  <td>
                    <input type="text" :id="verticalSix[0]" v-model="answersSix.totalF" />
                  </td>
                  <td>
                    <input type="text" :id="verticalSix[1]"  v-model="answersSix.totalM" />
                  </td>
                </tr>
              </tbody>
            </table>
            <!--<div class="btn-container">
            <input class="btn-e" type="button" value="ENVIAR" @click="guardarRespuesta" />
            </div>-->
            <!-- <pre> : {{ answers.gerenciaF}} {{ answers.gerenciaM}}</pre>
            <pre> : {{ answers.ejecutivosF }} {{ answers.ejecutivosM }}</pre>
            <pre>: {{ answers.mediosF }} {{ answers.mediosM }}</pre>
            <pre>: {{ answers.empleadosF }} {{ answers.empleadosM }}</pre>
            <pre>: {{ answers.obrerosF }} {{ answers.obrerosM }}</pre>
            <pre>: {{ answers.totalF }} {{ answers.totalM }}</pre> -->
          </div>
        </div>
      </div>
      <div class="btn-container">
        <input class="btn-e" type="button" value="ENVIAR" @click="guardarRespuesta" />
      </div>
    </div>
  </div>
</template>
<script>
import InstructionBoard from '@/components/InstructionBoard.vue';
import { db } from '../firebase';

export default {
  name: 'About',
  props: ['id'],
  components: {
    InstructionBoard,
  },
  data() {
    return {
      allFive: [],
      allSix: [],
      answers: {
        totalPlanilla: '',
        fijo: '',
        temporal: '',
        lima: '',
        provincia: '',
      },
      answersSix: {
        gerenciaF: '',
        gerenciaM: '',
        ejecutivosF: '',
        ejecutivosM: '',
        mediosF: '',
        mediosM: '',
        empleadosF: '',
        empleadosM: '',
        obrerosF: '',
        obrerosM: '',
        totalF: '',
        totalM: '',
      },
    };
  },
  computed: {
    horizontal() {
      // `this` points to the vm instance
      return this.allFive[0].optionX;
    },
    sumeTimeEmployee() {
      const sume = parseInt(this.answers.fijo, 10) + parseInt(this.answers.temporal, 10);
      if (Number.isNaN(sume)) {
        return '0';
      }
      return parseInt(sume, 10);
    },

    horizontalSix() {
      // `this` points to the vm instance
      return this.allSix[0].optionX;
    },

    verticalSix() {
      // `this` points to the vm instance
      return this.allSix[0].optionY;
    },
    orignEmployee() {
      const sume = parseInt(this.answers.lima, 10) + parseInt(this.answers.provincia, 10);
      if (Number.isNaN(sume)) {
        return '0';
      }
      return parseInt(sume, 10);
    },
  },
  methods: {
    async guardarRespuesta() {
      await db
        .collection('respuestas')
        .doc(this.id)
        .collection('respuestasEmpresa')
        .doc('pregunta5')
        .set(this.answers);

      await db
        .collection('respuestas')
        .doc(this.id)
        .collection('respuestasEmpresa')
        .doc('pregunta6')
        .set(this.answersSix);
    },
  },
  async created() {
    // Get questions 5
    this.allFive = [];
    const questionFive = await db
      .collection('preguntas')
      .doc('pregunta5')
      .onSnapshot((doc) => {
        // console.log('Current data: ', doc.data());
        this.allFive.push({
          key: doc.id,
          ...doc.data(),
        });
        console.log(this.allFive);
      });
    console.log(questionFive);
    // Get questions 6
    this.allSix = [];
    const questionSix = await db
      .collection('preguntas')
      .doc('pregunta6')
      .onSnapshot((doc) => {
        // console.log('Current data: ', doc.data());
        this.allSix.push({
          key: doc.id,
          ...doc.data(),
        });
        console.log(this.allSix);
      });
    console.log(questionSix);
    // Get answers 5
    // this.answers = {};
    const getAnswers = await db
      .collection('respuestas')
      .doc(this.id)
      .collection('respuestasEmpresa')
      .doc('pregunta5')
      .onSnapshot((doc) => {
        console.log('Current data:', doc.data());
        if (doc.exists) {
          this.answers = doc.data();
        }
      });
    console.log('this props', this.id);
    console.log(getAnswers);

    // Get answers
    // this.answers = {};
    const getAnswersSix = await db
      .collection('respuestas')
      .doc(this.id)
      .collection('respuestasEmpresa')
      .doc('pregunta6')
      .onSnapshot((doc) => {
        console.log('Current data:', doc.data());
        if (doc.exists) {
          this.answersSix = doc.data();
        }
      });
    console.log(getAnswersSix);
  },
};
</script>

<style scoped lang="scss">
.module {
  margin: 54px 96px 0 96px;
}
h2 {
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 149.8%;
  color: #585858;
}
.paging {
  color: black;
  line-height: 4;
}
.moduleContent {
  width: 45%;
}
.responsive-table-input-matrix {
  width: 100%;
  // border: 1px solid red;
}
.responsive-table-input-matrix tr {
  height: 50px;
}
.options {
  width: 100%;
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  // border: 1px solid rgb(238, 255, 0);
}
.eachOption {
  height: 50px;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  // border: 1px solid rgba(255, 136, 0, 0.835);
}
.align {
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  // border: 1px solid rgb(4, 0, 255);
}
.eachAlign {
  height: 50px;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  // border: 1px solid rgba(0, 255, 21, 0.835);
}
p, label, td {
  font-style: normal;
  font-weight: lighter;
  font-size: 16px;
  line-height: 149.8%;
  color: #585858;
  margin: 20px 0;
}

label{
  // margin: 0 70px 0 20px;
  width: 70%;
}

input{
height: 36px;
width: 108px;
left: 0px;
top: 0px;
border-radius: 6px;
background: #FFFFFF;
/* Gray line */

border: 1px solid #BCBBBB;
box-sizing: border-box;
border-radius: 6px;
}

.btn-container {
  width: 100%;
  display:flex;
  justify-content: center;
}

.btn-e {
  background-color: #d04a02;
  color: white;
  border-radius: 6px;
  border: none;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);
  margin: 50px 0;
  width: 248px;
  height: 40px;
}

.link-btn {
  text-decoration: none;
  line-height: 36px;
  margin: auto;
  font-size: 16px;
  color: white;
}
</style>
