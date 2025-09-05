import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/main.css"
import FinancelloPreset from '@/theme/mytheme'
// PrimeVue
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import 'primeicons/primeicons.css'

const app = createApp(App)
console.log('Tema carregado:', FinancelloPreset) // Debug
app.use(PrimeVue, {
  theme: {
    preset: FinancelloPreset,  // Seu tema personalizado
    options: {
      prefix: 'p',
      darkModeSelector: 'system',
      cssLayer: {
        name: 'primevue',
        order: 'base, primevue, utilities'
      }
    }
  }
})

app.mount('#app')
