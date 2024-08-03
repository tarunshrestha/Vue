import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './assets/tailwind.css'
import router from './plugins/router'

createApp(App).use(router).mount('#app')