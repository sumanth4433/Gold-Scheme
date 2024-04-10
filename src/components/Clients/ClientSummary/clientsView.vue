<template>
  <ViewsWrapper>
    <v-data-table
      :headers="headersData"
      :items="desserts"
      :sort-by="[{ key: 'calories', order: 'asc' }]"
    >
      <template v-slot:top>
        <v-toolbar color="rgb(255 245 193)" flat>
          <v-toolbar-title>Client Summary:</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ props }">
              <v-btn class="mb-2" variant="tonal" color="primary" dark v-bind="props">
                Add New Client
              </v-btn>
            </template>
            <v-card width="800px">
              <v-toolbar color="rgb(255 245 193)" flat>
                <span class="ms-3 text-h5">{{ "New Client" }}</span>
              </v-toolbar>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" md="6" sm="12">
                      <v-text-field
                        v-model="editedItem.full_name"
                        label="Full Name"
                        placeholder="Enter Full Name"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" sm="12">
                      <v-text-field
                        v-model="editedItem.mobile_no"
                        label="Mobile Number"
                        type="number"
                        placeholder="Enter Mobile Number"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" sm="12">
                      <v-text-field
                        v-model="editedItem.adhaar_no"
                        label="Adhaar Number"
                        type="number"
                        placeholder="Enter Adhaar Number"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" sm="12">
                      <v-select
                        v-model="editedItem.maritial_status"
                        label="Martial Status"
                        :items="['Single', 'Married']"
                        placeholder="Select Martial Status"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" md="6" sm="12">
                      <v-text-field
                        v-model="editedItem.spouce"
                        label="Spouce Name"
                        placeholder="Enter Spouce Name"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" sm="12">
                      <v-text-field
                        v-model="editedItem.spouce_mobile_no"
                        label="Spouce Mobile Number"
                        type="number"
                        placeholder="Enter Mobile Number"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12" sm="12">
                      <v-textarea
                        v-model="editedItem.address"
                        label="Permenant Address"
                        placeholder="Enter  Permenant Address"
                      ></v-textarea>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="error"
                  width="130px"
                  class="text-black"
                  variant="tonal"
                  @click="close"
                >
                  Cancel
                </v-btn>
                <v-btn
                  width="130px"
                  color="success"
                  variant="tonal"
                  @click="save"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Are you sure you want to delete this Client?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn
                  color="blue-darken-1"
                  variant="text"
                  @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.spouce="{ item }">
        <p>
          {{ item.spouce }} <br />
          {{ item.spouce_mobile_no }}
        </p>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn small color="success" variant="tonal">
          <v-icon
            icon="fas fa-cash-register"
            class="me-2"
            size="small"
          ></v-icon>
          Pay
        </v-btn>
        <v-btn color="warning" small variant="tonal" @click="routeClinet()">
          <v-icon icon="fas fa-file-invoice" class="me-2" size="small"></v-icon>
          View
        </v-btn>
        <v-icon
          icon="fas fa-pencil"
          class="me-2"
          size="small"
          @click="editItem(item)"
        >
        </v-icon>
        <v-icon icon="fas fa-trash" size="small" @click="deleteItem(item)">
        </v-icon>
      </template>
    </v-data-table>
  </ViewsWrapper>
</template>

<script setup lang="js">
import ViewsWrapper from "@/views/ViewsWrapper.vue"
import {ref,watch} from "vue"
import { useRouter } from 'vue-router'

const router = useRouter()
const dialog = ref(false);
const dialogDelete = ref(false);
const headersData = ref([
  {
    title: 'Full Name',
    align: 'start',
    sortable: false,
    key: 'full_name',
  },
  { title: 'Mobile Number', key: 'mobile_no' },
  { title: 'Adhaar Number', key: 'adhaar_no' },
  { title: 'Address', key: 'address' ,width:"300px"},
  { title: 'Martial Status', key: 'maritial_status' },
  { title: 'Spouse Name', key: 'spouce', sortable: false },
  { title: 'Hold Gold', key: 'gold', sortable: false },
  { title: 'Paid Amount', key: 'amount', sortable: false },
  { title: 'Actions', key: 'actions', sortable: false },
]);
const editedIndex = ref(-1);
const editedItem = ref({
    full_name: '',
    mobile_no: "",
    adhaar_no:"",
    address:"",
    maritial_status:"",
    spouce:"",
    spouce_mobile_no:""
});
const defaultItem = ref({
    full_name: '',
    mobile_no: "",
    adhaar_no:"",
    address:"",
    maritial_status:"",
    spouce:"",
    spouce_mobile_no:""
});
const desserts=ref([{
address:"JNTUA COLLEGE OF ENGINEERING ANANTAPUR\nJNTUA College , ellora hostel , room no :202",
adhaar_no:"6587685768",
full_name:"Andhili Saikumar",
maritial_status:"Married",
mobile_no:"06302499458",
spouce:"sai",
spouce_mobile_no:"879687968"
},{
address:"jellora hostel , room no :202",
adhaar_no:"6587685768",
full_name:"Anjaneyulu Titta",
maritial_status:"Married",
mobile_no:"06302499458",
spouce:"terif",
spouce_mobile_no:"879687968"
}]);
watch(dialog,(val)=>{
    val || close()
})
watch(dialogDelete,(val)=>{
    val || closeDelete()
})
const routeClinet=()=>{
  router.push("/client-details")
}
const editItem = (item) => {
  editedIndex.value = desserts.value.indexOf(item);
  editedItem.value = { ...item };
  dialog.value = true;
};

const deleteItem = (item) => {
  editedIndex.value = desserts.value.indexOf(item);
  editedItem.value = { ...item };
  dialogDelete.value = true;
};

const deleteItemConfirm = () => {
  desserts.value.splice(editedIndex.value, 1);
  closeDelete();
};

const close = () => {
  dialog.value = false;
  editedItem.value = { ...defaultItem.value };
  editedIndex.value = -1;
};

const closeDelete = () => {
  dialogDelete.value = false;
  editedItem.value = { ...defaultItem.value };
  editedIndex.value = -1;
};

const save = () => {
  if (editedIndex.value > -1) {
    Object.assign(desserts.value[editedIndex.value], editedItem.value);
  } else {
    desserts.value.push(editedItem.value);
  }
  close();
};
</script>
<style scoped></style>
