<template>
  <div>
    <Setup :value="value" :set="set"></Setup>
  </div>
</template>
<script>
//体验composition-api的组件
import Setup from '../components/Setup.vue'

export default {
  name: 'Setup',
  components: {
    Setup
  },
  data(){
    return{
      value:0,
      set:[1,2,3,4,5]
    }
  }
}
</script>
