import { createApp } from 'vue'
import App from './App.vue'
import "./assets/main.css"
import "./assets/main.css"
import './style.css'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import 'primeicons/primeicons.css'




const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix:'p',
      darkModeSelector: '.dark',
      cssLayer: {
        name: 'primevue',
        order: 'tailwind-base, primevue, tailwind-utilities'

    }
  }
}
})
app.mount('#app')
