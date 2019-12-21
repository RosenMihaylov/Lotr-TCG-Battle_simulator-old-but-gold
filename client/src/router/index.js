import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home.vue";
import Tutorial from "../views/tutorial.vue";
import BattleSimulation from "../views/battleSimulation.vue";
import Register from "../views/register.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/tutorial",
    name: "tutorial",
    component: Tutorial
  },
  {
    path: "/battleSimulation",
    name: "battleSimulation",
    component: BattleSimulation
  },
  {
    path: "/register",
    name: "register",
    component: Register
  }
];

const router = new VueRouter({
  routes
});

export default router;
