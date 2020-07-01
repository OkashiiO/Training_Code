<template>
  <div class='container'>
    A
    <div>
      <B></B>
    </div>
  </div>
</template>

<script>
import B from './B'
export default {
  name: 'A',
  components:{
    B,
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  background: #ffffff;
  height:200px;
}
</style>
