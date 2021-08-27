import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'

Vue.use(VueRouter)
export default new VueRouter({
  routes : [
    {
      path: '/',
      name: 'About',
      component: About
    },
    {
      path: '/works',
      name: 'Works',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Works.vue')
    },
    
    {
      path: '/Vtuber',
      name: 'Vtuber',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/works/Vtuber.vue')
    },
    {
      path: '/Portrait_A',
      name: 'Portrait_A',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/works/Portrait_A.vue')
    },
    {
      path: '/PerspectiveFish',
      name: 'PerspectiveFish',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/works/PerspectiveFish.vue')
    },
    {
      path: '/BoidsMeshAnimator',
      name: 'BoidsMeshAnimator',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/works/BoidsMeshAnimator.vue')
    },
    {
      path: '/WifiMonitor',
      name: 'WifiMonitor',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/works/WifiMonitor.vue')
    },
    {
      path: '/PathEngine',
      name: 'PathEngine',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/works/PathEngine.vue')
    },
    {
      path: '/ARcity',
      name: 'ARcity',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/works/ARcity.vue')
    },
    {
      path: '/ARmodeling',
      name: 'ARmodeling',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/works/ARmodeling.vue')
    },
    {
      path: '/ARsakura',
      name: 'ARsakura',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/works/ARsakura.vue')
    }
  
  ]
})
  


