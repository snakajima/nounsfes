import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "../components/Layout.vue";
import Home from "../views/Home.vue";
import Account from "../views/Account.vue";
import HomeJA from "../views/HomeJA.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/ja",
        name: "日本語",
        component: HomeJA,
      },
      {
        path: "/account",
        name: "Account",
        component: Account,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
