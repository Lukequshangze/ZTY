import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '@/components/travel/Home'
import Detail from '@/components/travel/Detail'
import Travel from '@/components/travel/Travel'
import Index from '@/components/travel/Index'
import Goal from '@/components/travel/Goal'
import My from '@/components/travel/My'
import LoginMethods from '@/components/travel/LoginMethods'
import UserReg from '@/components/travel/UserReg'
import MyCart from '@/components/travel/MyCart'
import MyOrder from '@/components/travel/MyOrder'
import OrderList from '@/components/travel/OrderList'
import Order from '@/components/travel/Order'  
import LoginDetail from '@/components/travel/LoginDetail'



Vue.use(Router)

export default new Router({
  routes: [
   {path: '/loginDetail',component: LoginDetail},
   {path: '/order/:lid',component: Order,props:true},
   {path: '/orderList',component: OrderList},
    {path: '/myOrder',component: MyOrder},
    {path: '/myCart',component: MyCart},
    {path: '/userReg',component: UserReg},
    {path: '/loginMethods',component: LoginMethods},
    {path: '/my',component: My},
    {path: '/goal',component: Goal},
    {path: '/index',component: Index},
    {path: '/travel',component: Travel},
    {path: '/Detail/:lid',component: Detail,props:true},
    {path: '/',component: Home},
    {path: '/home',component: Home}
  ]
})
