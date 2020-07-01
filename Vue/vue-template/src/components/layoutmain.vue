<template>
  <div>
    <header>
      <div>
        <nav>
          <div>vue组件通信及vuex使用</div>
        </nav>
      </div>
    </header>
    <main>
        <router-view></router-view>
    </main>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: 'layoutmain',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  position:fixed;
  top:0;
  width:100%;
  min-width: 960px;
  height: 60px;
  margin-bottom: 20px;
  border-bottom: 1px solid #f1f1f1;
  background: #ffffff;
}
main{
  margin: 0 auto;
  padding-top: 80px;
  width:960px;
  height:1000px;
}
</style>
