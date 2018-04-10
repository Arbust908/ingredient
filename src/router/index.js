import Vue from 'vue'
import Router from 'vue-router'
import IngredientsPage from '@/components/IngredientsPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IngredientsPage',
      component: IngredientsPage
    }
  ],
  mode: 'history'
})
