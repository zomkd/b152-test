import Vue from "vue"
import Router from "vue-router"

import BuildersList from "../components/BuildersList"
import BuilderCard from "../components/BuilderCard"


Vue.use(Router)

const routes = [
    {
        path: "/",
        name: "buildersList",
        component: BuildersList,
    },
    {
        path: "/builders/:name", 
        name: "builderCard",
        component: BuilderCard,
    }
]

const router = new Router({
    mode: 'history',
    routes,
});

export default router;