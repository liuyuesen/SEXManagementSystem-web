import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/LogIn'
import signin from '@/components/SignIn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/signin',
      name: 'signin',
      component:signin
    }
  ]
})
