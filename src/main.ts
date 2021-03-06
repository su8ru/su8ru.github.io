import Vue from "vue";
import App from "./App.vue";
//import "./registerServiceWorker";
import router from "./router";

import "@/assets/sass/main.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas, far, fab);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

import VueGtag from "vue-gtag";
if (process.env.VUE_APP_GA_ID) {
  Vue.use(
    VueGtag,
    {
      config: { id: process.env.VUE_APP_GA_ID },
    },
    router
  );
}

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
