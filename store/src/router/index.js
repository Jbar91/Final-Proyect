import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Storage from "../views/Storage.vue";

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
    component: () =>
      import(
        /* webpackChunkName: "TermsAndConditions"*/ "../views/TermsAndConditions.vue"
      ),
  },
  {
    path: "/support",
    name: "Support",
    component: () =>
      import(/* webpackChunkName: "Support"*/ "../views/Support.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "Contact"*/ "../views/Contact.vue"),
  },
  {
    path: "/items/:id",
    name: "Items",
    component: () =>
      import(/* webpackChunkName: "Items"*/ "../views/Items.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
