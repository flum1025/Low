import Vue from 'vue';
import Router from 'vue-router';
import Low from '@/components/Low';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Low',
      component: Low,
    },
  ],
});
