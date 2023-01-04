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
      path: '/login',
      component: () => import('../views/Login.vue'),
    },
  ],
});

router.beforeEach(async (to) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', 'about'];
  const authRequired = !publicPages.includes(to.path);
  const auth = localStorage.getItem('user');

  if (authRequired && !auth.user) {
    //auth.returnUrl = to.fullPath;
    return '/login';
  }
});

export default router;
