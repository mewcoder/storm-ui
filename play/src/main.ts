import { createApp } from "vue";
import App from "./App.vue";

import icon from "@strom-ui/components/icon";

const app = createApp(App);

const plugins = [icon];
plugins.forEach((plugin) => {
  app.use(plugin);
});

app.mount("#app");
