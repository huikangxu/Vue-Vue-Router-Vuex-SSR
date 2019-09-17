import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <p>computed_Name: {{name}}</p>
      <p>methods_Name: {{getName()}}</p>
      <p>full_Name: {{fullName}}</p>
      <p>number:
      <input type="text" v-model="number" />
      </p>
      <p>firstName:
      <input type="text" v-model="firstName" />
      </p>
      <p>lastName:
      <input type="text" v-model="lastName" />
      </p>
      <p>fullName:
      <input type="text" v-model="fullName" />
      </p>
      <p><input type="text" v-model="obj.a"/></p>
    </div>
  `,
  data: {
    firstName: 'Lin',
    lastName: 'mei',
    number: 0,
    fullName: '',
    obj: {
      a: 234
    }
  },
  computed: {
    name () {
      console.log('name() computed')
      return this.firstName + this.lastName
    }
    // name: {
    //   get () {
    //     console.log('name() computed')
    //     return this.firstName + this.lastName
    //   },
    //   set (name) {
    //     const names = name.split(' ')
    //     this.firstName = names[0]
    //     this.lastName = names[1]
    //   }
    // }
  },
  watch: {
    // 初始的full_Name为空
    // firstName (newName, oldName) {
    //   this.fullName = newName + ' ' + this.lastName
    // }
    // 初始fullName不为空,需要数据发生变化才会执行watch，fullName才会有值
    // firstName: {
    //   handler (newName, oldName) {
    //     this.fullName = newName + ' ' + this.lastName
    //   },
    //   immediate: true
    // }
    // deep: true配置项,但是每次监听都层层遍历，影响性能
    // obj: {
    //   handler () {
    //     console.log('obj.a changed')
    //   },
    //   immediate: true
    //   // deep: true
    // }
    'obj.a': {
      handler () {
        console.log('obj.a changed')
      },
      immediate: true
      // deep: true
    }
  },
  methods: {
    getName () {
      console.log('getName() function')
      return this.firstName + this.lastName
    }
  }
})
