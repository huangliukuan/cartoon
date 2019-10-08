import Vue from 'vue'
import Router from 'vue-router'

// 引入index
import Index from './views/Index.vue'
// 引入login
import Login from "./views/Login"
import Register from "./views/Register"
Vue.use(Router)
export default new Router({
  routes: [
    {path: '/', component: Index},
    {path:'/index', component:Index},
    {path:'/login',component:Login},
    {path:'/register',component:Register}
  ]
})
