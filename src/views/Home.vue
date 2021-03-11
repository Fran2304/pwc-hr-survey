<template>
  <div class="home">
    <Header />
    <h5>Lista de empresas</h5>
    <Companies />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Header from '@/components/Header.vue';
import Companies from '@/components/Companies.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Companies,
    Footer,
  },
};

</script>

<style scoped lang="scss">
h5 {
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 27px;
letter-spacing: 0em;
text-align: center;
margin-top:60px;
margin-bottom: 50px;
margin-left:97px;
color: #707070;
}
</style>
