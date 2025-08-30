<script setup lang="ts">
import Button from 'primevue/button'
import Avatar from 'primevue/avatar'
import AvatarGroup from 'primevue/avatargroup' //Optional for grouping

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'
</script>

<template >
<header class="bg-gray-800 text-white p-4 flex justify-around items-center gap-3 ">

      <div class="flex items-center ">
        <Avatar size="large " shape="circle" class=" pt-5 gap-3 "></Avatar>
        <span class=" text-2xl gap-3  "> TodoList</span>
      </div>

    <nav class="flex flex-row  justify-end w-fit ">
      <span> <FontAwesomeIcon icon=" fa-brands fa-linkedin " class="text-4xl hover:text-6xl" /> </span>
      <span > <FontAwesomeIcon icon=" fa-brands fa-github" class="text-4xl hover:text-6xl hover:animate-ease-in-out hover:delay-200  hover:transition hover:duration-150 hover:ease-in-out shadow-md hover:size-[110%]" /> </span>
      <span> <FontAwesomeIcon icon=" fab fa-blogger-b " class="text-4xl  hover:text-6xl " /></span>
      <FontAwesomeIcon icon="fa-github" />
    </nav>
</header>
</template>

<style scoped></style>
