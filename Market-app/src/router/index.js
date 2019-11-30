import Vue from 'vue'
import Router from 'vue-router'

import Default from '@/components/Default'
import Index from '@/components/example/Index'
import eView from '@/components/example/View'

Vue.use(Router)

const routes = [
  { path: '/', name: 'Default', component: Default },
  { path: '/example', name: 'Index', component: Index },
  { path: '/example/:id', name: 'eView', component: eView }
]

export default new Router({
  routes
})
