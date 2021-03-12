<template>
  <div class="report">
    {{id}}es
    <Header/>
    <Graph v-bind:id="id"/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Graph from '@/components/Graph.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Report',
  props: ['id'],
  components: {
    Header,
    Graph,
    Footer,
  },
};
</script>

<style scoped lang="scss">
.survey {
  width: 100%;
}
</style>
