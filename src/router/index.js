import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
<<<<<<< HEAD
import Alicorp from '../views/Alicorp.vue';
=======
// import Alicorp from '../views/Alicorp.vue';
import ModuleOne from '../views/ModuleOne.vue';
import ModuleTwo from '../views/ModuleTwo.vue';
import ModuleThree from '../views/ModuleThree.vue';
import ModuleFour from '../views/ModuleFour.vue';
>>>>>>> 01869fca028ce510a9282c59f42bd060ee0df482
// import Breca from '../views/Breca.vue';
// import Survey from '../views/Survey.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  /*
  {
    path: '/empresa/:id',
    name: 'Survey',
    component: Survey,
    props: true,
  },
<<<<<<< HEAD
  */
=======
  /* Formulario */
  // {
  //   path: '/empresa/:id/form',
  //   name: 'Alicorp',
  //   component: Alicorp,
  //   props: true,
  // },

>>>>>>> 01869fca028ce510a9282c59f42bd060ee0df482
  {
    path: '/empresa/:id/moduleOne',
    name: 'ModuleOne',
    component: ModuleOne,
    props: true,
  },
<<<<<<< HEAD
  /*
=======

>>>>>>> 01869fca028ce510a9282c59f42bd060ee0df482
  {
    path: '/empresa/:id/moduleTwo',
    name: 'ModuleTwo',
    component: ModuleTwo,
    props: true,
  },

  {
    path: '/empresa/:id/moduleThree',
    name: 'ModuleThree',
    component: ModuleThree,
    props: true,
  },

  {
    path: '/empresa/:id/moduleFour',
    name: 'ModuleFour',
    component: ModuleFour,
    props: true,
  },

];

const router = new VueRouter({
  routes,
});

export default router;
