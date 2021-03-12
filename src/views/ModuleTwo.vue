<template>
  <div class="survey">
    <!-- <Survey/> -->
    {{id}} es
    <Header/>
    <QuestionTwo v-bind:id="id"/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import QuestionTwo from '@/components/QuestionTwo.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Alicorp',
  props: ['id'],
  components: {
    Header,
    QuestionTwo,
    Footer,
  },
};
</script>
