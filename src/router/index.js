import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  { path: '/', component: Home },
  // später kannst du hier Story, Gallery, Contact ergänzen
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router