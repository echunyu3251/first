import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/views/LoginAndSign/Login'
import sign from '@/components/views/LoginAndSign/sign'
import brand from '@/components/brand/brand'
import direct from '@/components/direct/direct'
import moreItem from '@/components/views/moreItem/moreItem'
import shopAll from '@/components/views/shopAll/shopAll'
import ForgetPassword from '@/components/views/ForgetPassword/ForgetPassword'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/sign',
      name: 'sign',
      component: sign
    },
    {
      path:"/direct",
      name:"direct",
      component:direct
    },
    {
      path: '/brand',
      name: 'brand',
      component: brand
    },
    {
      path: '/moreItem',
      name: 'moreItem',
      component: moreItem
    },
    {
      path: '/shopAll',
      name: 'shopAll',
      component: shopAll
    },
    {
      path:'/ForgetPassword',
      name:'ForgetPassword',
      component:ForgetPassword
    }
  ]
})
