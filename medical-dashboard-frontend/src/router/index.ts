import Home from '@/page/Home.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: () => import('../page/Schedule.vue'),
    },
    {
      path: '/nurse',
      name: 'nurse',
      component: () => import('../page/Nurse.vue'),
    },
    {
      path: '/transfuse',
      name: 'transfuse',
      component: () => import('../page/Transfuse.vue'),
    },
    {
      path: '/ward',
      name: 'ward',
      component: () => import('../page/Ward.vue'),
    },
    {
      path: '/overview',
      name: 'overview',
      component: () => import('../page/Overview.vue'),
    },
  ],
});

export default router;
