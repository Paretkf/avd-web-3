<template>
  <div id="app">
    <Nav/>
    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/nav.vue'
export default {
  components: {
    Nav
  }
}
</script>

<style>

</style>
