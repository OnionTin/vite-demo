<template>
    <ul>
        <li v-for="(page,index) in pages" :key="index" @click="turnTo(page.path)">{{page.meta.title}}</li>
    </ul>
</template>
<script>
import { computed } from 'vue'
import router from '../router/index'
export default {
    name:'Pages',
    setup(){
        function turnTo(i){
            this.$router.push(i);
        }
        const pages = computed(
            ()=>router.options.routes.filter(route=>{ return route.path!='/'})
        )
        return {
            turnTo,
            pages
        }
    }
}
</script>
<style scoped>
 li{
     text-align: left;
     height: 30px;
     background: lightcyan;
     margin: 10px;
 }
</style>>