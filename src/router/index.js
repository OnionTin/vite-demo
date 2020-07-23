import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue'
import TodoList from '../views/TodoList.vue'
import Setup from '../views/Setup.vue'
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
            path:"/TodoList",
            component:TodoList,
            meta:{
                title:"TodoList"
            }
        },
        {
            path:"/Setup",
            component:Setup,
            meta:{
                title:"Setup函数"
            }
        }
    ]
})

export default router