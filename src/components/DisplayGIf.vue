<template>
  <div class="t-al-center">
    <div v-for="(gif, index) in gifData.data" :key="index">
      <img :src="gif.images.original.url" alt="" class="w-20pct"> <br>
      <!-- {{gif}} -->
      {{gif.title}} <br>
    </div>
  </div>
</template>

<script>
export default {
  props: ['gifData']
}
</script>

<style scoped>

</style>