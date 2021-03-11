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
                <!--Reclutamiento reclutamiento -->
                <tr>
                  <td>{{ horizontal[0] }}</td>
                  <td>
                    <input
                      type="radio"
                      :id="vertical[0]"
                      :value="vertical[0]"
                      v-model="reclutamiento"
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      :id="vertical[1]"
                      :value="vertical[1]"
                      v-model="reclutamiento"
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
                      v-model="induccion"
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      :id="vertical[1]"
                      :value="vertical[1]"
                      v-model="induccion"
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
                      v-model="capacitacion"
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      :id="vertical[1]"
                      :value="vertical[1]"
                      v-model="capacitacion"
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
                      v-model="otro"
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      :id="vertical[1]"
                      :value="vertical[1]"
                      v-model="otro"
                    />
                  </td>

                </tr>
              </tbody>
            </table>
            <pre> a. Reclutamiento y selección de personal
 : {{ reclutamiento }}</pre>
            <pre> b. Inducción
 : {{ induccion }}</pre>
            <pre> c. Capacitación y desarrollo
: {{ capacitacion }}</pre>
            <pre> d. Otros, especificar
: {{ otro }}</pre>
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
      // moduleI: {
      //   pregunta: [
      //     {
      //       reclutamiento: [],
      //       induccion: [],
      //       capacitacion: [],
      //       otro: [],
      //     },
      //   ],
      // },
      reclutamiento: [],
      induccion: [],
      capacitacion: [],
      otro: [],
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
  async created() {
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
