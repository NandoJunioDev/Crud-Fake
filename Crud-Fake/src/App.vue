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


  <div class="p-4">
    <Button label="Teste" class="p-button" />
    <Card>
      <template #title>Teste do Tema</template>
      <template #content>
        Se as cores mudaram, o tema está funcionando!
      </template>
    </Card>
  </div>

  <Button
      label="Se eu estou azul, o tema funciona!"
      style="margin: 10px;"
    />

<div style="margin: 20px 0;">
      <p>Teste abaixo (se aparecer algo estilizado, PrimeVue funciona):</p>
      <!-- Usando tag direta para testar -->
      <button class="p-button p-button-primary">
        Botão PrimeVue Direto
      </button>

  </div>
  <Button
      label="SE EU ESTOU LARANJA, O TEMA FUNCIONA!"
      severity="primary"
      style="margin: 10px;"
    />


</template>



<style scoped>

</style>



