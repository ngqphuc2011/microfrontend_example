import { Component, createApp } from "vue";
import { createPinia } from "pinia";
import "./index.css";

const pinia = createPinia();
export const mount = (el: HTMLElement, component: Component, props: any) => {
  const app = createApp(component, props);

  app.use(pinia);
  app.mount(el);

  return app
};
