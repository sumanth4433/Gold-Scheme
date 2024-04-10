import { createRouter, createWebHistory } from "vue-router";
import Login from "@/components/Authentication/login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: "/forgot-password",
      name: "ForgotPassword",
      component: () => import("@/components/Authentication/forgotPassword.vue"),
    },
    {
      path: "/home",
      name: "Layout",
      component: () => import("@/views/layout.vue"),
    },
  ],
});

export default router;
