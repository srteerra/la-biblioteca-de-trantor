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
    meta: { requireAuth: true,restricted:true},
  },
  {
    name: "books",
    path: "/admin/books",
    component: () => import(/* webpackChunkName:"home" */ "./views/Books"),
    meta: { requireAuth: true, restricted: true, allowAccessJudge: true },
  },
  {
    name: "judge",
    path: "/judge/revisions",
    component: () => import(/* webpackChunkName:"home" */ "./views/Revisions"),
    meta: { requireAuth: true,restricted:true},
  },
  {
    name: "competitions",
    path: "/admin/competitions",
    component: () =>
      import(/* webpackChunkName:"home" */ "./views/Competitions"),
      meta: { requireAuth: true,restricted:true},
  },
  {
    name: "profile",
    path: "/profile/:id",
    component: () => import(/* webpackChunkName:"home" */ "./views/Profile"),
    meta: { requireAuth: true,restricted:true},
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
    
    if (!store.state.loggeIn) next('/')
    let access = await store.dispatch('accessRole',store.state.user)
    console.log(access);
    if (access!=='success') next('/')
    next()
  }
  next();
});

export default router;
