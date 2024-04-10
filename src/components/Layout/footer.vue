<template>
  <v-footer class="d-flex flex-column">
    <div class="bg-teal d-flex w-100 align-center px-4">
      <strong>Get connected with us on social networks!</strong>

      <v-spacer></v-spacer>

      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        class="mx-4"
        size="small"
        variant="plain"
      ></v-btn>
    </div>

    <div class="px-4 py-2 bg-black text-center w-100">
      {{ new Date().getFullYear() }} — <strong>Gold Scheme</strong>
    </div>
  </v-footer>
</template>

<script setup lang="js">
import { ref } from "vue";
const icons = ref(["fa-facebook", "fa-twitter", "fa-linkedin", "fa-instagram"]);
</script>
