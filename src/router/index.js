// createWebHistory
import  {createRouter,createWebHashHistory} from 'vue-router'

const routes=[
    {
        path:'/',
        name:'vue3login',
        component:()=>import('../views/vue3-login/vue3-login.vue'),
    },
    {
        path:'/home',
        name:'',
        component:()=>import('../components/HelloWorld.vue'),
    },
]

 const router=createRouter({
    routes,
    history:createWebHashHistory()
})
export default router;