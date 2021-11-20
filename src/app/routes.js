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
    },
    {
        name:"explore",
        path:"/explore",
        component: ()=> import (/* webpackChunkName:"home" */"./views/Explore")
    },
    {
        name:"users",
        path:"/admin/users",
        component: ()=> import (/* webpackChunkName:"home" */"./views/Users")
    },
    {
        name:"loans",
        path:"/admin/loans",
        component: ()=> import (/* webpackChunkName:"home" */"./views/Loans")
    },
    {
        name:"books",
        path:"/admin/books",
        component: ()=> import (/* webpackChunkName:"home" */"./views/Books")
    },
    {
        name:"judge",
        path:"/judge/revisions",
        component: ()=> import (/* webpackChunkName:"home" */"./views/Reviewer")
    },
    {
        name:"profile",
        path:"/profile/:user",
        component: ()=> import (/* webpackChunkName:"home" */"./views/Profile"),
        beforeEnter: ((to, from, next) => {
            console.log(Vue.$cookies)
            console.log(from)
            if (Vue.$cookies.get('access_token')) next()
            else next({ name: 'home' })
        })
    }
]

const router = new Router({
    linkExactActiveClass:"link-active",
    routes
    // mode: "history",
})

export default router