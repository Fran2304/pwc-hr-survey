<template>
  <div>
    <div class="module">
      <h2 v-if="allTwo.length">{{ allTwo[0].section }}</h2>
      <!-- <pre>{{ allTwo }}</pre> -->
      <div id="moduleIContent" class="moduleContent">
        <div v-if="allTwo.length">
          <p v-if="allTwo.length">{{ allTwo[0].title }}</p>
          <br />
          <div class="table-input">
            <table class="responsive-table-input-matrix">
              <thead>
                <tr>
                  <th></th>
                  <th>{{ vertical[0] }}</th>
                  <th>{{ vertical[1] }}</th>
                  <th>{{ vertical[2] }}</th>
                  <th>{{ vertical[3] }}</th>
                  <th>{{ vertical[4] }}</th>
                </tr>
              </thead>
              <tbody>
                <!--Reclutamiento interno -->
                <tr>
                  <td>{{ horizontal[0] }}</td>
                  <td>
                    <input
                      type="checkbox"
                      :id="vertical[0]"
                      :value="vertical[0]"
                      v-model="interno"
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      :id="vertical[1]"
                      :value="vertical[1]"
                      v-model="interno"
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      :id="vertical[2]"
                      :value="vertical[2]"
                      v-model="interno"
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      :id="vertical[3]"
                      :value="vertical[3]"
                      v-model="interno"
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      :id="vertical[4]"
                      :value="vertical[4]"
                      v-model="interno"
                    />
                  </td>
                </tr>
                 <!--Internet Bolsas de trabajo -->
                <tr>
                  <td>{{ horizontal[1] }}</td>
                  <td>
                    <input
                      type="checkbox"
                      :id="vertical[0]"
                      :value="vertical[0]"
                      v-model="bolsaTrabajo"
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      :id="vertical[1]"
                      :value="vertical[1]"
                      v-model="bolsaTrabajo"
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      :id="vertical[2]"
                      :value="vertical[2]"
                      v-model="bolsaTrabajo"
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      :id="vertical[3]"
                      :value="vertical[3]"
                      v-model="bolsaTrabajo"
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      :id="vertical[4]"
                      :value="vertical[4]"
                      v-model="bolsaTrabajo"
                    />
                  </td>
                </tr>
                <!--Internet Redes -->
                <tr>
                  <td>{{ horizontal[2] }}</td>
                  <td>
                    <input
                      type="checkbox"
                      :id="vertical[0]"
                      :value="vertical[0]"
                      v-model="redesSociales"
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      :id="vertical[1]"
                      :value="vertical[1]"
                      v-model="redesSociales"
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      :id="vertical[2]"
                      :value="vertical[2]"
                      v-model="redesSociales"
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      :id="vertical[3]"
                      :value="vertical[3]"
                      v-model="redesSociales"
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      :id="vertical[4]"
                      :value="vertical[4]"
                      v-model="redesSociales"
                    />
                  </td>
                </tr>
                <!--Otro -->
                <tr>
                  <td>{{ horizontal[3] }}</td>
                  <td>
                    <input
                      type="checkbox"
                      :id="vertical[0]"
                      :value="vertical[0]"
                      v-model="otro"
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      :id="vertical[1]"
                      :value="vertical[1]"
                      v-model="otro"
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      :id="vertical[2]"
                      :value="vertical[2]"
                      v-model="otro"
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      :id="vertical[3]"
                      :value="vertical[3]"
                      v-model="otro"
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      :id="vertical[4]"
                      :value="vertical[4]"
                      v-model="otro"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <pre> interno : {{ interno }}</pre>
            <pre> bolsaTrabajo : {{ bolsaTrabajo }}</pre>
            <pre> redesSociales: {{ redesSociales }}</pre>
            <pre> otro: {{ otro }}</pre>
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
      allTwo: [],
      answers: [],
      // moduleI: {
      //   pregunta: [
      //     {
      //       interno: ['Gerencia general'],
      //       bolsaTrabajo: [],
      //       redesSociales: [],
      //       otro: [],
      //     },
      //   ],
      // },
      interno: [],
      bolsaTrabajo: [],
      redesSociales: [],
      otro: [],
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
  async created() {
    this.allTwo = [];
    const questionTwo = await db
      .collection('preguntas')
      .doc('pregunta2')
      .onSnapshot((doc) => {
        // console.log('Current data: ', doc.data());
        this.allTwo.push({
          key: doc.id,
          ...doc.data(),
        });
        console.log(this.allTwo);
      });
    console.log(questionTwo);
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
