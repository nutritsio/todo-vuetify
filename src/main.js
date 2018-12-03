import Vue from 'vue';
import './plugins/vuetify';
import Vuex from 'vuex';
import App from './App.vue';
// import { store } from './store';
import store from './store';

Vue.config.productionTip = false

Vue.use(Vuex);

new Vue({
  el: '#app',
  store,
  render: h => h(App),
}).$mount('#app')
