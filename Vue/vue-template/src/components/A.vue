<template>
  <div class='container'>
    <div class='boxA'>
      <h1>组件A</h1>
      <h2 >B向A传的值:{{title}}</h2>
    </div>
    <div>
      <B :msgAtoB='msgList' v-on:parentFun='updateTitle'></B>
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
      msgList:'A组件传给B组件的值',
      title:'传递的值',
    }
  },
  methods:{
    updateTitle(e){
      this.title = e,
      console.log('子组件传过来的值',e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  background: #ffffff;
}
.boxA{
  padding:10px;
  height:200px;
  border-bottom: 1px solid #f1f1f1;
}
</style>
