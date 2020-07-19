import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Account from '@/components/Account'

Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/Account',
        name: 'Account',
        component: Account
      }
    ]
})
