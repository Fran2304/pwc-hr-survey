<template>
  <div>
    <!-- {{id}} es -->
    <div class="module">
      <h2 v-if="allTwo.length">{{ allTwo[0].section }}</h2>
      <span class="paging">Hoja 1</span>
      <InstructionBoard />
      <!-- <pre>{{ allTwo }}</pre> -->
      <div class="table-input">
        <div v-if="allTwo.length">
          <p v-if="allTwo.length">{{ allTwo[0].title }}</p>
          <br />
          <div class="table-input">
            <table class="responsive-table-input-matrix">
              <thead>
                <tr>
                  <th></th>
                  <th class="table-title-content">{{ vertical[0] }}</th>
                  <th class="table-title-content">{{ vertical[1] }}</th>
                  <th class="table-title-content">{{ vertical[2] }}</th>
                  <th class="table-title-content">{{ vertical[3] }}</th>
                  <th class="table-title-content">{{ vertical[4] }}</th>
                </tr>
              </thead>
              <tbody>
                <!--Reclutamiento interno -->
                <tr>
                  <td>{{ horizontal[0] }}</td>
                  <td class="table-radio-content">
                    <input
                      type="checkbox"
                      :id="vertical[0]"
                      :value="vertical[0]"
                      v-model="answers.interno"
                    />
                  </td>
                  <td class="table-radio-content">
                    <input
                      type="checkbox"
                      :id="vertical[1]"
                      :value="vertical[1]"
                      v-model="answers.interno"
                    />
                  </td>
                  <td class="table-radio-content">
                    <input
                      type="checkbox"
                      :id="vertical[2]"
                      :value="vertical[2]"
                      v-model="answers.interno"
                    />
                  </td>
                  <td class="table-radio-content">
                    <input
                      type="checkbox"
                      :id="vertical[3]"
                      :value="vertical[3]"
                      v-model="answers.interno"
                    />
                  </td>
                  <td class="table-radio-content">
                    <input
                      type="checkbox"
                      :id="vertical[4]"
                      :value="vertical[4]"
                      v-model="answers.interno"
                    />
                  </td>
                </tr>
                <!--Internet Bolsas de trabajo -->
                <tr>
                  <td>{{ horizontal[1] }}</td>
                  <td class="table-radio-content">
                    <input
                      type="checkbox"
                      :id="vertical[0]"
                      :value="vertical[0]"
                      v-model="answers.bolsaTrabajo"
                    />
                  </td>
                  <td class="table-radio-content">
                    <input
                      type="checkbox"
                      :id="vertical[1]"
                      :value="vertical[1]"
                      v-model="answers.bolsaTrabajo"
                    />
                  </td>
                  <td class="table-radio-content">
                    <input
                      type="checkbox"
                      :id="vertical[2]"
                      :value="vertical[2]"
                      v-model="answers.bolsaTrabajo"
                    />
                  </td>
                  <td class="table-radio-content">
                    <input
                      type="checkbox"
                      :id="vertical[3]"
                      :value="vertical[3]"
                      v-model="answers.bolsaTrabajo"
                    />
                  </td>
                  <td class="table-radio-content">
                    <input
                      type="checkbox"
                      :id="vertical[4]"
                      :value="vertical[4]"
                      v-model="answers.bolsaTrabajo"
                    />
                  </td>
                </tr>
                <!--Internet Redes -->
                <tr>
                  <td >{{ horizontal[2] }}</td>
                  <td class="table-radio-content">
                    <input
                      type="checkbox"
                      :id="vertical[0]"
                      :value="vertical[0]"
                      v-model="answers.redesSociales"
                    />
                  </td>
                  <td class="table-radio-content">
                    <input
                      type="checkbox"
                      :id="vertical[1]"
                      :value="vertical[1]"
                      v-model="answers.redesSociales"
                    />
                  </td>
                  <td class="table-radio-content">
                    <input
                      type="checkbox"
                      :id="vertical[2]"
                      :value="vertical[2]"
                      v-model="answers.redesSociales"
                    />
                  </td>
                  <td class="table-radio-content">
                    <input
                      type="checkbox"
                      :id="vertical[3]"
                      :value="vertical[3]"
                      v-model="answers.redesSociales"
                    />
                  </td>
                  <td class="table-radio-content">
                    <input
                      type="checkbox"
                      :id="vertical[4]"
                      :value="vertical[4]"
                      v-model="answers.redesSociales"
                    />
                  </td>
                </tr>
                <!--Otro -->
                <tr>
                  <td>{{ horizontal[3] }}</td>
                  <td class="table-radio-content">
                    <input
                      type="checkbox"
                      :id="vertical[0]"
                      :value="vertical[0]"
                      v-model="answers.otro"
                    />
                  </td>
                  <td class="table-radio-content">
                    <input
                      type="checkbox"
                      :id="vertical[1]"
                      :value="vertical[1]"
                      v-model="answers.otro"
                    />
                  </td>
                  <td class="table-radio-content">
                    <input
                      type="checkbox"
                      :id="vertical[2]"
                      :value="vertical[2]"
                      v-model="answers.otro"
                    />
                  </td>
                  <td class="table-radio-content">
                    <input
                      type="checkbox"
                      :id="vertical[3]"
                      :value="vertical[3]"
                      v-model="answers.otro"
                    />
                  </td>
                  <td class="table-radio-content">
                    <input
                      type="checkbox"
                      :id="vertical[4]"
                      :value="vertical[4]"
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
                  :to="'/' + 'empresa' + '/' + this.id + '/' + 'moduleThree'"
                >
                  SIGUIENTE</router-link
                >
              </button>
            </div>

            <!-- <pre> interno : {{ answers.interno }}</pre>
            <pre> bolsaTrabajo : {{ answers.bolsaTrabajo }}</pre>
            <pre> redesSociales: {{ answers.redesSociales }}</pre>
            <pre> otro: {{ answers.otro }}</pre> -->
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
      allTwo: [],
      answers: {
        interno: [],
        bolsaTrabajo: [],
        redesSociales: [],
        otro: [],
      },
    };
  },
  computed: {
    // a computed getter
    vertical() {
      // `this` points to the vm instance
      return this.allTwo[0].optionY;
    },

    horizontal() {
      // `this` points to the vm instance
      return this.allTwo[0].optionX;
    },
  },
  methods: {
    async guardarRespuesta() {
      await db
        .collection('respuestas')
        .doc(this.id)
        .collection('respuestasEmpresa')
        .doc('pregunta2')
        .set(this.answers);
    },
  },
  async created() {
    this.allTwo = [];
    const questionTwo = await db
      .collection('preguntas')
      .doc('pregunta2')
      .onSnapshot((doc) => {
        this.allTwo.push({
          key: doc.id,
          ...doc.data(),
        });
        // console.log(this.allTwo);
      });
    console.log(questionTwo);
    // gET ANSWERS
    // this.answers = {};
    const getAnswers = await db
      .collection('respuestas')
      .doc(this.id)
      .collection('respuestasEmpresa')
      .doc('pregunta2')
      .onSnapshot((doc) => {
        console.log('Current data:', doc.data());
        if (doc.exists) {
          this.answers = doc.data();
        }
      });
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
  text-align: center;
}

th input{
  text-align: center;
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
