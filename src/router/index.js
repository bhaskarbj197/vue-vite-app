import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/about',
      component: () => import('../views/About.vue'),
    },
    {
      path: '/registration',
      component: () => import('../views/Registration.vue'),
    },
    {
      path: '/login',
      component: () => import('../views/Login.vue'),
      meta: {
        hideSidebar: true,
      },
    },
  ],
});

router.beforeEach(async (to) => {
  // console.log('to path: ', to.path);
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/about'];
  const authRequired = !publicPages.includes(to.path);
  const auth = localStorage.getItem('user');

  // JSON.parse(auth).jwt_token

  if (authRequired && !auth) {
    console.log('authentication required: ', authRequired);
    //auth.returnUrl = to.fullPath;
    return '/login';
  }
});

export default router;
