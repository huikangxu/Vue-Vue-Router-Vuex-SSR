<template>
    <div class="title">
        <h1>按钮被点击了{{ count }}次</h1>
        <button v-on:click="count++">点击</button>
    </div>
</template>
<script>
    export default {
      name: 'BtnCount',
      data () {
        return {
          count: 0
        }
      }
    }
</script>
<style scoped>
    .title {
        background-color: red
    }
</style>
