import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/main.css"
import FinancelloPreset from '@/theme/mytheme'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'



// PrimeVue
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import 'primeicons/primeicons.css'

const app = createApp(App)
console.log('Tema carregado:', FinancelloPreset)



// Adicionar à biblioteca
library.add(faLinkedin, faGithub)


app.component('FontAwesomeIcon', FontAwesomeIcon)
// Debug
app.use(PrimeVue, {
  theme: {
    preset: FinancelloPreset,  // Seu tema personalizado
    options: {
      prefix: 'p',
      darkModeSelector: 'system',
      cssLayer: {
        name: 'primevue',
        order: ' base, primevue, utilities'
      }
    }
  }
})

app.mount('#app')
