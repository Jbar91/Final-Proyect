import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Storage from "../views/Storage.vue";
import TermsAndConditions from "../views/TermsAndConditions.vue";
import Support from "../views/Support.vue";
import Contact from "../views/Contact.vue";

const routes = [
  {
    path: "/Qlq",
    name: "Home",
    component: Home,
  },
  {
    path: "/",
    name: "Storage",
    component: Storage,
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
