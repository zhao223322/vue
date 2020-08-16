import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from '../pages/home.vue';
import Follow from '../pages/follow.vue';
import Column from '../pages/column.vue';
import User from '../pages/user.vue';
import Login from '../pages/login.vue';
import Reg from '../pages/reg.vue';
import Detail from '../pages/detail.vue';
import NoPage from '../pages/no-page.vue';
import PhoneHome from '../pages/phone.vue'



let routes = [
  {path:'/home',component:Home},
  {path:'/follow',component:Follow},
  {path:'/column',component:Column},
  {path:'/user',component:User},
  {path:'/login',component:Login},
  {path:'/Reg',component:Reg},
  {path:'/detail',component:Detail},
  {path:'/',redirect:'/home'},
  {path:'*',component:NoPage},
  {path:'/PhoneHome',component:PhoneHome}
];


let router = new VueRouter({
  routes
});

export default router;