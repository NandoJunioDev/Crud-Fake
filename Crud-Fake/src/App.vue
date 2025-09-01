<script setup lang="ts">


import { ref } from 'vue'

const count = ref(0)

import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Card from 'primevue/card'
import TopNavBar from './components/TopNavBar.vue'
import MainComponet from './components/MainComponet.vue'
import ListaComponet from './components/ListaComponet.vue'


const inputValue = ref('')
const clickCount = ref(0)

</script>

<template>
  <TopNavBar/>
  <main>
    <MainComponet/>
  </main>
  <aside>
      <ListaComponet/>

  </aside>



</template>



<style scoped>
</style>



