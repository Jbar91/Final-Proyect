import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Qlq from "../views/Qlq.vue";
import Experiments from "../views/Experiments.vue";

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
  {
    path: "/experiments",
    name: "Experiments",
    component: Experiments,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
