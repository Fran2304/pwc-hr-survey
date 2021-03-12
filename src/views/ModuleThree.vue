<template>
  <div class="survey">
    <!-- <Survey/> -->
    {{id}} es
    <Header/>
    <QuestionThree v-bind:id="id"/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import QuestionThree from '@/components/QuestionThree.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Alicorp',
  props: ['id'],
  components: {
    Header,
    QuestionThree,
    Footer,
  },
};
</script>
