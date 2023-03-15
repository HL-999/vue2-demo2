import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import * as echarts from "echarts";
import "element-ui/lib/theme-chalk/index.css";
import i18n from "./i18n";
// console.log(i18n);

Vue.use(ElementUI);

Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
