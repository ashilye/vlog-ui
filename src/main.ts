import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import globalComponents from '@/components/index'
import '@/assets/icon'
import '@/assets/style/sass/index.scss'
import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App)
app
  .use(store)
  .use(router)
  .use(ElementPlus)
  .use(globalComponents)
  .mount('#app')
