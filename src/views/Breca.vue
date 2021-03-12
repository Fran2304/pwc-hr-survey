<template>
  <div class="survey">
    <Header/>
    <InfoUser/>
    <QuestionOneBreca/>
    <QuestionTwo/>
    <QuestionFive/>
    <QuestionSix/>
    <p>Breca</p>
  </div>
</template>

<script>
// import Survey from '@/components/Survey.vue';
import Header from '@/components/Header.vue';
import InfoUser from '@/components/InfoUser.vue';
import QuestionOneBreca from '@/components/QuestionOneBreca.vue';
import QuestionTwo from '@/components/QuestionTwo.vue';
import QuestionFive from '@/components/QuestionFive.vue';
import QuestionSix from '@/components/QuestionSix.vue';

export default {
  name: 'Breca',
  components: {
    Header,
    InfoUser,
    QuestionOneBreca,
    QuestionTwo,
    QuestionFive,
    QuestionSix,
  },
};
</script>
<style scoped lang="scss">

</style>
