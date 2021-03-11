<template>
  <div>
    <div class="module">
      <h2 v-if="allOne.length">{{ allOne[0].section }}</h2>
      <!-- <pre>{{ allOne }}</pre> -->
      <div id="moduleIContent" class="moduleContent">
        <div v-if="allOne.length">
          <p v-if="allOne.length">{{ allOne[0].title }}</p>
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
                <!--Reclutamiento answers.reclutamiento -->
                <tr>
                  <td>{{ horizontal[0] }}</td>
                  <td>
                    <input
                      type="radio"
                      :id="vertical[0]"
                      :value="vertical[0]"
                      v-model="answers.reclutamiento"
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      :id="vertical[1]"
                      :value="vertical[1]"
                      v-model="answers.reclutamiento"
                    />
                  </td>
                </tr>
                <!--Internet Bolsas de trabajo -->
                <tr>
                  <td>{{ horizontal[1] }}</td>
                  <td>
                    <input
                      type="radio"
                      :id="vertical[0]"
                      :value="vertical[0]"
                      v-model="answers.induccion"
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      :id="vertical[1]"
                      :value="vertical[1]"
                      v-model="answers.induccion"
                    />
                  </td>
                </tr>
                <!--Internet Redes -->
                <tr>
                  <td>{{ horizontal[2] }}</td>
                  <td>
                    <input
                      type="radio"
                      :id="vertical[0]"
                      :value="vertical[0]"
                      v-model="answers.capacitacion"
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      :id="vertical[1]"
                      :value="vertical[1]"
                      v-model="answers.capacitacion"
                    />
                  </td>
                </tr>
                <!--Otro -->
                <tr>
                  <td>{{ horizontal[3] }}</td>
                  <td>
                    <input
                      type="radio"
                      :id="vertical[0]"
                      :value="vertical[0]"
                      v-model="answers.otro"
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      :id="vertical[1]"
                      :value="vertical[1]"
                      v-model="answers.otro"
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <!-- Boton -->
            <input type="button" value="SIGUIENTE MÓDULO" @click="guardarRespuesta" />
            <pre>
 a. Reclutamiento y selección de personal
 : {{ answers.reclutamiento }}</pre
            >
            <pre>
 b. Inducción
 : {{ answers.induccion }}</pre
            >
            <pre>
 c. Capacitación y desarrollo
: {{ answers.capacitacion }}</pre
            >
            <pre>
 d. Otros, especificar
: {{ answers.otro }}</pre
            >
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
  components: {},
  data() {
    return {
      allOne: [],
      answers: {
        reclutamiento: [],
        induccion: [],
        capacitacion: [],
        otro: [],
      },

      ejemplo: {
        rojo: [1, 2, 3],
        blanco: [4, 5],
        marron: [1],
        gris: [0],
      },
    };
  },
  computed: {
    // a computed getter
    vertical() {
      // `this` points to the vm instance
      return this.allOne[0].optionY;
    },

    horizontal() {
      // `this` points to the vm instance
      return this.allOne[0].optionX;
    },
  },
  methods: {
    async guardarRespuesta() {
      await db
        .collection('respuestas')
        .doc('ALICORP')
        .collection('respuestasEmpresa')
        .doc('pregunta1')
        .set(this.answers);
    },
  },
  async created() {
    // Get questions
    this.allOne = [];
    const questionOne = await db
      .collection('preguntas')
      .doc('pregunta1')
      .onSnapshot((doc) => {
        // console.log('Current data: ', doc.data());
        this.allOne.push({
          key: doc.id,
          ...doc.data(),
        });
        console.log(this.allOne);
      });
    console.log(questionOne);
    // Get answers
    this.answers = [];
    const getAnswers = await db
      .collection('respuestas')
      .doc('ALICORP')
      .collection('respuestasEmpresa')
      .doc('pregunta1')
      .onSnapshot((doc) => {
        console.log('Current data:', doc.data());
        this.answers = doc.data();
      });
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
