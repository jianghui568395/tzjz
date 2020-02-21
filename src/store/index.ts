import Vue from 'vue'
import Vuex from 'vuex'
import Design from './Design'
import Page from './Page'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 设计器里面的数据
    Design: {
      toggle: false
    },
    //页面容器
    Page: {
      0: {
        name: '第一页',
        content: {

        }
      }
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Design, //设计器模块
    Page,
  }
})
