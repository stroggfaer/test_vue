import Vue from 'vue'
import store from '@/store/index';
import App from './App.vue'
import humps from 'humps'
import Axios from 'axios';
import router from './router';
import '@/assets/scss/main.scss';

Axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
Axios.interceptors.request.use((config) => {
      if (!(config.data instanceof FormData)) {
        config.data = humps.decamelizeKeys(config.data);
      }
      return config;
    },
    error => Promise.reject(error),
);

Axios.interceptors.response.use(
    (res) => {
      res.data = humps.camelizeKeys(res.data); // eslint-disable-line no-param-reassign
      return res;
    },
    error => Promise.reject(error),
);

Vue.config.productionTip = false


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
