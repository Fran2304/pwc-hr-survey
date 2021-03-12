<template>
  <div>
    <div class="module">
      <h2 v-if="allOne.length">{{ allOne[0].section }}</h2>
      <span class="paging">Hoja 1</span>
      <InstructionBoard />
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
              <button
                class="btn-e"
                type="button"
                value="SIGUIENTE MÓDULO"
                @click="guardarRespuesta"
              >
                <router-link
                  class="link-btn"
                  :to="'/' + 'empresa' + '/' + this.id + '/' + 'moduleTwo'"
                >
                  SIGUIENTE</router-link
                >
              </button>
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
        this.allOne.push({
          key: doc.id,
          ...doc.data(),
        });
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
        // console.log('Current data:', doc.data());
        if (doc.exists) {
          this.answers = doc.data();
        }
      });
    // console.log('this props', this.id);
    console.log(getAnswers);
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
p {
  font-style: normal;
  font-weight: lighter;
  font-size: 16px;
  line-height: 149.8%;
  color: #585858;
  margin: 20px 0;
}

.table-input {
  color: #585858;
}

.responsive-table-input-matrix {
  font-style: normal;
  font-weight: lighter;
  font-size: 16px;
  line-height: 149.8%;
}

td {
  padding: 5px 30px;
}

th {
  padding: 5px 30px;
}

.table-title-content {
  text-align: center;
  background-color: #4577c9;
  color: white;
  font-weight: 400;
}

.table-radio-content {
  text-align: center;
  border:  1px solid rgb(218, 215, 215);
}

.btn-container {
  width: 100%;
  display: flex;
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
