import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import vuetify from './plugins/vuetify' // path to vuetify export

import Toast from "vue-toastification";  // toast
import "vue-toastification/dist/index.css";

import "./styles/index.scss";  // 全局样式


Vue.config.productionTip = false;

const options = {
  // toast You can set your default options here
};
Vue.use(Toast, options);

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
