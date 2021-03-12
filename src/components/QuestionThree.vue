<template>
  <div>
    es{{id}}
    <div class="module">
      <h2 v-if="allThree.length">{{ allThree[0].section }}</h2>
      <!-- <pre>{{ allOne }}</pre> -->
      <div id="moduleIContent" class="moduleContent">
        <div v-if="allThree.length">
          <p v-if="allThree.length">{{ allThree[0].title }}</p>
          <br />
          <div v-if="allThree.length" class="table-input">
            <input type="radio" :value="horizontal[0]" v-model="answers.options" />
            <label>{{ horizontal[0] }}</label>
            <input type="radio" :value="horizontal[1]" v-model="answers.options" />
            <label>{{ horizontal[1] }}</label>

            <input type="radio" :value="horizontal[2]" v-model="answers.options" />
            <label>{{ horizontal[2] }}</label>

            <!-- Boton -->

            <pre>
              a. Respuesta
              : {{ answers.options }}</pre
            >
          </div>
          <!-- Question 4 -->
        </div>
        <div v-if="this.answers.options.includes(horizontal[0])">
          <div v-if="allFour.length">
            <p v-if="allFour.length">{{ allFour[0].title }}</p>
            <br />
            <div v-if="allFour.length" class="table-input">
              <input type="checkbox" :value="horizontalFour[0]" v-model="answersFour.options" />
              <label>{{ horizontalFour[0] }}</label>
              <input type="checkbox" :value="horizontalFour[1]" v-model="answersFour.options" />
              <label>{{ horizontalFour[1] }}</label>

              <input type="checkbox" :value="horizontalFour[2]" v-model="answersFour.options" />
              <label>{{ horizontalFour[2] }}</label>

              <input type="checkbox" :value="horizontalFour[3]" v-model="answersFour.options" />
              <label>{{ horizontalFour[3] }}</label>

              <!-- Boton -->

              <pre>
              a. Respuesta
              : {{ answersFour.options }}</pre
              >
            </div>
          </div>
        </div>
        <div class="btn-container">
            <input class="btn-e" type="button" value="SIGUIENTE MÓDULO" @click="guardarRespuesta" />
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
      allThree: [],
      answers: {
        options: [],
      },
      allFour: [],
      answersFour: {
        options: [],
      },
    };
  },
  computed: {
    horizontal() {
      return this.allThree[0].optionX;
    },

    horizontalFour() {
      return this.allFour[0].optionX;
    },
  },
  methods: {
    async guardarRespuesta() {
      await db
        .collection('respuestas')
        .doc(this.id)
        .collection('respuestasEmpresa')
        .doc('pregunta3')
        .set(this.answers);

      await db
        .collection('respuestas')
        .doc(this.id)
        .collection('respuestasEmpresa')
        .doc('pregunta4')
        .set(this.answersFour);
    },
  },
  async created() {
    // Get questions 3
    // this.allThree = [];
    const questionThree = await db
      .collection('preguntas')
      .doc('pregunta3')
      .onSnapshot((doc) => {
        this.allThree.push({
          key: doc.id,
          ...doc.data(),
        });
        console.log(this.allThree);
      });
    console.log(questionThree);

    // Get questions 4
    // this.allFour = [];
    const questionFour = await db
      .collection('preguntas')
      .doc('pregunta4')
      .onSnapshot((doc) => {
        if (doc.exists) {
          this.allFour.push({
            key: doc.id,
            ...doc.data(),
          });
          console.log(this.allFour);
        }
      });
    console.log(questionFour);

    // Get answers 3
    // this.answers = {};
    const getAnswers = await db
      .collection('respuestas')
      .doc(this.id)
      .collection('respuestasEmpresa')
      .doc('pregunta3')
      .onSnapshot((doc) => {
        console.log('Current data:', doc.data());
        if (doc.exists) {
          this.answers = doc.data();
        }
      });
    console.log('this props', this.id);
    console.log(getAnswers);

    // Get answers 4
    // this.answersFour = [];
    const getAnswersFour = await db
      .collection('respuestas')
      .doc(this.id)
      .collection('respuestasEmpresa')
      .doc('pregunta4')
      .onSnapshot((doc) => {
        console.log('Current data:', doc.data());
        if (doc.exists) {
          this.answersFour = doc.data();
        }
      });
    console.log('this props', this.id);
    console.log(getAnswersFour);
  },
};
</script>
<style scoped lang="scss">
.secction {
  width: 100%;
  text-align: left;
}
</style>
