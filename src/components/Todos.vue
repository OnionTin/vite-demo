//一个TodoList组件,体验composition-api 
<template>
    <div>
        <div>TodoList</div>
        <input type="text" v-model="newTodo" @keyup.enter="addTodo">
        <ul>
            <li :class="{done: todo.complate}" v-for="(todo,index) in todos" :key="todo.id" @click="toogle(index)">{{todo.value}}</li>
        </ul>
        <span>剩余未完成项目数量:{{remaining}}</span>
    </div>
</template>
<script>
import { ref, toRefs, reactive, computed, isProxy } from "vue"
import useAddTodo from "../js/todo"
export default {
    setup(){
        const state = reactive({
            newTodo:"",
            todos:[
                { id:1, value:"吃饭", complate:true },
                { id:1, value:"睡觉", complate:false },
                { id:1, value:"打豆豆", complate:false }
            ]
        })
        /**
         *   compposition-api最牛逼的地方:
         *   可以拆包,类似于之前的mixins,但是mixins的缺点就是找不到源头
        */
        const { addTodo } = useAddTodo(state)
        // function addTodo(){
        //     state.todos.push({
        //         id:Math.random(),
        //         value:state.newTodo,
        //         complate: false
        //     }),
        //     state.newTodo = ""
        // }
        const remaining = computed(
            ()=>state.todos.filter(todo =>!todo.complate).length
        )
        function toogle(i){
            state.todos[i].complate = !state.todos[i].complate;
        }
        return {
            ...toRefs(state),
            addTodo,
            remaining,
            toogle
        }
    }
}
</script>>
<style scoped>
li.done{
    text-decoration: line-through;
    font-weight: 600;
}
</style>