import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect:'employeeInfo',
    children: [
      {
        path: '/employeeInfo',
        name: 'employeeInfo',
        component: () => import('../views/employeeInfo/index.vue'),
        meta: {
          keepAlive: false,
          label:'员工信息管理',
          icon:'el-icon-s-custom'
        }
      },
      {
        path: '/project',
        name: 'project',
        component: () => import('../views/project/index.vue'),
        meta: {
          keepAlive: true,
          label:'项目立项表',
          icon:'el-icon-date'
        }
      },
      {
        path: '/agreement',
        name: 'agreement',
        component: () => import('../views/agreement/index.vue'),
        meta: {
          keepAlive: true,
          label:'合同清单',
          icon:'el-icon-s-check'
        }
      },
      {
        path: '/payment',
        name: 'payment',
        component: () => import('../views/payment/index.vue'),
        meta: {
          keepAlive: false,
          label:'合同收付款',
          icon:'el-icon-s-order'
        }
      },
      {
        path: '/setting',
        name: 'setting',
        component: () => import('../views/setting/index.vue'),
        meta: {
          keepAlive: false,
          label:'设定',
          icon:'el-icon-s-tools'
        }
      },
      // {
      //   path: '/auxiliaryFunction',
      //   name: 'auxiliaryFunction',
      //   component: () => import('../views/auxiliaryFunction/index.vue'),
      //   meta: {
      //     keepAlive: false,
      //     label:'辅助功能',
      //     icon:'el-icon-date'
      //   }
      // }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue'),
  }
]

const router = new VueRouter({
  routes
})
export { routes }
export default router
