import Vue from 'vue'

// 使用 el：#root绑定 temlate.html中的id=root
// new Vue({
//   el: '#root',
//   template: '<div>this is the content</div>'
// })

const app = new Vue({
  // el: #root,
  template: '<div>{{text}}</div>',
  data: {
    text: 0
    // obj: {}
  }
  // watch: {
  //   text (newText, oldText) {
  //     console.log(newText + ':' + oldText)
  //   }
  // }
})
// let i = 0
app.$mount('#root')
setInterval(() => {
  // i++
  app.text += 1
  app.text += 1
  app.text += 1
  // app.$data.text += 1
  // app.$options.data += 1
  // app.obj.a = i
  // app.$set(app.obj, 'a', i)
  // app.$forceUpdate()
}, 1000)

// vue 实例的属性
// console.log(app.$data)
// console.log(app.$props)
// console.log(app.$el)
// console.log(app.$options)
/*
  * 给$options重新赋值render方法
  app.$options.render = (h) => {
  return h('div', {}, 'new render function')
  }
*/
/*
 * $root
 * console.log(app.$root)
 * console.log(app.$root === app) // true
*/

// console.log(app.$children)
// console.log(app.$slots)
// console.log(app.$scopedSlots)
// console.log(app.$refs)
// console.log(app.$isServer) // 服务端渲染用到，一般不用

// vue 实例的方法
// 1、watch
// const unWatch = app.$watch('text', (newText, oldText) => {
//   console.log(newText + ':' + oldText)
// })
// setTimeout(() => {
//   unWatch()
// }, 2000)

// 2、监听事件
// （1）不传参
// app.$on('test', () => {
//   console.log('test emit')
// })
// app.$emit('test')
// （2）传参
// app.$on('test', (a, b) => {
//   console.log('test emit: ' + a + ',' + b)
// })
// app.$emit('test', 1, 2)
// （3）$on 和 $once
// app.$once('test', (a, b) => {
//   console.log('test emit: ' + a + ',' + b)
// })
// setInterval(() => {
//   app.$emit('test', 1, 2)
// }, 1000)

// 3、$forceUpdate()
// app.$forceUpdate()
