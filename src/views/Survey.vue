<template>
  <div class="survey">
    <Header/>
    <InfoUser v-bind:id="id"/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import InfoUser from '@/components/InfoUser.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Alicorp',
  props: ['id'],
  components: {
    Header,
    InfoUser,
    Footer,
  },
};
</script>

<style scoped lang="scss">
.survey {
  width: 100%;
}
</style>
