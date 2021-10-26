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
    },
    {
        name:"contact",
        path:"/contact-us",
        component: ()=> import (/* webpackChunkName:"home" */"./views/Contact")
    },
    {
        name:"sponsorship",
        path:"/sponsorship",
        component: ()=> import (/* webpackChunkName:"home" */"./views/Sponsorship")
    },
    {
        name:"scholarship",
        path:"/scholarship",
        component: ()=> import (/* webpackChunkName:"home" */"./views/Scholoarship")
    },
    {
        name:"upload",
        path:"/upload",
        component: ()=> import (/* webpackChunkName:"home" */"./views/Upload")
    }
]

const router = new Router({
    linkExactActiveClass:"link-active",
    routes,
    mode: "history",
})


export default router