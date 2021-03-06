import Vue from 'vue'
import Vuex from 'vuex'
import User from './modules/user'
import Components from './modules/components'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    User,
    Components
  }
})
