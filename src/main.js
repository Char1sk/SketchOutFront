import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import VueAxios from "vue-axios"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import { Button, Select } from 'element-ui';

Vue.use(VueAxios, axios)
Vue.use(ElementUI);
// Vue.use(Button);
// Vue.use(Select);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
