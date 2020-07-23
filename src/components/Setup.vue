//测试Setup函数的组件
<template>
  <div>
      <span>ref数字:{{num}}</span>
      <p>ref对象:{{arr}}</p>
      <span>props数字:{{value}}</span>
      <p>props对象{{set}}</p>
      <button @click="changeRef">changeRef数据</button>
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
        /**
         * setup接收两个参数,第一个是用的最多的props,第二是ctx上下文,不过是精简版,只提供了三个属性attrs,slots,emit,这三个都是写组件必不可少的
         * emit: 同父组件通信
         * slots: 插槽分发内容
         * attrs: 可以用于封装高阶组件, 配合v-bind进行属性透传
        */
        console.log("props:",props)
        console.log("ctx上下文",content)
        const num = ref(0) //ref像是一个盒子,将0包裹成一个对象,具有value属性 (被包裹的可以是简单类型或者引用类型)
        const arr = reactive({ n:1000 }) //reactive是对象{ n:1000 }的代理,即修改的的话只需要修改arr,不用修改原对象
        function changeRef(){
            num.value += 1 //修改对象(引用类型)要修改他的value属性
            arr.n += 1 // reactive不会生成value, arr.n.value += 1的话会报error
        }
        //返回:无论是state还是function都需要返回,render函数进行调用
        return{
            num,
            arr,
            changeRef
        }
    },
    beforeCreate(){
        console.log("setup在createBefore之前被调用")
    }
}
</script>