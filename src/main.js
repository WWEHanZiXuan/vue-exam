import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from "./http/api";
import dayjs from 'dayjs'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
Vue.prototype.$api = api;
Vue.prototype.$dayjs = dayjs

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')