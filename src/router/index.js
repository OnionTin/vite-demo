import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Setup from '../views/Setup.vue'
import TodoList from '../views/TodoList.vue'
import UseScroll from '../views/UseScroll.vue'
const router = createRouter({
    history: createWebHashHistory(), //哈希模式
    // history: createWebHistory(process.env.BASE_URL), //history模式
    routes:[
        {
            path:"/",
            component:Home,
            meta:{
                title:"首页"
            }
        },
        {
            path:"/Setup",
            component:Setup,
            meta:{
                title:"Setup函数"
            }
        },
        {
            path:"/TodoList",
            component:TodoList,
            meta:{
                title:"Composition-api拆包配合ref等api"
            }
        },
        {
            path:"/UseScroll",
            component:UseScroll,
            meta:{
                title:"Composition-api拆包配合生命周期函数"
            }
        }
    ]
})

export default router