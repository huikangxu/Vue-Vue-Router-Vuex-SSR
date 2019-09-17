import Notification from './notification.vue'
import notify from './function'

export default (Vue) => {
  Vue.component(Notification.name, Notification)
  Vue.prototype.$notify = notify // 通过Vue.prototype声明的变量，都可以用this.a访问
}
