import { createRouter, createWebHashHistory } from 'vue-router'

const Layout = () => import('@/views/Layout')
const Home = () => import('@/views/home')
const topCategory = () => import('@/views/category/index')
const SubCategory = () => import('@/views/category/sub')

// 路由规则
const routes = [
  // 一级路由布局容器
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: Home
      }, {
        path: '/category/:id',
        component: topCategory
      },
      {
        path: '/category/sub/:id',
        component: SubCategory
      }
    ]
  }
]

// vue2.0 new VueRouter({}) 创建路由实例
// vue3.0 createRouter({}) 创建路由实例
const router = createRouter({
  history: createWebHashHistory(), // 使用hash路由模式
  routes
})

export default router
