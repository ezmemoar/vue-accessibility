import { createApp } from "vue";
import "./index.css";
import ui from "@nuxt/ui/vue-plugin";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("./layouts/DefaultLayout.vue"),
      children: [
        {
          path: "/",
          component: () => import("./views/HomeIndex.vue"),
        },
        {
          path: "/local",
          component: () => import("./views/Local.vue"),
          meta: {
            backBtn: true,
          },
        },
        {
          path: "/store",
          component: () => import("./views/Store.vue"),
          meta: {
            backBtn: true,
          },
        },
        {
          path: "/local-storage",
          component: () => import("./views/LocalStorage.vue"),
          meta: {
            backBtn: true,
          },
        },
      ],
    },
  ],
});

createApp(App).use(router).use(ui).use(createPinia()).mount("#app");
