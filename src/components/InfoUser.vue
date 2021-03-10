<template>
  <div>
    <h2>Bienvenid@. muchas gracias por tu participación</h2>
  </div>
</template>

<script>
import { db } from '../firebase';

console.log(db);
export default {
  name: 'InfoUser',
  props: {
    // msg: String,
  },
  data() {
    return {};
  },
  // firestore: {
  //   collectionCompanies: db.collection('clientes'),
  // },
};
</script>

<style scoped lang="scss">
h2{
font-style: normal;
font-weight: lighter;;
font-size: 32px;
line-height: 149.8%;
}
</style>
