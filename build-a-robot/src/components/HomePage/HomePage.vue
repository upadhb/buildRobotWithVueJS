
<template>
  <div class="home">
    <h1 id="home-title">{{ msg }}</h1>
    <div>
        <img class="robot" src="../../assets/robot.png" aria-hidden="true" />
    </div>
      <div class="get-started">
          <a href="#"> <router-link to="/build-bot">Get Started</router-link></a>
      </div>
  </div>
</template>

<script>

import consoleLogMixin from '../mixins/console-log-mixin';

export default {
    name: 'HomePage',
    props: {
        msg: String,
    },
    mixins: [consoleLogMixin]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

.home {
    text-align: center;
}

.robot {
    height: 300px;
}

a {
  color: #42b983;
}
</style>
