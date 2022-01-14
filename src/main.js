import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/router'
import CommonComponents from '@/components/common/index'
import '@/store/index'
import '@/styles/index.scss'
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(CommonComponents)
router.isReady().then(() => {
  app.mount('#app')
})
