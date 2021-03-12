<template>
  <div class="survey">
    <!-- <Survey/> -->
    <!-- {{id}} es -->
    <Header/>
    <QuestionOne v-bind:id="id"/>
    <QuestionTwo v-bind:id="id"/>
    <QuestionThree v-bind:id="id"/>
    <QuestionFive v-bind:id="id"/>
    <QuestionSix v-bind:id="id"/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
// import Survey from '@/components/Survey.vue';
import QuestionOne from '@/components/QuestionOne.vue';
import QuestionTwo from '@/components/QuestionTwo.vue';
import QuestionThree from '@/components/QuestionThree.vue';
import QuestionFive from '@/components/QuestionFive.vue';
import QuestionSix from '@/components/QuestionSix.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Alicorp',
  props: ['id'],
  components: {
    Header,
    // Survey,
    QuestionOne,
    QuestionTwo,
    QuestionThree,
    QuestionFive,
    QuestionSix,
    Footer,
  },
};
</script>
