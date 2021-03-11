<template>
  <div>
    <div class="module">
      <h2 v-if="allSix.length">{{ allSix[0].section }}</h2>
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
                    <input type="text" :id="vertical[0]"  v-model="gerenciaF" />
                  </td>
                  <td>
                    <input type="type" :id="vertical[1]" v-model="gerenciaM" />
                  </td>
                </tr>
                <!--Internet Bolsas de trabajo -->
                <tr>
                  <td>{{ horizontal[1] }}</td>
                  <td>
                    <input
                      type="text"
                      :id="vertical[0]"
                      v-model="ejecutivosF"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      :id="vertical[1]"
                      v-model="ejecutivosM"
                    />
                  </td>
                </tr>
                <!--Internet Redes -->
                <tr>
                  <td>{{ horizontal[2] }}</td>
                  <td>
                    <input type="text" :id="vertical[0]"  v-model="mediosF" />
                  </td>
                  <td>
                    <input type="text" :id="vertical[1]" v-model="mediosM" />
                  </td>
                </tr>
                <!--Otro -->
                <tr>
                  <td>{{ horizontal[3] }}</td>
                  <td>
                    <input
                      type="text"
                      :id="vertical[0]"
                      v-model="empleadosF"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      :id="vertical[1]"
                      v-model="empleadosM"
                    />
                  </td>
                </tr>
                <tr>
                  <td>{{ horizontal[4] }}</td>
                  <td>
                    <input type="text" :id="vertical[0]"  v-model="obrerosF" />
                  </td>
                  <td>
                    <input type="text" :id="vertical[1]"  v-model="obrerosM" />
                  </td>
                </tr>
                <tr>
                  <td>{{ horizontal[5] }}</td>
                  <td>
                    <input type="text" :id="vertical[0]" v-model="totalF" />
                  </td>
                  <td>
                    <input type="text" :id="vertical[1]"  v-model="totalM" />
                  </td>
                </tr>
              </tbody>
            </table>
            <pre> : {{ gerenciaF}} {{ gerenciaM}}</pre>
            <pre> : {{ ejecutivosF }} {{ ejecutivosM }}</pre>
            <pre>: {{ mediosF }} {{ mediosM }}</pre>
            <pre>: {{ empleadosF }} {{ empleadosM }}</pre>
            <pre>: {{ obrerosF }} {{ obrerosM }}</pre>
            <pre>: {{ totalF }} {{ totalM }}</pre>
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
  components: {},
  data() {
    return {
      allSix: [],
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
  async created() {
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
