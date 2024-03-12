import HomePage from "./pages/HomePage.vue";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    components: {
      nav: NavBar,
      default: HomePage,
      footer: Footer,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0,
      behavior: "smooth",
    };
  },
});

export default router;
