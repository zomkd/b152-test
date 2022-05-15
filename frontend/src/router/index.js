import Vue from "vue"
import Router from "vue-router"

import BuildersList from "../components/BuildersList"


Vue.use(Router)

const routes = [
    {
        path: "/",
        name: "buildersList",
        component: BuildersList,
    }
]

const router = new Router({
    mode: 'history',
    routes,
});

export default router;