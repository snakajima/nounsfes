import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "../components/Layout.vue";
import NotFound from "../components/NotFound.vue";

import Home from "../views/Home.vue";
import Videos from "../views/Videos.vue";
import About from "../views/About.vue";
import Tokens from "../views/Tokens.vue";
import Vote from "../views/Vote.vue";
import VoteResult from "../views/VoteResult.vue";
import Derivative from "../views/Derivative.vue";

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
    path: "videos",
    component: Videos,
  },
  {
    path: "vote",
    component: Vote,
  },
  {
    path: "voteResult",
    component: VoteResult,
  },
  {
    path: "derivative",
    component: Derivative,
  },
];

const routes: Array<RouteRecordRaw> = [
  {
    path: "/:lang(ja|en)",
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
