<template>
  <div class="app">
    <div class="cover"></div>
    <div>
      <Header></Header>
      <Footer></Footer>
      <Todo></Todo>
  </div>
  </div>
</template>

<script>
import Header from './layout/header.vue'
import Footer from './layout/footer.vue'
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
  }
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
