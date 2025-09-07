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

<template clas>
  <TopNavBar/>
  <main class="flex flex-col justify-center my-5 mb-11 items-center gap-8 w-full   ">
    <MainComponet/>
    <ListaComponet/>
  </main>


  







</template>



<style scoped>

</style>



