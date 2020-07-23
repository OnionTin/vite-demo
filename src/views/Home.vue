<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <Pages></Pages>
  </div>
</template>
<script>
//体验composition-api的组件
import Pages from '../components/Pages.vue'

export default {
  name: 'Home',
  components:{ Pages }
}
</script>
