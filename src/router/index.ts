import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "../components/Layout.vue";
import Blank from "../components/Blank.vue";
import NotFound from "../components/NotFound.vue";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Tokens from "../views/Tokens.vue";
import Account from "../views/Account.vue";
import Derivative from "../views/Derivative.vue";
import Nouns from "../views/Nouns.vue";

const routeChildren: Array<RouteRecordRaw> = [
  {
    path: "",
    component: Home,
  },
  {
    path: "about",
    component: About,
  },
  {
    path: "nft",
    component: Tokens,
  },
  {
    path: "nouns",
    component: Nouns,
  },
  {
    path: "derivative",
    component: Derivative,
  },
  {
    path: "account",
    component: Account,
  },
];

const routes: Array<RouteRecordRaw> = [
  {
    path: "/:lang",
    component: Layout,
    children: routeChildren,
  },
  {
    path: "",
    component: Layout,
    children: routeChildren,
  },
  {
    path: "/:page(.*)",
    name: "NotFoundPage",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
