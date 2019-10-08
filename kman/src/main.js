import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import MyHeader from "./components/MyHeader"
import Myfooter from "./components/Myfooter"
Vue.component("my-header",MyHeader)
Vue.component("my-footer",Myfooter)
// 引入font的图标
import "./font/iconfont.css"

// 引入axios
import axios from "axios"
// 配置服务器基础路径
axios.defaults.baseURL="http://127.0.0.1:8080/";
// 配置保存session信息
axios.defaults.withCredentials=true;
Vue.prototype.axios=axios;

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
