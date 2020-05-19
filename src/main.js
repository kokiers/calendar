import Vue from 'vue'
import App from './Main.vue'
import { DatePicker ,ConfigProvider } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'
Vue.config.productionTip = false
Vue.use(DatePicker);
Vue.use(ConfigProvider )


new Vue({
  render: h => h(App),
}).$mount('#app')
