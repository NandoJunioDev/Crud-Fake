<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional
import { Ref } from 'vue';
import { ref } from 'vue';
import { Button } from 'primevue';



const mostrandofomulario = ref(false)
interface Despesa {

  id:number;
  descricao:string;
  valor:number;
  categoria:string;
  data:string;

}
// nossos dados  'fake ' (mockados)

const despesas = ref<Despesa[]>([
  {id:1, descricao:'almoço de equipe',valor:150.75,categoria:'Alimentaçao',data:"26/02/2001"},


]);





const novaDescricao = ref('')
const novoValor = ref()
const novaCategoria = ref('')
const novaData = ref('')

function salvar(){
  console.log('dados', {
    descricao : novaDescricao.value,
    valor : novoValor.value,
    categoria:novaCategoria.value,
    data:novaData.value

  })

  const novoId = despesas.value.length + 1
  despesas.value.push({
    id:novoId,
    descricao:novaDescricao.value,
    valor:novoValor.value,
    categoria:novaCategoria.value,
    data:novaData.value

  })

  novaDescricao.value = '',
  novoValor.value = 0,
  novaCategoria.value='',
  novaData.value = ''
}
function deletar( id:number){
  despesas.value = despesas.value.filter(d=> d.id !==id)




}


</script>

<template>
<div class="overflow-x-auto     ">

            <!-- DataTable do primevue 4.3 heheheh-->
  <DataTable :value="despesas" class="min-w-full !bg-amber-100  "  table-style=" auto "  :scrollable="true"  >

   <Column field="id" header="Id" sortable  style="min-width: 50px;" class="hidden sm:table-cell md:visible" ></Column>
   <Column field="descricao" header=" Descricao" sortable  class="min-w-32"></Column>
    <Column field="valor" header="Valor" sortable class="min-w-32 text--rigth
     "></Column>
    <Column field="categoria" header="Categoria" sortable class="min-w-32 hidden md:table-cell" ></Column>
    <Column field="data" header="Data" sortable class="hidden md:table-cell min-w-24"></Column>
    <Column header="AÇões" class="min-w-16">
    <template #body="slotProps">
      <Button  @click="deletar(slotProps.data.id)" icon=" pi pi-trash" size="small " severity="danger" ></Button>

    </template>

    </Column>



  </DataTable>
</div>

                                    <!-- div doas inputs -->



                                    <!-- div dos botao-->
<div class=" teste flex flex-col lg:flex-row justify-center  items-center  gap-y-6 lg:gap-x-5 size-full gap-y-10 space-y-24 !mb-10   ">

<div class="flex flex row       justify-center items-center gap-5 md:mb-64 gap-6  ">
  <input v-model="novaDescricao"  type="text" placeholder="Descrição" class="border-2 border-amber-200 w-40 gap-5 text-center">
    <input v-model="novoValor"  type="text" placeholder="Valor" class="border-2 border-amber-200 w-40 gap-5 text-center " >
    <input v-model="novaCategoria" type="text" placeholder="Categoria " class="hidden   md:table-cell border-2 border-amber-200 text-center  " >
    <input v-model="novaData" type="text " placeholder="Data" class="hidden md:table-cell  border-2  border-amber-200 text-center               ">
</div>

<div class="flex flex-col gap-y-10 my-28 justify-center items-center   ">

  <Button  @click="salvar" type="button"  label="SALVAR" icon="pi pi-check" class="!my-7   mb-10 gap-y-10 px-12  " ></Button>
</div>

</div>


</template>


<style scoped>

</style>
