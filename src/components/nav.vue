<template>
  <div class="bg-cl-light cl-white dp-flex pd-20px f-s-24px f-w-bold">
    <div class="cs-pointer mg-hrzt-10px">
      <router-link :to="{ name: 'home'}">
        Home
      </router-link>
    </div>
    <div class="cs-pointer mg-hrzt-10px">
      <router-link :to="{ name: 'about'}">
        About
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>