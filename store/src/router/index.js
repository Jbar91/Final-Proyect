import { createRouter, createWebHistory } from "vue-router";
import Storage from "../views/Storage.vue";

const routes = [
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
    name: "Item",
    component: () => import(/* webpackChunkName: "Items"*/ "../views/Item.vue"),
  },
  {
    path: "/log",
    name: "UserLog",
    component: () =>
      import(/* webpackChunkName: "UserLog"*/ "../views/Log.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "NotFound"*/ "../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
