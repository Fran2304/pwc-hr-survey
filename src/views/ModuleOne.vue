<template>
  <div class="survey">
    <!-- <Survey/> -->
    {{id}} es
    <Header />
    <QuestionOne v-bind:id="id" />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import QuestionOne from '@/components/QuestionOne.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Alicorp',
  props: ['id'],
  components: {
    Header,
    QuestionOne,
    Footer,
  },
};
</script>
