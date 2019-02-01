<template>
  <div class="home t-al-center">
    <h1 class="f-s-36px f-w-bold">Home Page</h1>
    <DisplayGIf :gifData="results.data"/>
  </div>
</template>

<script>
import axios from 'axios'
import DisplayGIf from '@/components/DisplayGIf.vue'
export default {
  name: 'home',
  components: {
    DisplayGIf
  },
  data () {
    return {
      results: []
    }
  },
  async mounted () {
    this.results = await axios.get('https://api.giphy.com/v1/gifs/search?api_key=2jDWxGFa3ks3pUPg2ZbkMlLYRRWkddz1&q=kitty&limit=25&offset=0&rating=G&lang=en')
    console.log('results', this.results)
  }
}
</script>
