<template>
  <div class='clearfix'>
    <div class='boxB'>
      <h1>B组件</h1>
      <span>{{msgAtoB}}</span>
      
      <!-- B向A传值 -->
      <button @click="msgBtoA(title)">向父组件传值</button>
    </div>
    <div class='twins'>
      <C class='boxC'></C>
      <D class='boxD'></D>
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
  props:{
    msgAtoB:{
    },
  },
  data () {
    return {
      title:'B向A传值'
    }
  },
  methods:{
    msgBtoA(msg){
      this.$emit('parentFun',msg)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.clearfix{
}
.boxB{
  padding:10px;
  height:200px;
  border-bottom: 1px solid #f1f1f1;
}
.twins{
  display: flex;
  flex-direction: row;
  height:200px;
  border-bottom: 1px solid #f1f1f1;
}
.boxC{
  flex:1;
}
.boxD{
  flex:1;
}
</style>
