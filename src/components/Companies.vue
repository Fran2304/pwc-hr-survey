/* eslint-disable max-len */
<template>
  <div class="container-commpanies">
    <!-- <ul v-for="cc in companies" :key="cc.key">
      <li>{{ cc.name }}</li>
    </ul> -->
    <table>
      <tr>
        <th class="th-number">Número</th>
        <th class="th-company">Empresa</th>
        <th class="th-access">Acceso</th>
      </tr>
      <tr v-for="(cc, index) in companies" :key="cc.key">
        <td class="td-number-body">{{ "No. " + (index + 1) }}</td>
        <td class="td-company-body">
          {{ cc.name }}
        </td>
        <td class="td-access-body">
          <div class="link-company-container">
            <router-link class="link-company" :to="'/' + 'empresa' + '/' + cc.key"
              >ACCEDER</router-link
            >
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { db } from '../firebase';

export default {
  name: 'Companies',
  props: {
    // msg: String,
  },
  data() {
    return {
      companies: [],
    };
  },

  async created() {
    this.companies = [];
    const collectionCompanies = await db.collection('clientes').get();
    collectionCompanies.forEach((doc) => console.log(doc.id, doc.data()));
    collectionCompanies.forEach((doc) => this.companies.push({
      key: doc.id,
      name: doc.data().name,
    }));
  },
};
</script>

<style scoped lang="scss">
.container-commpanies {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}
table,
th,
td {
  border: 1px solid #ccc9c9;
}
table {
  border-collapse: collapse;
}
th {
  height: 56px;
  padding: 17px, 16px, 17px, 16px;
  background-color: #dae4f4;
}
.th-number {
  width: 112px;
}
.th-company {
  width: 861px;
  text-align: left;
  padding-left: 25px;
}
.th-access {
  width: 200px;
}
.td-number-body {
  text-align: center;
  height: 56px;
  color: #707070;
}
.td-company-body {
  padding-left: 25px;
  text-align: start;
  height: 56px;
  color: #707070;
}
.td-access-body {
  text-align: center;
  height: 56px;
}
.link-company-container {
  width: 107px;
  height: 36px;
  margin-left: auto;
  margin-right: auto;
  border: none;
  border-radius: 6px;
  background-color: #d04a02;
}
.link-company {
  text-decoration: none;
  line-height: 36px;
  margin: auto;
  font-size: 16px;
  color: white;
}
</style>
