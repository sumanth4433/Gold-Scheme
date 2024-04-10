<template>
  <v-app-bar flat :image="backbg" density="prominent">
    <template v-slot:prepend>
      <v-img
        :src="logo"
        class="gold_logo_avatar mx-auto"
        height="80"
        width="80"
      ></v-img>
      <h2 class="font-weight-bold text-center ms-3">Anand's Jewelry</h2>
    </template>

    <template v-slot:append>
      <v-btn icon>
        <v-icon title="Logout" icon="fas fa-power-off"></v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon title="Logout" icon="fas fa-window-maximize"></v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon title="Logout" icon="fas fa-bars"></v-icon>
      </v-btn>
    </template>

    <v-app-bar-title></v-app-bar-title>
  </v-app-bar>
</template>
<script setup lang="js">
import backbg from "@/assets/images/back.jpg"
import logo from "@/assets/images/goldLogo.png"
</script>
<style scoped>
.gold_logo_avatar {
  border-radius: 50%;
  border: 4px solid rgba(255, 217, 0, 0.596);
}
</style>
