<template>
  <div class="box">
    <h1>组件D</h1>
    <div class=''>
      <h3>{{msg}}</h3>
    </div>
  </div>
</template>

<script>
import { EventBus } from '../js/event-bus'
export default {
  name: 'D',
  data () {
    return {
      msg:'',
    }
  },
  mounted(){
    EventBus.$on('msgCtoD',param =>{
      this.msg = param;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
  padding:10px;
  border-right: 1px solid #f1f1f1;
}
</style>
