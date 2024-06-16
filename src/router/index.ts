import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: () => {
      const isAuthenticated = !!localStorage.getItem('loginInfo');
      return isAuthenticated ? '/main' : '/login';
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/signIn.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('../components/registration.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../components/main.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/components/profile.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/components/about.vue'),
    meta: { requiresAuth: true }
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('loginInfo');
  console.log(`Navigating to ${to.path}, isAuthenticated: ${isAuthenticated}`);

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      console.log('Not authenticated, redirecting to login');
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
