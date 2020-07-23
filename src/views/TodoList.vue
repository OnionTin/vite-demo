<template>
  <div>
    <Todos></Todos>
    <ul>
      <ol>tips</ol>
      <li>输入内容后敲击回车</li>
      <li>点击下方的列表查看效果</li>
    </ul>
  </div>
</template>
<script>
//TodoList组件
import Todos from '../components/Todos.vue'

export default {
  name: 'TodoList',
  components: {
    Todos
  }
}
</script>
<style scoped>
  ul{
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  ol{
    padding-left: 0;
  }
  ol,li{
    text-align: left;
    list-style: decimal;
    list-style-position: inside;
  } 
</style>
