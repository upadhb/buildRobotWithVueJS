import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import BuildBot from './views/BuildBot.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/build-bot',
      name: 'build-bot',
      component: BuildBot,
    },
  ],
});
