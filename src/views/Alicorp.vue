<template>
  <div class="survey">
    <!-- <Survey/> -->
    {{id}} es
    <Header />
    <InfoUser />
    <hr>
    <ProgressTrack />
    <hr>
    <QuestionOne v-bind:id="id" />
    <hr>
    <QuestionTwo v-bind:id="id" />
    <hr>
    <QuestionFive />
    <hr>
    <QuestionSix />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
// import Survey from '@/components/Survey.vue';
import InfoUser from '@/components/InfoUser.vue';
import ProgressTrack from '@/components/ProgressTrack.vue';
import QuestionOne from '@/components/QuestionOne.vue';
import QuestionTwo from '@/components/QuestionTwo.vue';
import QuestionFive from '@/components/QuestionFive.vue';
import QuestionSix from '@/components/QuestionSix.vue';

export default {
  name: 'Alicorp',
  props: ['id'],
  components: {
    Header,
    // Survey,
    InfoUser,
    ProgressTrack,
    QuestionOne,
    QuestionTwo,
    QuestionFive,
    QuestionSix,
  },
};
</script>
