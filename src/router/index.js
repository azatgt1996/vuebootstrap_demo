import { createRouter, createWebHistory } from 'vue-router';

export const routes = [
  { path: '/form', component: () => import('../views/Form.vue') },
  { path: '/about', component: () => import('../views/About.vue') },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});