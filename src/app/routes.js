import Vue from "vue";
import Router from "vue-router";
import store from "./store/index.js";

Vue.use(Router);
const routes = [
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName:"home" */ "./views/Home"),
  },
  {
    name: "about",
    path: "/about",
    component: () => import(/* webpackChunkName:"home" */ "./views/About"),
  },
  {
    name: "contact",
    path: "/contact-us",
    component: () => import(/* webpackChunkName:"home" */ "./views/Contact"),
  },
  {
    name: "sponsorship",
    path: "/sponsorship",
    component: () =>
      import(/* webpackChunkName:"home" */ "./views/Sponsorship"),
  },
  {
    name: "scholarship",
    path: "/scholarship",
    component: () =>
      import(/* webpackChunkName:"home" */ "./views/Scholoarship"),
  },
  {
    name: "upload",
    path: "/upload",
    component: () => import(/* webpackChunkName:"home" */ "./views/Upload"),
    meta: { requireAuth: true, restricted: true },
  },
  {
    name: "explore",
    path: "/explore",
    component: () => import(/* webpackChunkName:"home" */ "./views/Explore"),
  },
  {
    name: "users",
    path: "/admin/users",
    component: () => import(/* webpackChunkName:"home" */ "./views/Users"),
    meta: { requireAuth: true, restricted: true },
  },
  {
    name: "books",
    path: "/admin/books",
    component: () => import(/* webpackChunkName:"home" */ "./views/Books"),
    meta: { requireAuth: true, allowAccessJudge: true },
  },
  {
    name: "judge",
    path: "/judge/revisions",
    component: () => import(/* webpackChunkName:"home" */ "./views/Revisions"),
    meta: { requireAuth: true, restricted: true },
  },
  {
    name: "competitions",
    path: "/admin/competitions",
    component: () =>
      import(/* webpackChunkName:"home" */ "./views/Competitions"),
    meta: { requireAuth: true, restricted: true },
  },
  {
    name: "profile",
    path: "/profile/:id",
    component: () => import(/* webpackChunkName:"home" */ "./views/Profile"),
    meta: { requireAuth: true },
  },
];

const router = new Router({
  linkExactActiveClass: "link-active",
  routes,
  scrollBehavior() {
    window.scrollTo(0, 0);
  },
  // mode: "history",
});
router.beforeEach(async (to, from, next) => {
  if (to.matched.some((route) => route.meta.requireAuth == true)) {
    if (!store.state.loggeIn) next("/");

    await store.dispatch("accessRole", store.state.user);
    if (!store.state.access) next("/");
    store.commit("SET_ACCESS", false);

    if (to.meta.restricted && store.state.user.user_role !== "admin") {
      next('/');
    }
    if (to.meta.allowAccessJudge && store.state.user.user_role !== "jubge" && store.state.user.user_role !== "admin" ) {
      next('/');
    }
    next();
  }
  next();
});

export default router;
