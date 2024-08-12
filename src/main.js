import { createApp } from 'vue'
import './index.css'
// import App from './App.vue'

import App from './App.vue'
import router from './routes'
import { createPinia } from 'pinia'

const pinia = createPinia()
createApp(App).use(router).use(pinia).mount('#app')
