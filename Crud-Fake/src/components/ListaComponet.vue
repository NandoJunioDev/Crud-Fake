<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional

</script>

<template>
<DataTable  tableStyle="background: transparent !important;" class=" 0"    >

 <Column field="ID" header="ID" sortable  style="min-width: 50px;"></Column>
 <Column field="Valor" header=" Valor" sortable style="min-width: 50px;"></Column>
  <Column field="nome" header="Nome" sortable style="min-width: 50px;"></Column>



</DataTable>

</template>


<style scoped>
</style>
