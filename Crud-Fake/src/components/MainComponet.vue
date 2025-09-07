<script setup lang="ts">
import Galleria from 'primevue/galleria';
import chora from "../assets/img/anime.jpg";
import chora2 from "../assets/img/bela-cena-de-desenho-animado-de-personagens-de-anime.jpg";
import meninaStellar from '../assets/img/9170968.jpg'
import meninaOne from '../assets/img/girl1.jpg'
import meninaTwo from '../assets/img/girl2.jpg'
import gatinho from '../assets/img/gatinho.jpg'
import { ref  } from 'vue';
import { title } from 'process';
console.log("imagem" ,chora)
console.log("tipo", typeof chora)


const images = ref([
  {
    itemImageSrc: '/anime.jpg',
    thumbnailImageSrc: '/anime.jpg',
    alt: 'China',
    title:"China "
  },
  {
    itemImageSrc: chora2,
    thumbnailImageSrc: chora2,
    alt: 'Por  Do Sol',
    title:"Por Do Sol"
  },
  {
    itemImageSrc:meninaStellar,
    thumbnailImageSrc:meninaStellar,
    alt:'Menina Stellar',
    title:'Menina Stellar'
  },
  {
    itemImageSrc:gatinho,
    thumbnailImageSrc:gatinho,
    alt:'Gatinho Lindo',
    title:'Gatinho Lindo'
  },
  {
    itemImageSrc:meninaOne,
    thumbnailImageSrc:meninaOne,
    alt:'Menina One',
    title:'Menina One'
  },
  {
    itemImageSrc:meninaTwo,
    thumbnailImageSrc:meninaTwo,
    alt:"Menina Two",
    title:"Menina Two"

  }
]);


</script>

<template >
<main >

  <div class="flex justify-center items-center gap-y-7 !my-10  ">

    <h1 class=" text-4xl   font-bold line-clamp-2 font-mono text-amber-50  gap-5 text-nowrap  "> Galeria De Fotos
    </h1>
  </div>

  <div class=" rounded-2xl  "  >
    <Galleria :value="images" :numVisible="6" :showThumbnails="true"
      :showIndicators="true" :circular="true "
      containerStyle="max-width: 450px; margin: 0 auto; "

      :autoPlay="true"
      :transitionInterval="3000"  class="custom-galeria rounded-3xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-xl  border border-white/20"  >
      <template #item="slotProps" class=" rounded-2xl ">

        <div class="relative h-min rounded-4xl w-full   ">
          <img :src="slotProps.item.itemImageSrc" alt="" class="block w-full">
        </div>

        <div class="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white  rounded-md shadow-md hover:opacity-75 transition-opacity duration-200  " >

          <h3 class="text-lg font-bold">{{ slotProps.item.title }}</h3>
          <p class="text-sm">{{ slotProps.item.alt }}</p>
        </div>

      </template>
      <template #thumbnail="slotProps" class="rounded-4xl  " >

        <div class=" p-2 mx-2 md:mx-2 ">
          <div class="  relative overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group cursor-pointer bg-transparent  ">
            <img :src="slotProps.item.thumbnailImageSrc" alt=""   class="w-full h-16 md:h-24 object-cover     transition-transform duration-300 group-hover:scale-110">


            <!-- Overlay hover para thumbnails -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
              <span class="text-white text-xs font-semibold drop-shadow-lg truncate">
                {{ slotProps.item.title }}
              </span>
            </div>


          </div>




        </div>



      </template>


    </Galleria>





  </div>
</main>
</template>

<style scoped>

</style>
