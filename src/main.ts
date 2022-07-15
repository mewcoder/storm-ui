import Vue from 'vue';
import App from './App.vue';

import './assets/main.css';
import SButton from './ui/button/';

Vue.use(SButton);

new Vue({
  render: h => h(App)
}).$mount('#app');
