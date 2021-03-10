<template>
  <div class="survey">
    <!-- <Survey/> -->
    <Header/>
    <InfoUser/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
// import Survey from '@/components/Survey.vue';
import InfoUser from '@/components/InfoUser.vue';

export default {
  name: 'Alicorp',
  components: {
    Header,
    // Survey,
    InfoUser,
  },
};
</script>
