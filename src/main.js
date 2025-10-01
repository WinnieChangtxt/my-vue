import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

const app = createApp(App)

//app.use(createPinia())
const pinia = createPinia()
pinia.use(piniaPersist)
app.use(pinia)

app.use(router)

window.appTitle = "這是我的javascript全域變數"
app.config.globalProperties.$appName = "我的全域屬性變數"
app.provide("provideName","這是我的provide變數")


app.mount('#app')
