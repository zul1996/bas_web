import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import App from "./App.vue";
import router from "./router";
import myAxios from "./plugin/axios";
import VueAxios from "vue-axios";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.use(VueAxios, myAxios);
app.provide("myAxios", app.config.globalProperties.axios);
app.use(vuetify);
app.use(createPinia());
app.use(router);

app.mount("#app");
