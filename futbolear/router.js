import Vue from 'vue'
import Router from 'vue-router'
import newMatch from '@/components/newMatch'

Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'newMatch',
      component: newMatch,
      children: [
        {
          path: '/newMatch',
          name: 'newMatch',
          component: () => import('./newMatch.vue')
        }
      ]
    }
  ]
})
