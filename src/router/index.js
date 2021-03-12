import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Alicorp from '../views/Alicorp.vue';
// import Breca from '../views/Breca.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/empresa/:id',
    name: 'Alicorp',
    component: Alicorp,
    props: true,
  },
  // {
  //   path: '/empresa/CORPORACION-BRECA',
  //   name: 'BRECA',
  //   component: Breca,
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
