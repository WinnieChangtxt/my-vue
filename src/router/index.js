import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path:'/router01',
      name:'router-01-name',
      component:()=>import('../views/01-router.vue'),

    },
    {
      path:'/routerParams/:id/:keyword',
      name:'routerParams-01-name',
      component:()=>import('../views/01-routerParams.vue'),
    },
    {
      path:'/lv2/nested',
      name:'nested',
      component:()=>import('../views/01-nested.vue')
    },
    {
      path:'/lifeCircle',
      name:'lifeCircle',
      component:()=>import('../views/02-lifeCircle.vue')
    },
    {
      path:'/variable',
      name:'variable',
      component:()=>import('../views/03-variable.vue')
    },
    {
      path:'/dataBinding',
      name:'dataBinding',
      component:()=>import('../views/04-dataBinding.vue')
    },
    {
      path:'/condition',
      name:'condition',
      component:()=>import('../views/05-condition.vue')
    },
    {
      path:'/loop',
      name:'loop',
      component:()=>import('../views/06-loop.vue')
    },
    {
      path:'/eventHandle',
      name:'eventHandle',
      component:()=>import('../views/07-eventHandle.vue')
    },
    {
      path:'/computed',
      name:'computed',
      component:()=>import('../views/08-computed.vue')
    },
    {
      path:'/watch',
      name:'watch',
      component:()=>import('../views/09-watch.vue')
    },
    {
      path:'/components',
      name:'components',
      component:()=>import('../views/10-components.vue')
    },
    {
      path:'/env',
      name:'env',
      component:()=>import('../views/11-env.vue')
    },
    {
      path:'/pinia',
      name:'pinia',
      component:()=>import('../views/12-pinia.vue')
    },
    {
      path:'/axios',
      name:'axios',
      component:()=>import('../views/13-axios.vue')
    },
    { 
      path: '/:pathMatch(.*)*', 
      name:'notFound', 
      component:()=>import ('../views/01-notFound.vue')
    },
  ],
})

export default router
