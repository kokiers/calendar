<template>
  <a-config-provider :locale="zh_CN">
    <App />
  </a-config-provider>
</template>
<script>
  import App from './App.vue'
  import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN';
  import moment from 'moment';
  import 'moment/locale/zh-cn';

  moment.locale('zh-cn');
  export default {
    components:{
      App
    },
    data() {
      return {
        zh_CN,
      };
    },
  };
</script>