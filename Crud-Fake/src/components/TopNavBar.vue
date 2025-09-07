<script setup lang="ts">
import Button from 'primevue/button'
import Avatar from 'primevue/avatar'
import AvatarGroup from 'primevue/avatargroup' //Optional for grouping

console.log('Componente carregado!')
</script>

<template >
<header class="bg-gray-700 text-white p-4 flex justify-around items-center gap-3 ">

      <div class="flex items-center justify-center  gap-x-5 gap-y-5  ">
        <Avatar image="/public/tecnologia.png" size="large" shape="circle" class=" size-[15%]   self-center  "></Avatar>
        <span class=" text-2xl gap-3  text-center self-center "> Crud Fake</span>
      </div>

    <nav class="flex flex-row  justify-end w-fit ">
      <a href="https://www.linkedin.com/in/fernando-junio-46bb892b8/" target="_blank"><span> <FontAwesomeIcon icon="fa-brands  fa-linkedin"  class="text-4xl hover:text-6xl" /> </span></a>
      <a href="https://github.com/NandoJunioDev" target="_blank"><span > <FontAwesomeIcon icon=" fa-brands fa-github" class="text-4xl hover:text-6xl hover:animate-ease-in-out hover:delay-200  hover:transition hover:duration-150 hover:ease-in-out shadow-md hover:size-[110%]" /> </span></a>

    </nav>
</header>
</template>

<style scoped></style>
