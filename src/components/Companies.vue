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
      </tr>
      <tr v-for="(cc, index) in companies" :key="cc.key">
        <td class="td-number-body">{{ 'No. '+ (index + 1) }}</td>
        <td class="td-company-body">
          <router-link :to="'/' + 'pwc' + cc.key" class="link-company">{{ cc.name }}</router-link>
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

.link-company{
  text-decoration: none;
}

.container-commpanies{
  display: flex;
  justify-content: center;
}
table, th, td{
  border: 1px solid #999999;
}

table{
  border-collapse: collapse;
}
.th-number {
  height: 56px;
  width: 112px;
  padding: 17px, 16px, 17px, 16px;
  background-color: #dae4f4;
}

.th-company {
  height: 56px;
  width: 1061px;
  padding: 17px, 16px, 17px, 20px;
  background-color: #dae4f4;
}

.td-number-body{
 text-align: center;
 height: 56px;
}

.td-company-body{
padding-left: 25px;
text-align: start;
height: 56px;
}
</style>
