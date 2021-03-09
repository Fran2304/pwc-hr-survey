<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Companies />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Companies from '@/components/Companies.vue';

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    Companies,
  },
};
</script>
