<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
          <img src="./assets/build-a-bot-logo.png" class="bot-home"/>
          Home
      </router-link> |
      <router-link to="/build-bot">Build a Bot</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

    body {
        background: linear-gradient(to bottom, #f0ffff, #999);
        background-attachment: fixed;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        margin: 0 auto;
        padding: 30px;
        background-color: azure;
        height: 100%;
    }

    #nav {
      padding: 30px;
      a {
        font-weight: bold;
        color: #2c3e50;
          text-decoration: none;
        &.router-link-exact-active {
          color: #42b983;
        }
    }

    .bot-home {
        height: 20px;
    }
}
</style>
