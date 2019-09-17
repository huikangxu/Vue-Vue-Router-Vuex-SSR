import Vue from 'vue'

const compoent = {
  template: `
    <div>
      <input type="text" v-model="content" />
    </div>
  `,
  data () {
    return {
      content: 0
    }
  }
}

new Vue({
  components: {
    CompOne: compoent
  },
  el: '#root',
  template: `
    <div>
      <comp-one></comp-one>
      <comp-one></comp-one>
    </div>
  `
})
