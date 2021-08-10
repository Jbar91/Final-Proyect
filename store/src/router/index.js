import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Qlq from "../views/Qlq.vue";
import Experiments from "../views/Experiments.vue";
import BuyItemsPage from "../views/BuyItemsPage.vue";
import TermsAndConditions from "../views/TermsAndConditions.vue";
import Support from "../views/Support.vue";
import Contact from "../views/Contact.vue";

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
  {
    path: "/terms-and-conditions",
    name: "TermsAndConditions",
    component: TermsAndConditions,
  },
  {
    path: "/support",
    name: "Support",
    component: Support,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
