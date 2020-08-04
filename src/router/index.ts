import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/:username",
    name: "Profile",
    component: () => import("../views/Profile.vue")
  },
  {
    path: "/:username/:repo",
    name: "Repo",
    component: () => import("../views/Repo.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
