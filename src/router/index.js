import {createRouter, createWebHistory} from "vue-router";
import RouterTestOne from "@/views/RouterTestOne.vue";
import RouterTestTwo from "@/views/RouterTestTwo.vue";

const router = createRouter({
        history: createWebHistory(),
        routes: [   //注意是routes不是routers
            {path: '/RouterTestOne', component: RouterTestOne},
            {path: '/RouterTestTwo', component: RouterTestTwo},
        ]
    }
)

export default router;