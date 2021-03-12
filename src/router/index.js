import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
// import Alicorp from '../views/Alicorp.vue';
import ModuleOne from '../views/ModuleOne.vue';
import ModuleTwo from '../views/ModuleTwo.vue';
import ModuleThree from '../views/ModuleThree.vue';
import ModuleFour from '../views/ModuleFour.vue';
// import Breca from '../views/Breca.vue';
import Survey from '../views/Survey.vue';
import Login from '../views/Login.vue';
import Report from '../views/Report.vue';
// import { fb } from '../firebase';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/empresa/:id',
    name: 'Survey',
    component: Survey,
    props: true,
  },
  /* Formulario */
  // {
  //   path: '/empresa/:id/form',
  //   name: 'Alicorp',
  //   component: Alicorp,
  //   props: true,
  // },

  {
    path: '/empresa/:id/moduleOne',
    name: 'ModuleOne',
    component: ModuleOne,
    props: true,
  },
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

  {
    path: '/login',
    name: 'Login',
    component: Login,
  },

  {
    path: '/report',
    name: 'Report',
    component: Report,
    meta: {
      autentificado: true,
    },
  },
];

const router = new VueRouter({
  routes,
});

// router.beforeEach((to, from, next) => {
//   const usuario = fb.auth().currentUser;
//   const autorizacion = to.matched.some((record) => record.meta.autentificado);
//   if (autorizacion && !usuario) {
//     next('Login');
//   } else if (!autorizacion && usuario) {
//     next('Login');
//   } else {
//     next();
//   }
// });

export default router;
