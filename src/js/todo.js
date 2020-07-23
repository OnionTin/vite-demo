export default function(state){
    function addTodo(){
        state.todos.push({
            id:Math.random(),
            value:state.newTodo,
            complate: false
        }),
        state.newTodo = ""
    }
    return { addTodo }  //返回的是addTodo,所以在Todos.vue里边也要调用addTodo方法
}