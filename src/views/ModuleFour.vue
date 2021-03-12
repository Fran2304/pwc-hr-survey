<template>
  <div class="survey">
    <!-- <Survey/> -->
    {{id}} es
    <Header/>
    <QuestionFive v-bind:id="id"/>
     <QuestionSix v-bind:id="id"/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import QuestionFive from '@/components/QuestionFive.vue';
import QuestionSix from '@/components/QuestionSix.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Alicorp',
  props: ['id'],
  components: {
    Header,
    QuestionFive,
    QuestionSix,
    Footer,
  },
};
</script>
