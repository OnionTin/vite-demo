<template>
    <ul>
        <span>滑动页面,观察Top值:{{ top }}</span>
        <li v-for="(list,index) in lists" :key="index">{{list}}</li>
    </ul>
</template>
<script>
import { toRefs, reactive, watch } from 'vue'
import useScroll from '../js/scroll'
export default {
    name:"Scroll",
    setup(){
        const state = reactive({
            lists:[1,2,3,4]
        })
        const top = useScroll()
        return{
            ...toRefs(state),
            top
        }
    },
    mounted(){
        console.log("引入的独立模块和这个mounted是可以兼容的,意思是vue做了一个向下兼容")
    }
}
</script>
<style scoped>
span{
    display: block;
    position: fixed;
}
li{
    width: 100%;
    height: 300px;
}
</style>