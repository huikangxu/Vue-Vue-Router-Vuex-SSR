<!-- todo的header部分 -->
<template>
  <!-- <div :class="main-header"> -->
  <header class=main-header>
    <h1>JTodo</h1>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>
.main-header
  text-align center
  h1
    font-size 50px
    // color rgba(175,47,47,0.4)
    color #84C1FF
    font-weight 400
    margin 20px
</style>
