import Vue from 'vue'
const component = {
  template: `
    <div :style="style">
      <div class="header">
        <slot name="header"></slot>
      </div>
      <div class="body">
        <slot name="body"></slot>
      </div>
    </div>
  `,
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      }
    }
  }
}

new Vue({
  components: {
    compOne: component
  },
  el: '#root',
  template: `
    <div>
      <comp-one>
        <span slot="header">this is header</span>
        <span slot="body">this is body</span>
      </comp-one>
    </div>
  `
})
