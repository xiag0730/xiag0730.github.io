import axios from 'axios';
import echarts from "echarts";
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'echarts/china.js';

Vue.prototype.$axios = axios;

Vue.prototype.$echarts = echarts;


Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
