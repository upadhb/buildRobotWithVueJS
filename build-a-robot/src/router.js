import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './components/HomePage/HomePage.vue';
import RobotBuilder from './components/RobotBuilder/RobotBuilder.vue';
import PartInfo from './components/Parts/PartInfo.vue';
import BrowseParts from './components/Parts/BrowseParts.vue';
import RobotHeads from './components/Parts/RobotHeads.vue';
import RobotArms from './components/Parts/RobotArms.vue';
import RobotTorsos from './components/Parts/RobotTorsos.vue';
import RobotBases from './components/Parts/RobotBases.vue';
import StandardSidebar from './components/SideBars/SidebarStandard.vue';
import BuildSidebar from './components/SideBars/SidebarBuild.vue';
import ShoppingCart from './components/Cart/ShoppingCart.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
      {
        path: '/',
        name: 'HomePage',
        components: {
            default: HomePage,
            sidebar: StandardSidebar
        },
      },
      {
        path: '/robotBuilder',
        name: 'RobotBuilder',
        components: {
            default: RobotBuilder,
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
        beforeEnter(to, from, next) {
            const isValidId = Number.isInteger(Number(to.params.id));
            next(isValidId);
        }
      },
      {
          path: '/cart',
          name: 'Cart',
          component: ShoppingCart
      }

  ],
});
