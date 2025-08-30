import { createApp } from 'vue'
import App from './App.vue'
import "./assets/main.css"
import "./assets/main.css"
import './style.css'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import 'primeicons/primeicons.css'



import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faUser,
  faHeart,
  faCoffee,
  faSpinner,
  faCheck,
  faTimes,
  faSave,
  faTrash,
  faEdit,
  faPlus,
  faMinus,
  faSearch
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter,  } from '@fortawesome/free-brands-svg-icons'



library.add(
  faUser, faHeart, faCoffee, faSpinner, faCheck, faTimes,
  faSave, faTrash, faEdit, faPlus, faMinus, faSearch,
  faGithub, faTwitter,faLinkedin
)
const app = createApp(App)
app.component('FontAwesomeIcon', FontAwesomeIcon)
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
