import { createApp } from 'vue'
import App from './App.vue'
import "./assets/main.css"
import Lara from '@primevue/themes/lara'

import PrimeVue from 'primevue/config'

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
import { light } from '@fortawesome/fontawesome-svg-core/import.macro'



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
