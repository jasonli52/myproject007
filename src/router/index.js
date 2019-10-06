// 引入需要被展示的组件
import Login from '@/views/login'
import Home from '@/views/home'
// 引入vue
import Vue from 'vue'
// 引入VueRouter
import VueRouter from 'vue-router'
// Vue使用VueRouter
Vue.use(VueRouter)
// 创建路由对象
var router = new VueRouter({
  // 进行路由配置
  routes: [
    {
      name: 'default',
      path: '/',
      redirect: {
        name: 'login'
      }
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'home',
      path: '/home',
      component: Home
    }
  ]
})
// 导出成员
export default router
