//测试Setup函数的组件
<template>
  <div>
      <p>Edit <code>把code里边的东西修改了之后,不用保存,就是热替代</code> to test hot module replacement.</p>
      <span>ref数字:{{num}}</span>
      <p>props数字:{{value}}</p>
      <span>ref对象:{{arr}}</span>
      <p>props对象{{set}}</p>
      <button @click="changeRef">changeRef数据</button>
      <button @click="changeProps">changeProps数据</button>
      <div :class="{done:num==3}"></div>
  </div>
</template>
<script>
import { ref, reactive } from 'vue'
export default {
    name:"Setup",
    props:{
        value:{
            type:Number,
            default:0
        },
        set:{
            type:Array,
            default:[]
        }
    },
    setup(props,content){
        // console.log(content);
        const num = ref(0);
        const arr = reactive({ n:999 })
        function changeRef(){
            this.num += 1;
            this.arr.n += 1; 
            //自处可以打印一下this,看下this的格式
            console.log(this);
        }
        function changeProps(){
            /**
             * 这块还没有搞完，主要是想知道props和content的作用的
            */
        }
        //如果没有return的话是没有值的
        return{
            num,
            arr,
            changeRef,
            changeProps
        }
    }
}
</script>