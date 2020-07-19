// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';

import Notifications from 'vue-notification'
import mixins from "./mixins";

Vue.use(Notifications);
Vue.mixin(mixins);

window.axios = require('axios');

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  mixins: mixins,
  components: { App },
  template: '<App/>'
})
