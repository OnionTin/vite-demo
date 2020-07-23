import { ref, onMounted, onUnmounted } from 'vue'
/**
 * 功能: 一个独立的模块,返回的是页面的滚动高度(代码的复用)
 * 对比：相比较vue2中的mixins,做到了数据来源清晰化,任何数据都依赖一个函数,找到函数就是源头,mixins则会把项目搞复杂,所以尤雨溪建议弃用
 * 好处：比如一个页面内的功能比较复杂,或者是逻辑比较复杂,可以用composition-api进行拆分
 * 优化：因为的独立的模块,可以做防抖节流等功能优化,页面内引入的时候并不会混乱
*/
export default function scroll(){
    const top = ref(0)
    function update(e){
        top.value = window.scrollY //value是因为ref的原因
    }
    //两个生命周期钩子函数
    onMounted(()=>{
        console.log("onMounted")
        window.addEventListener('scroll',update)
    })
    onUnmounted(()=>{
        console.log("onUnmounted")
        window.removeEventListener('scroll',update)
    })
    return top
} 