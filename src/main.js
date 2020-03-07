import Vue from 'vue'
import JRPCWS from './plugins/json-rpc-websocket'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueResource from 'vue-resource'
import './components'
import store from './store'
import router from './plugins/router'
import { hostname } from './store/variables'
import 'vue-toast-notification/dist/index.css';

Vue.use(JRPCWS, 'ws://' + hostname + '/websocket', {
  store: store
});

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.http.headers.common['Content-Type'] = 'application/json';
Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';
Vue.http.headers.common['Accept'] = 'application/json, text/plain, */*';
Vue.http.headers.common['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin';
Vue.http.headers.common['Access-Control-Allow-Methods'] = 'POST, GET, PUT, OPTIONS, DELETE, OPTIONS';

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')