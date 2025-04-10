import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.css'

// Für Animationen (AOS)
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(router)
app.mount('#app')

// Starte AOS Animationen
AOS.init()