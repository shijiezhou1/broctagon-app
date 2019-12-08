import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MarketPlace from "../views/MarketPlace.vue";
import Account from "../views/Account.vue";
import OtherTabs from "../views/OtherTabs.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/account",
    name: "account",
    component: Account
  },
  {
    path: "/market-place",
    name: "market-place",
    component: MarketPlace
  },
  {
    path: "/othertabs",
    name: "othertabs",
    component: OtherTabs
  }
];

const router = new VueRouter({
  routes
});

export default router;
