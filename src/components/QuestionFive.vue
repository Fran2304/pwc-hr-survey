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
              <input type="text" id="totalEmployes" v-model="totalPlanilla" />
            </div>
            <div class="eachOption">
              <label>{{ horizontal[1] }}</label>
              <input type="text" id="permanent" v-model="fijo" />
            </div>
            <div class="eachOption">
              <label>{{ horizontal[2] }}</label>
              <input type="text" id="temporary" v-model="temporal" />
            </div>
            <div class="sume">
              <p>{{sumeTimeEmployee}}</p>
            </div>
            <div>
              <label>{{ horizontal[3] }}</label>
              <input type="text" id="lima" v-model="lima" />
            </div>
            <div>
              <label>{{ horizontal[3] }}</label>
              <input type="text" id="province" v-model="provincia" />
            </div>
             <div class="sume">
              <p>{{orignEmployee}}</p>
            </div>
            <pre> totalPlanilla : {{ totalPlanilla }}</pre>
            <pre> permanente : {{ fijo }}</pre>
            <pre> temporal: {{ temporal }}</pre>
            <pre> lima: {{ lima }}</pre>
            <pre> province: {{ provincia }}</pre>
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
      allFive: [],
      answers: [],
      totalPlanilla: '',
      fijo: '',
      temporal: '',
      lima: '',
      provincia: '',
    };
  },
  computed: {
    horizontal() {
      // `this` points to the vm instance
      return this.allFive[0].optionX;
    },
    sumeTimeEmployee() {
      const sume = parseInt(this.fijo, 10) + parseInt(this.temporal, 10);
      if (Number.isNaN(sume)) {
        return '0';
      }
      return parseInt(sume, 10);
    },

    orignEmployee() {
      const sume = parseInt(this.lima, 10) + parseInt(this.provincia, 10);
      if (Number.isNaN(sume)) {
        return '0';
      }
      return parseInt(sume, 10);
    },
  },
  async created() {
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
