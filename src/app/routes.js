import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const routes =[
    {
        name:"home",
        path:"/",
        component: ()=> import (/* webpackChunkName:"home" */"./views/Home")
    },
    {
        name:"about",
        path:"/about",
        component: ()=> import (/* webpackChunkName:"home" */"./views/About")
    }
]

const router = new Router({
    linkExactActiveClass:"link-active",
    routes,
    mode: "history",
})


export default router