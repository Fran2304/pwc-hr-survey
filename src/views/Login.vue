<template>
  <div class="survey">
    {{id}}es
    <Authentication/>
  </div>
</template>

<script>
// @ is an alias to /src
import Authentication from '@/components/Authentication.vue';

export default {
  name: 'Alicorp',
  props: ['id'],
  components: {
    Authentication,
  },
};
</script>

<style scoped lang="scss">
.survey {
  width: 100%;
}
</style>
