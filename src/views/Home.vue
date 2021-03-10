<template>
  <div class="home">
    <Header/>
    <h5>Lista de empresas</h5>
    <Companies />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Companies from '@/components/Companies.vue';
import Header from '@/components/Header.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Companies,
  },
};

</script>

<style scoped lang="scss">

h5{
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 27px;
letter-spacing: 0em;
text-align: left;
margin-top:78px;
margin-bottom: 57px;
margin-left:97px;
 }
</style>
