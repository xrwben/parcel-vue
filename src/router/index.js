import Vue from "vue";
import Router from "vue-router";

const Login = () => import("../page/Login.vue");

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    }
  ]
});

export default router;