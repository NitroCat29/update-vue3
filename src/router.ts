import { createRouter, createMemoryHistory } from 'vue-router';
import HomeView from '@/Pages/HomeView.vue';
import AboutView from '@/Pages/AboutView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
