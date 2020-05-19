<template>

    <div id="app">
      <DateTime/>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
import DateTime from './components/DateTime'

export default {
  name: 'app',
  data() {
    return {
      locale: zhCN,
    };
  },
  components: {
    DateTime
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
