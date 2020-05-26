import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from "@/views/Landing";
import Browsing from "@/views/Browsing";
import Contact from "@/views/Contact";
import Symbol from "@/views/Symbol";

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/browsing',
      name: 'Browsing',
      component:Browsing
    },
    {
      path: '/browsing',
      name: 'Browsing',
      component:Browsing
    },
    {
      path: '/contact',
      name: 'Contact',
      component:Contact
    },
    {
      path: '/symbol',
      name: 'Symbol',
      component: Symbol
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
