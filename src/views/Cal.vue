<template>
  <div>
    <h1>Calculate</h1>
    <input type="radio" value="rec" v-model="shape">รูป 4 เหลี่ยม<br>
    <input type="radio" value="circle" v-model="shape">รูปวงกลม<br>
    <div v-if="shape === 'circle'">
      รัศมี: <input type="text" v-model="circle.radius"> หน่วย<br><br>
      พื้นที่: {{(22/7) * (circle.radius * circle.radius)}} หน่วย
    </div>
    <div v-else>
      กว้าง: <input type="text" v-model="rectangle.width"> หน่วย<br>
      สูง(ยาว): <input type="text" v-model="rectangle.height"> หน่วย<br><br>
      พื้นที่: {{ rectangle.width * rectangle.height}} หน่วย
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      shape: 'rec',
      circle: {
        radius: 0
      },
      rectangle: {
        width: 0,
        height: 0
      }
    }
  }
}
</script>