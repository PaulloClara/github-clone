import Vue from "vue";

import store from "@/store";
import router from "@/router";

import App from "@/App.vue";
import "@/assets/css/main.css";
import "@/assets/css/theme.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
