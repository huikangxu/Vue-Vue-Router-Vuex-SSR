<template>
  <div class="app">
    <div class="cover"></div>
    <div>
      <Header></Header>
      <!-- <p>{{newName}} {{counter}}</p>
      <p>{{textA}}</p> -->
      <!-- <router-link to="/app/123">app/123</router-link>
      <router-link to="/app/456">app/456</router-link> -->
      <!-- <router-link to="/app">app</router-link> -->
      <!-- <router-link to="/login">login</router-link> -->
      <transition name="fade">
        <router-view />
      </transition>
      <Todo></Todo>
      <Footer></Footer>
      <button @click="notify">click</button>
      <!-- <router-view name="a"/> -->
      <!-- <notification content="test notify" /> -->
    </div>
  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapMutations,
  mapActions
} from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.vue'
// import { setInterval } from 'timers'
import Todo from './views/todo/todo.vue'

// console.log(Header.__docs) 验证header.vue中自定义的<docs>

export default {
  name: 'app',
  data () {
    return {
      text: 'test123'
    }
  },
  components: {
    Header,
    Footer,
    Todo
  },
  mounted () {
    // console.log(this.$store)
    // actions 修改数据
    // this.$store.dispatch('updateCountAsync', { // dispatch 触发 actions
    //   mum: 5,
    //   time: 2000
    // })
    // mapActions 用法：
    // this.updateCountAsync({ // dispatch 触发 actions
    //   mum: 5,
    //   time: 2000
    // })
    // this['a/updateText'](123)
    // mutations只能传两个参数，第二个参数可以以对象的形式传参（mutations.js）
    // let i = 1
    // setInterval(() => {
    //   // this.$store.commit('updateCount', {
    //   //   num: i++,
    //   //   num2: 2
    //   // })
    //   // mapMutations 用法
    //   this.updateCount({
    //     num: i++,
    //     num2: 2
    //   })
    // }, 1000)
    /*
      // mutations 修改数据
      let i = 1
      setInterval(() => {
        this.$store.commit('updateCount', i++) // commit触发mutations
      }, 1000)

      // 可以直接修改store的值，但是不这么用，修改数据放在mutations中，在store.js中使用strict控制
    // this.$store.state.count = 3
    */
  },
  methods: {
    ...mapActions(['updateCountAsync']),
    ...mapMutations(['updateCount', 'a/updateText']),
    notify () {
      this.$notify({
        content: 'test $notify',
        btn: 'close'
      })
    }
  },
  computed: {
    // ...mapState(['count']),
    // ...mapState({ // 使用其他命名调用state中的变量
    //   counter: 'count' // 字符串形式调用state中的变量，也可以
    // }),
    // 使用字符串形式，没法做计算，下面这种方式比较方便
    ...mapState({
      counter: (state) => state.count,
      textA: state => state.a.text // 使用modules
    }),
    // count () {
    //   return this.$store.state.count
    // },
    ...mapGetters({
      newName: 'fullName'
    })
    // fullName () {
    //   return this.$store.getters.fullName
    // }
  }
  // mounted () { // 打印这个路由信息：params：path: "/path/123"
  //   console.log(this.$route)
  // }
}
</script>

<style lang="stylus" scoped>
// 背景图模糊的效果没得？？
.app
  position absolute
  left 0
  right 0
  top 0
  bottom 0
  .cover
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    backgroung-color #999
    opacity .9
    z-index -1
</style>
