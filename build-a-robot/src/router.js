import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import BuildBot from './views/BuildBot.vue';
import PartInfo from './components/Parts/PartInfo.vue';
import BrowseParts from './components/Parts/BrowseParts.vue';
import RobotHeads from './components/Parts/RobotHeads.vue';
import RobotArms from './components/Parts/RobotArms.vue';
import RobotTorsos from './components/Parts/RobotTorsos.vue';
import RobotBases from './components/Parts/RobotBases.vue';
import StandardSidebar from './components/SideBars/SidebarStandard.vue';
import BuildSidebar from './components/SideBars/SidebarBuild.vue';

Vue.use(Router);

export default new Router({
  routes: [
      {
        path: '/',
        name: 'home',
        components: {
            default: Home,
            sidebar: StandardSidebar
        },
      },
      {
        path: '/build-bot',
        name: 'build-bot',
        components: {
            default: BuildBot,
            sidebar: BuildSidebar
        },
      },
      {
          path: '/parts/browse',
          name: 'BrowseParts',
          component: BrowseParts,
          children: [
              {
                  path: 'heads',
                  name: 'BrowseHeads',
                  component: RobotHeads
              },
              {
                  path: 'arms',
                  name: 'BrowseArms',
                  component: RobotArms
              },
              {
                  path: 'torsos',
                  name: 'BrowseTorsos',
                  component: RobotTorsos
              },
              {
                  path: 'bases',
                  name: 'BrowseBases',
                  component: RobotBases
              }
          ]
      },
      {
        path: '/parts/:partType/:id',
        name: 'Parts',
        component: PartInfo,
        props: true,
      },

  ],
});
