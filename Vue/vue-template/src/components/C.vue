<template>
  <div class="box">
    <h1>组件C</h1>
    <div class=''>
      <!-- C组件向D组件通信 -->
      <button @click='sendMsg'>向D组件传值</button>
    </div>
  </div>
</template>

<script>
import {EventBus} from '../js/event-bus'
export default {
  name: 'C',
  data () {
    return {
    }
  },
  methods:{
    sendMsg(){
      EventBus.$emit('msgCtoD','C组件向D组件传值')
    }
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
