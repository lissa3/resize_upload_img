import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axiosSetup from "@/helpers/interceptors";
import main from '@/assets/css/main.css';
//npm install vue bootstrap bootstrap-vue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);
Vue.use(IconsPlugin); //optional

// for global acess|=> Vue.use(Vuelidate)
//import Vuelidate from 'vuelidate'

// call the axios setup method here
axiosSetup()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
