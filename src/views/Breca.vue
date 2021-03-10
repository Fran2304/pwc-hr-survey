<template>
  <div class="survey">
    <Header/>
    <Survey/>
    <p>Breca</p>
  </div>
</template>

<script>
import Survey from '@/components/Survey.vue';
import Header from '@/components/Header.vue';

export default {
  name: 'Breca',
  components: {
    Header,
    Survey,
  },
};
</script>
<style scoped lang="scss">

</style>
