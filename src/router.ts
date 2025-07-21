import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/home.vue'
import Equipment from './pages/equipment.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/equipment', name: 'Equipment', component: Equipment }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
