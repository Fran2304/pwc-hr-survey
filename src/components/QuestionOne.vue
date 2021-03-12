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
                  <th class="table-title-content">{{ vertical[0] }}</th>
                  <th class="table-title-content">{{ vertical[1] }}</th>
                </tr>
              </thead>
              <tbody>
                <!--Reclutamiento answers.reclutamiento -->
                <tr>
                  <td>{{ horizontal[0] }}</td>
                  <td class="table-radio-content">
                    <input
                      type="radio"
                      :id="vertical[0]"
                      :value="vertical[0]"
                      v-model="answers.reclutamiento"
                    />
                  </td>
                  <td class="table-radio-content">
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
                  <td class="table-radio-content">
                    <input
                      type="radio"
                      :id="vertical[0]"
                      :value="vertical[0]"
                      v-model="answers.induccion"
                    />
                  </td>
                  <td class="table-radio-content">
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
                  <td class="table-radio-content">
                    <input
                      type="radio"
                      :id="vertical[0]"
                      :value="vertical[0]"
                      v-model="answers.capacitacion"
                    />
                  </td>
                  <td class="table-radio-content">
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
                  <td class="table-radio-content">
                    <input
                      type="radio"
                      :id="vertical[0]"
                      :value="vertical[0]"
                      v-model="answers.otro"
                    />
                  </td>
                  <td class="table-radio-content">
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
          <div class="btn-container">
            <input class="btn-e" type="button" value="SIGUIENTE MÓDULO" @click="guardarRespuesta" />
          </div>
            <!-- <pre>
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
            > -->
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
        .doc(this.id)
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
    this.answers = {};
    const getAnswers = await db
      .collection('respuestas')
      .doc(this.id)
      .collection('respuestasEmpresa')
      .doc('pregunta1')
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
  font-size: 24px;
  line-height: 149.8%;
  color: #585858;
}

p {
  font-style: normal;
  font-weight: lighter;
  font-size: 16px;
  line-height: 149.8%;
  color: #585858;
  margin: 20px 0;
}

.table-input{
  color: #585858;
}

.responsive-table-input-matrix{
  font-style: normal;
  font-weight: lighter;
  font-size: 16px;
  line-height: 149.8%;
}

td{
  padding: 5px 30px;
}

th{
  padding: 5px 30px;
}

.table-title-content{
  text-align: center;
  background-color: #4577C9;
  color: white;
}

.table-radio-content{
  text-align: center;
}

.btn-container{
  width: 100%;
  text-align: center;
}

.btn-e{
  background-color: #D04A02;
  color: white;
  border-radius: 6px;
  padding: 8px 20px;
  border: none;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);
  margin: 50px 0;
}
</style>
