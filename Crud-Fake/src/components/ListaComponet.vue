<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional

</script>

<template>
<DataTable class="bg-transparent" >

 <Column field="campo" header="Cabeçalho" sortable  style="min-width: 200px;"></Column>



</DataTable>

</template>


<style scoped>
</style>
