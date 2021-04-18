import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axiosSetup from "@/helpers/interceptors";

// call the axios setup method here
axiosSetup()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
