import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import ElementPlus from 'element-plus'
console.log(import.meta.env,'env');

const app = createApp(App)
app.use(router).use(ElementPlus).mount('#app')
