<script setup lang="ts">


import { ref } from 'vue'

const count = ref(0)

import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Card from 'primevue/card'
const inputValue = ref('')
const clickCount = ref(0)

</script>

<template>
<div class="p-8">
    <h1 class="text-4xl font-bold text-blue-600 mb-4">
      Tailwind v4 funcionando!
    </h1>
    <div class= " bg-amber-400" >
      Esta div é verde com Tailwind
    </div>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="count++"
    >
      Contador: {{ count }}
    </button>
     <InputText
          v-model="inputValue"
          placeholder="Digite algo..."
          class="w-full"
        />
    <h1 class="bg-white-500 ">segundo text</h1>
    <Button
          label="Botão PrimeVue"
          icon="pi pi-check"


        />
  </div>
</template>



<style scoped>
</style>



