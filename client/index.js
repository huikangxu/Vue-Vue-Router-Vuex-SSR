import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './app.vue'

import './assets/styles/global.styl'
import createRouter from './config/router.js'
import store from './store/store.js'
// import mutations from './store/mutations/mutations'
// import createStore from './store/store'

Vue.use(VueRouter)
Vue.use(Vuex)

const root = document.createElement('div')
document.body.appendChild(root)

const router = createRouter()
/**
 * store.subscribe(), store.subscribeAction()
  // 可以查看某个mytation被重复调用了
  store.subscribe((mutation, state) => {
    console.log(mutation.type)
    console.log(mutation.payload)
  })

  store.subscribeAction((mutation, state) => {
    console.log(mutation.type)
    console.log(mutation.payload)
  })
 */

// const store = createStore()
/**
 *store.watch()
 // 两个参数都是方法，第二个方法接收第一个方法的返回值
  store.watch((state) => state.count + 1, (newCount) => {
    console.log('new count watched:', newCount)
  })
 */
// 两个参数都是方法，第二个方法接收第一个方法的返回值

// 注册模块
store.registerModule('c', {
  state: {
    text: 3
  }
})
// 取消注册模块
// store.unregisterModule('c', {})

router.beforeEach((to, from, next) => {
  console.log('before each invocked')
  next()
  // if (to.fullPath === '/app') {
  //   // next('/login')
  //   next({path: '/login', name: 'app', replace: true})
  // } else {
  //   next()
  // }
})

router.beforeResolve((to, from, next) => {
  console.log('before resolve invocked')
  next()
})

router.afterEach((to, from) => {
  console.log('after each invocked')
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount(root)
// 只是声明了组件是app的内容
// 还需要挂载到app节点上，加上￥mount（）？？
