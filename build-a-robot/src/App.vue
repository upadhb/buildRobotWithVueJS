<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">
          <img src="./assets/build-a-bot-logo.png" class="bot-home"/>
          Home
      </router-link> |
      <router-link to="/build-bot">Build a Bot</router-link> |
      <router-link to="/parts/browse">Parts Info</router-link>
    </div>
      <div class="container">
         <!-- <aside class="aside">
              <router-view name="sidebar"/>
          </aside>-->
          <main>
              <router-view/>
          </main>
      </div>
  </div>
</template>

<style>
    body {
        background: linear-gradient(to bottom, #f0ffff, #999);
        background-attachment: fixed;
    }
</style>

<style lang="scss" scoped>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
    }

    .container {
        display: flex;
        margin: 10px auto 0 auto;
        justify-content: center;
    }

    .aside {
        padding: 30px;
        background: linear-gradient(to bottom, #f0ffff, #999);
        width: 100px;
        min-height: 300px;
    }


    main {
        padding: 30px;
        background-color: azure;
        width: 100%;
        height: 100%;
        min-height: 700px;
    }

    .nav {
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
