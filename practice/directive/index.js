import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <div v-once>{{the_data}}</div>
      <p>修饰符</p>
      <input type="text" v-model="the_data" />
      <input type="text" v-model.number="the_data_number" />
      <input type="text" v-model.trim="the_data_trim" />
      <input type="text" v-model.trim="the_data_trim" />
      <p>lazy值：{{the_data_lazy}}</p>
      <input type="text" v-model.lazy="the_data_lazy" />
      <p>多选</p>
      <div>
        <input type="checkbox" :value="1" v-model="arr" />
        <input type="checkbox" :value="2" v-model="arr" />
        <input type="checkbox" :value="3" v-model="arr" />
      </div>
      <p>单选</p>
      <div>
        <input type="radio" value="one" v-model="picked" />
        <input type="radio" value="two" v-model="picked" />
      </div>
      <div>the_model_data: {{the_model_data}}</div>
      <input type="text" v-model="the_model_data" />
      <input type="checkbox" v-model="model_active" />
      <div v-show="!active">{{text}}</div>
      <div v-if="active">{{text}}</div>
      <div v-else>else content</div>
      <div v-text="'text: ' + text"></div>
      <div v-html="html"></div>
      <p>v-for部分</p>
      <ul>
        <li v-for="item in arr">{{item}}</li>
      </ul>
      <ul>
        <li v-for="(item, index) in arr" :key="item">{{item}} : {{index}}</li>
      </ul>
      <ul>
        <li v-for="(val, key, index) in obj">{{key}} : {{val}} : {{index}}</li>
      </ul>
    </div>
  `,
  data: {
    the_data: 0,
    the_data_number: 0,
    the_data_trim: 0,
    the_data_lazy: 0,
    the_model_data: '',
    model_active: false,
    picked: '',
    arr: [1, 2, 3],
    obj: {
      a: '123',
      b: '456',
      c: '789'
    },
    text: 0,
    active: false,
    html: '<span>the html</span>'
  }
})
