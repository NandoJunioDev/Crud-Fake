<script setup lang="ts"

>
import Button from 'primevue/button';
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';   //Optional for grouping
import logo  from "@/assets/img/certificate_3815747.png"
</script>

<template>
<div class=" flex  justify-centers items-center">
  <nav class=" flex  justify-centers items-center">
    <div>
      <Avatar  :image="logo" size="large " shape="circle" class="mt-4 pt-5" ></Avatar>
      <span  class=" font-bold text-4xl  "> TodoList</span>


    </div>
  </nav>

  <main>
    
  </main>
</div>
</template>

<style scoped>

</style>
