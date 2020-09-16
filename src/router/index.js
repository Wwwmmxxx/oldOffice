import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/user/pages/login'
import Home from '@/views/user/pages/home'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '首页',
      redirect: '/login',
    }, {
      path: '/login',
      name: '登录',
      component: Login
    }, {
      path: '/home',
      name: '主页',
      component: Home,
      meta: {
        isLogin: true
      }
    },
    {
      path: '/reset_password',
      name: '修改密码',
      component: () => import('@/views/user/pages/reset_password'),
    },
    {
      path: '/system_setting',
      name: '系统设定',
      component: () => import('@/views/admin/system_setting'),
    },
    {
      path: '/admin_home',
      name: '管理员主页',
      component: () => import('@/views/admin/index.vue')
    },
    {
      path: '/admin_approve',
      name: '管理员应用审批',
      component: () => import('@/views/admin/AppApproval')
    },
    {
      path: '/admin_update',
      name: '应用信息修改',
      component: () => import('@/views/admin/AppUpdate')
    },
    {
      path: '/admin_detail/:id',
      name: '应用详细信息',
      component: () => import('@/views/admin/AppDetail')
    }
  ]
})

//路由前置处理:未登录用户访问登录后页面跳转登录页面
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(res => res.meta.isLogin)) { //判断是否需要登录
//     if (window.sessionStorage.getItem("token")) {
//       next();
//     } else {
//       if (to.path.includes('admin')) {
//         next('/admin/login') //跳转后台登录页面
//       } else {
//         next('/login') //跳转前台登录页面
//       }
//     }
//   } else {
//     next()
//   }
// });

export default router;
