import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import ContactPage from '@/components/ContactPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/c',
      name: 'ContactPage',
      component: ContactPage
    }
  ]
})
