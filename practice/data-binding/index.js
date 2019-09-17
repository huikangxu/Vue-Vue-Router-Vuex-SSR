import Vue from 'vue'

new Vue({
  el: '#root',
  // template: `
  //   <div :id="theid" @click="handleClick">
  //     <p v-html="html"></p>
  //   </div>
  // `,
  template: `
    <div
      :class="[{active : !isActive}]"
      :style="[styles, styles2]">
      <p v-html="html"></p>
    </div>
  `,
  data: {
    isActive: false,
    html: '<span>123</span>',
    theid: 'main',
    styles: {
      color: 'red',
      appearance: 'none' // 浏览器默认样式
    },
    styles2: {
      color: 'black'
    }
  },
  methods: {
    handleClick () {
      console.log('clickd')
    }
  }
})
