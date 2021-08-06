import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Qlq from "../views/Qlq.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/qlq",
    name: "Qlq",
    component: Qlq,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
