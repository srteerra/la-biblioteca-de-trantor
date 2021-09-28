'use-strict'
import Vue from 'vue';
import App from './App.vue'
import router from './routes'

new Vue({
    router,
    render:h=>h(App)
}).$mount('#app')