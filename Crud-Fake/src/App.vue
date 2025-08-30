<script setup lang="ts">


import { ref } from 'vue'

const count = ref(0)

import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Card from 'primevue/card'
import TopNavBar from './components/TopNavBar.vue'


const inputValue = ref('')
const clickCount = ref(0)

</script>

<template>
  
<TopNavBar/>
</template>



<style scoped>
</style>



