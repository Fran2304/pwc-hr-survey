<template>
  <header>
    <div class="header-left">
      <img class="pwc-logo" src="../assets/pwc-logo.png" alt="">
    </div>
    <div class="header-right">
      <img class="sobre" src="../assets/sobre.png" alt="">
      <img class="bell" src="../assets/bell.png" alt="">
      <div class="myInfo">MIS DATOS</div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Companies',
  props: {
    // msg: String,
  },
  data() {
    return {
    };
  },
  // firestore: {
  //   collectionCompanies: db.collection('clientes'),
  // },
};
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;500;600;700;800&display=swap');

header {
  width: 100vw;
  display: flex;
  justify-content: space-between;
  height: 72px;
  padding-top: 7px;
  background: #FFFFFF;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);
}
.header-left {
  margin-left:93px;
  width: 80px;
  height: 60px;
}
.header-left img {
  width: 100%;
}
.header-right {
  width: 380px;
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  margin-right:96px;
  align-items: center;
}
.sobre {
  width: 42px;
  height: 32px;
}
.bell {
 width: 30px;
  height: 32px;
}
.myInfo {
  width:116px;
  height: 40px;
  border-radius: 6px;
  border: solid 1px #D04A02;
  color: #D04A02;
  font-size: 16px;
  font-style: normal;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
