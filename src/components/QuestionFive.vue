<template>
  <div>
    <div class="module">
      <h2 v-if="allFive.length">{{ allFive[0].section }}</h2>
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
            <div>
              <label>{{ horizontal[3] }}</label>
              <input type="text" id="lima" v-model="answers.lima" />
            </div>
            <div>
              <label>{{ horizontal[3] }}</label>
              <input type="text" id="province" v-model="answers.provincia" />
            </div>
             <div class="sume">
              <p>{{orignEmployee}}</p>
            </div>

            <div class="btn-container">
            <input class="btn-e" type="button" value="SIGUIENTE MÓDULO" @click="guardarRespuesta" />
            </div>
            <pre> totalPlanilla : {{ answers.totalPlanilla }}</pre>
            <pre> permanente : {{ answers.fijo }}</pre>
            <pre> temporal: {{ answers.temporal }}</pre>
            <pre> lima: {{ answers.lima }}</pre>
            <pre> province: {{ answers.provincia }}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { db } from '../firebase';

export default {
  name: 'About',
  props: ['id'],
  components: {},
  data() {
    return {
      allFive: [],
      answers: {
        totalPlanilla: '',
        fijo: '',
        temporal: '',
        lima: '',
        provincia: '',
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
    },
  },
  async created() {
    // Get questions
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

    // Get answers
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
  },
};
</script>

<style scoped lang="scss">
h2 {
  font-style: normal;
  font-weight: lighter;
  font-size: 32px;
  line-height: 149.8%;
}
</style>
