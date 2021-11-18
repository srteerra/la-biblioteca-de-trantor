'use-strict'
import Vue from 'vue';
import App from './App.vue'
import router from './routes'
import 'bootstrap'
import VueCookies from 'vue-cookies'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: ""
  },
  mutations: {
    updateUser (state) {
      state.user = "angel lopez"
    }
  }
})

Vue.use(VueCookies)

new Vue({
    router,
    render:h=>h(App)
}).$mount('#app')