import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

declare module '@vue/runtime-core' {
  interface GlobalComponents {
    FontAwesomeIcon: typeof FontAwesomeIcon
  }
}

export {}
