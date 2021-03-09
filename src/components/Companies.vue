<template>
  <div>

    <!-- <ul v-for="cc in collectionCompanies" :key="cc.id">

      <li >
        <h1>{{ cc.nombreEmpresa }}</h1>
      </li>
    </ul> -->

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
  // data() {
  //   return {
  //     collectionCompanies: [],
  //   };
  // },
  // firestore: {
  //   collectionCompanies: db.collection('clientes'),
  // },

  async created() {
    const collectionCompanies = await db.collection('clientes').get();
    collectionCompanies.forEach((doc) => console.log(doc.id, doc.data()));

    const subCollectionCompanies = await db.collection('respuestas/y0yaFFmKtIRQOizhoEVO/respuestas').get();
    subCollectionCompanies.forEach((doc) => console.log(doc.id, doc.data()));
  },
};
</script>
