import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import VueAxios from "vue-axios";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);
// 导入element-plus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(VueAxios, axios);
app.use(store).use(router).use(ElementPlus).mount("#app");
