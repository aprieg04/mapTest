import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mapa from '../components/Mapa.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        // Redirige a la pantalla del creador de hechizos
        path: '/mapa',
        name: 'Mapa',
        component: Mapa,
      }
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
