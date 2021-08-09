import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Qlq from "../views/Qlq.vue";
import Experiments from "../views/Experiments.vue";
import BuyItemsPage from "../views/BuyItemsPage.vue";

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
  {
    path: "/Qlq/buy-items",
    name: "BuyItems",
    component: BuyItemsPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
