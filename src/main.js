import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from '@/router'
import '@/store/index'
import '@/styles/index.scss'
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
router.isReady().then(() => {
  app.mount('#app')
})
