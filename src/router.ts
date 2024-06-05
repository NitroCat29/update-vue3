import { createRouter } from 'vue-router';

import IndexView from 'IndexView.vue';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: IndexView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
