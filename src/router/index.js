import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import About from '../views/about.vue'
import Tutorial from '../views/tutorial.vue'
import BattleSimulation from '../views/battleSimulation.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/tutorial',
    name: 'tutorial',
    component: Tutorial
  },
  {
    path: '/battleSimulation',
    name: 'battleSimulation',
    component: BattleSimulation
  }
]

const router = new VueRouter({
  routes
})

export default router
