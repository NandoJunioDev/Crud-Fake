import { createApp } from 'vue'
import App from './App.vue'

// --- Estilos Globais ---
import "./assets/main.css"
// import './style.css' // Mantenha se você criou este arquivo

// --- Configuração do PrimeVue v4+ ---
import PrimeVue from 'primevue/config'
import Material from '@primevue/themes/material' // Importa o PRESET do tema Material
import 'primeicons/primeicons.css'           // Importa os ícones do PrimeVue

// --- Configuração do Font Awesome ---
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faUser, faHeart, faCoffee, faSpinner, faCheck, faTimes,
  faSave, faTrash, faEdit, faPlus, faMinus, faSearch, faHouse
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'



library.add(
  faUser, faHeart, faCoffee, faSpinner, faCheck, faTimes,
  faSave, faTrash, faEdit, faPlus, faMinus, faSearch,
  faGithub, faTwitter,faLinkedin
)
const app = createApp(App)
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.use(PrimeVue, {
  theme: {
    preset: Lara ,
    options: {
      prefix:'p',

      cssLayer: {
        name: 'primevue',
        order: 'app-styles, primevue, another-css-library'
    }



  }
}
})
app.mount('#app')
