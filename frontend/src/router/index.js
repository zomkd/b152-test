import Vue from "vue"
import Router from "vue-router"

import BuildersList from "../components/BuildersList"
import BuilderCard from "../components/BuilderCard"
import HouseCard from "../components/HouseCard"
    
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
        props: true,
    },
    {
        path: "/houses/:address", 
        name: "houseCard",
        component: HouseCard,
        props: true,
    }

]

const router = new Router({
    mode: 'history',
    routes,
});

export default router;