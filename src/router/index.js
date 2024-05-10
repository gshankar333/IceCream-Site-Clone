import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path: '/kidsSpecials',
    name: 'kidspcl',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "test" */ '../views/kidsSpecialsPage.vue')
  },
  {
    path: '/icecreams',
    name: 'icecreampage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "icecreampage" */ '../views/icecreamPage.vue')
  },
  {
    path: '/shakes&puds',
    name: 'shakespuds',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "shakespuds" */ '../views/shakesPudsPage.vue')
  },
  {
    path: '/descriptionpage/:id',
    name: 'descriptionPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "descriptionPage" */ '../views/descriptionpage.vue'),
    props:true
  },
  {
    path: '/kidspcldescription/:id',
    name: 'kidspcldescription',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "descriptionPage" */ '../views/kidspecialdescpage.vue'),
    props:true
  },
  {
    path: '/pudsPage/:id',
    name: 'pudsPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "descriptionPage" */ '../views/pudsPage.vue'),
    props:true
  },



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
