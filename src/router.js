import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Fluk from './views/Fluk.vue'
import Cal from './views/Cal.vue'
import Grade from './views/Grade.vue'
Vue.use(Router)

export default new Router({
  routes: [
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
      path: '/about-me',
      name: 'fluk',
      component: Fluk
    },
    {
      path: '/cal',
      name: 'cal',
      component: Cal
    },
    {
      path: '/grade',
      name: 'grade',
      component: Grade
    }
  ]
})
