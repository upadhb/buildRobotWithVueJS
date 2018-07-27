<template>
  <div class="home">
    <HomePage msg="Let's build a Robot"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from '../components/HomePage/HomePage.vue';

export default {
  name: 'home',
  components: {
    HomePage,
  },
};
</script>
