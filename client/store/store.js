import Vuex from 'vuex'
import Vue from 'vue'
import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/gitters'
import actions from './actions/actions'

Vue.use(Vuex)
const isDev = process.env.NODE_ENV === 'development'

const store = new Vuex.Store({
  strict: isDev, // 开发环境使用：规范修改数据在mutations中修改
  // strict: isDev ? true : false // 上面这行，其实就是这个
  state: defaultState,
  mutations,
  getters,
  actions,
  plugins: [
    (store) => {
      console.log('my plugin invocked')
    }
  ],
  modules: {
    a: {
      namespaced: true, // 命名空间
      state: {
        text: 1
      },
      mutations: {
        updateText (state, text) {
          console.log('a.state', state)
          state.text = text
        }
      },
      getters: {
        textPlus (state, getters, rootState) {
          return state.text + rootState.b.text
        }
      },
      actions: {
        add ({ state, commit, rootState }) {
          commit('updateCount', { num: 56789 }, { root: true })
        }
      }
    },
    b: {
      namespaced: true,
      state: {
        text: 2
      },
      actions: {
        testAction ({ commit }) {
          commit('a/updateText', 'test text', { root: true })
        }
      }
    }
  }
})

export default store
