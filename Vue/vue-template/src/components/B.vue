<template>
  <div>
    B
    <div>
      <C></C>
      <D></D>
    </div>
  </div>
</template>

<script>
import C from './C'
import D from './D'
export default {
  name: 'B',
  components:{
    C,
    D,
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
