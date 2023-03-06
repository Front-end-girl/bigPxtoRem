import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "amfe-flexible";
const key = "创建app花费了多长时间";
console.time(key);
createApp(App).mount("#app");
console.timeEnd(key);
