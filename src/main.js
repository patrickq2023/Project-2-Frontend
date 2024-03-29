import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'
import VueCookies from 'vue3-cookies'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vue3GoogleLogin, {clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID}) // From GOOGLE oAUTH
app.use(VueCookies, {
    expireTime: 'Id',
    path: '/',
    domain: '',
    secure: true,
    sameSite: 'None'
})
app.mount('#app')
