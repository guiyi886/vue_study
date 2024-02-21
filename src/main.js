import {createApp} from 'vue';
import App from './App';
import router from "@/router";
import store from '@/store';

// App.config.productionTip = false     //在生产环境中禁用 Vue 的一些警告和提示信息，以减少生产环境中的日志输出量。

createApp(App).use(router).use(store).mount('#app')
