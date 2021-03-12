<template>
  <div>
    <div class="module">
      <!-- <pre>{{ allSix }}</pre> -->
      <div id="moduleIContent" class="moduleContent">
        <div v-if="allSix.length">
          <p v-if="allSix.length">{{ allSix[0].title }}</p>
          <br />
          <div class="table-input">
            <table class="responsive-table-input-matrix">
              <thead>
                <tr>
                  <th></th>
                  <th>{{ vertical[0] }}</th>
                  <th>{{ vertical[1] }}</th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td>{{ horizontal[0] }}</td>
                  <td>
                    <input type="text" :id="vertical[0]"  v-model="answers.gerenciaF" />
                  </td>
                  <td>
                    <input type="type" :id="vertical[1]" v-model="answers.gerenciaM" />
                  </td>
                </tr>
                <!--Internet Bolsas de trabajo -->
                <tr>
                  <td>{{ horizontal[1] }}</td>
                  <td>
                    <input
                      type="text"
                      :id="vertical[0]"
                      v-model="answers.ejecutivosF"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      :id="vertical[1]"
                      v-model="answers.ejecutivosM"
                    />
                  </td>
                </tr>
                <!--Internet Redes -->
                <tr>
                  <td>{{ horizontal[2] }}</td>
                  <td>
                    <input type="text" :id="vertical[0]"  v-model="answers.mediosF" />
                  </td>
                  <td>
                    <input type="text" :id="vertical[1]" v-model="answers.mediosM" />
                  </td>
                </tr>
                <!--Otro -->
                <tr>
                  <td>{{ horizontal[3] }}</td>
                  <td>
                    <input
                      type="text"
                      :id="vertical[0]"
                      v-model="answers.empleadosF"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      :id="vertical[1]"
                      v-model="answers.empleadosM"
                    />
                  </td>
                </tr>
                <tr>
                  <td>{{ horizontal[4] }}</td>
                  <td>
                    <input type="text" :id="vertical[0]"  v-model="answers.obrerosF" />
                  </td>
                  <td>
                    <input type="text" :id="vertical[1]"  v-model="answers.obrerosM" />
                  </td>
                </tr>
                <tr>
                  <td>{{ horizontal[5] }}</td>
                  <td>
                    <input type="text" :id="vertical[0]" v-model="answers.totalF" />
                  </td>
                  <td>
                    <input type="text" :id="vertical[1]"  v-model="answers.totalM" />
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="btn-container">
            <input class="btn-e" type="button" value="SIGUIENTE MÓDULO" @click="guardarRespuesta" />
            </div>
            <pre> : {{ answers.gerenciaF}} {{ answers.gerenciaM}}</pre>
            <pre> : {{ answers.ejecutivosF }} {{ answers.ejecutivosM }}</pre>
            <pre>: {{ answers.mediosF }} {{ answers.mediosM }}</pre>
            <pre>: {{ answers.empleadosF }} {{ answers.empleadosM }}</pre>
            <pre>: {{ answers.obrerosF }} {{ answers.obrerosM }}</pre>
            <pre>: {{ answers.totalF }} {{ answers.totalM }}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { db } from '../firebase';

export default {
  name: 'QuestionSix',
  props: ['id'],
  components: {},
  data() {
    return {
      allSix: [],
      answers: {
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
    // a computed getter
    vertical() {
      // `this` points to the vm instance
      return this.allSix[0].optionY;
    },

    horizontal() {
      // `this` points to the vm instance
      return this.allSix[0].optionX;
    },
  },

  methods: {
    async guardarRespuesta() {
      await db
        .collection('respuestas')
        .doc(this.id)
        .collection('respuestasEmpresa')
        .doc('pregunta6')
        .set(this.answers);
    },
  },
  async created() {
    // Get questions
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

    // Get answers
    // this.answers = {};
    const getAnswers = await db
      .collection('respuestas')
      .doc(this.id)
      .collection('respuestasEmpresa')
      .doc('pregunta6')
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
