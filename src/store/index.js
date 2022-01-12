import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

// 三个模块
import cart from './modules/cart'
import user from './modules/user'
import category from './modules/category'
// vue2.0 创建仓库 new Vuex.Store({})
// vue3.0 创建仓库 createStore({})
export default createStore({
  modules: {
    cart,
    user,
    category
  },
  // 配置插件
  plugins: [
    // 默认存储在localStorage
    createPersistedState({
      // 本地存储的名字
      key: 'eribbit-client-pc-store',
      // 指定需要存储的模块
      paths: ['user', 'cart']
    })
  ]
})
