import Vue from 'vue'
import VueRouter from 'vue-router'
import Guide from '../views/Guide.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Guide',
    component: Guide,
    meta: {layout : 'DefaultLayout'}
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
