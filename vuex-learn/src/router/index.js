import Vue from 'vue'
import Router from 'vue-router'
import Good from '@/components/Good'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Good',
      component: Good
    }
  ]
})
