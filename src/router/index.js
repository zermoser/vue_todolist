import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/homeView.vue'
import EditView from '../views/editView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/todo/:id/edit',
      name: 'edit-view',
      component: EditView
    }
  ]
})

export default router