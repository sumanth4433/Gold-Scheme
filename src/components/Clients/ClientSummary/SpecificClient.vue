<template>
  <ViewsWrapper>
    <v-data-table :headers="headersData" :items="desserts">
      <template v-slot:top>
        <v-toolbar color="rgb(255 245 193)" flat class="pa-6">
          <v-div>
            <h3 class="font-weight-bold">Andhili Saikumar</h3>
            <h3>mobile:6754584787</h3>
            <h3>Adhhar No:75876857889</h3>
          </v-div>
          <v-spacer></v-spacer>
          <v-divider inset vertical></v-divider>
          <v-spacer></v-spacer>
          <div>
            <h3>
              Total Amount Paid:
              <span class="font-weight-bold">Rs.43536</span>
            </h3>
            <h3>
              Gold Obtained:
              <span class="font-weight-bold">9gms</span>
            </h3>
          </div>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn small color="success" variant="tonal">
          <v-icon icon="fas fa-download" class="me-2" size="small"></v-icon>
          Receipt
        </v-btn>
      </template>
    </v-data-table>
  </ViewsWrapper>
</template>

<script setup lang="js">
  import ViewsWrapper from "@/views/ViewsWrapper.vue"
  import {ref} from "vue"
  import { useRouter } from 'vue-router'

const router = useRouter()
  const headersData = ref([
    {
      title: 'Pay Id',
      align: 'start',
      sortable: false,
      key: 'pay_id',
    },
    { title: 'Amount Paid(RS)', key: 'amount' },
    { title: 'Gold Obtained(gm)', key: 'gold' },
    { title: 'Date', key: 'date' ,width:"300px"},
    { title: 'Actions', key: 'actions', sortable: false },
  ]);

  const desserts=ref([{
    pay_id:"TRY45324",
    amount:"7654",
    gold:"1.05",
    date:"2024-02-23",
  },{
    pay_id:"TRY45345",
    amount:"7004",
    gold:"0.94",
    date:"2024-02-21",
  },{
    pay_id:"TRY45333",
    amount:"7633",
    gold:"1.2",
    date:"2024-02-20",
  }]);
</script>
<style scoped></style>
