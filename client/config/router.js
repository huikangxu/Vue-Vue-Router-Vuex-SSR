import VueRouter from 'vue-router'
import routes from './routes'

export default () => {
  return new VueRouter({
    routes,
    mode: 'history',
    // base: '/base/',
    // 可以全局配置class
    linkActiveClass: 'active-link',
    // 区别：路径完全匹配才显示class='exact-active-link'，路径匹配一步部分就会显示class='active-link'
    linkExactActiveClass: 'exact-active-link',
    // 之前页面的滚动条位置
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    },
    fallback: true // 新的路由，页面不用刷新跳转
    // url 后带参数的字符串转换
    // parseQuery (query) {},
    // stringifyQuery (obj) {}
  })
}
// 不这样写：服务端渲染出现内存溢出？？？不太理解
// const router = new Router({
//   routes
// })
// export default router
