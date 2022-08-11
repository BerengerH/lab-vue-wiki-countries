// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import 'bootstrap/dist/css/bootstrap.css';


const routes = [
  {
    path: '/',
    name: 'root',
    component: () => import(/* webpackChunkName: 'index' */ '../pages/Navbar.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import(/* webpackChunkName: 'list' */ '../pages/CountriesList.vue'),
    children: [
      {
        path: '/details',
        name: 'details',
        component: () => import(/* webpackChunkName: 'details' */ '../pages/CountriesDetails.vue')
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior() {
  document.getElementById('app').scrollIntoView();
  }
});

export default router;