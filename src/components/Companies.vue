<template>
  <div>
    <ul v-for="cc in companies" :key="cc.key">
      <li >
        <h1>{{ cc.name }}</h1>
      </li>
    </ul>
    <p>Holi mundo. Aquí se mostrarán los datos de las empresas</p>
  </div>
</template>

<script>
import { db } from '../firebase';

console.log(db);
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
  // firestore: {
  //   collectionCompanies: db.collection('clientes'),
  // },

  async created() {
    this.companies = [];
    const collectionCompanies = await db.collection('clientes').get();
    collectionCompanies.forEach((doc) => console.log(doc.id, doc.data()));
    collectionCompanies.forEach((doc) => this.companies.push({
      key: doc.id,
      name: doc.data().nombreEmpresa,
    }));

    const subCollectionCompanies = await db.collection('respuestas/y0yaFFmKtIRQOizhoEVO/respuestas').get();
    subCollectionCompanies.forEach((doc) => console.log(doc.id, doc.data()));
  },
};
</script>
