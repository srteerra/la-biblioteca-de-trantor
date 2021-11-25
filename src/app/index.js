'use-strict'
import Vue from 'vue';
import axios from 'axios'
import App from './App.vue'
import router from './routes'
import 'bootstrap'
import VueCookies from 'vue-cookies'
import store from './store'

Vue.use(VueCookies)

new Vue({
    router,
    store,
    render:h=>h(App)
}).$mount('#app')