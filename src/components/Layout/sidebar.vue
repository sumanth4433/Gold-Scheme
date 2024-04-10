<template>
  <v-navigation-drawer  image="" permanent>
    <v-list >
      <v-list-item>
        <v-img
          :src="logo"
          class="gold_logo_avatar mx-auto"
          height="80"
          width="80"
        ></v-img>
        <h2 class="font-weight-bold text-center">Anand's Jewelry</h2>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list nav>
      <v-list-item
        prepend-icon="mdi-email"
        title="Inbox"
        value="inbox"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-supervisor-circle"
        title="Supervisors"
        value="supervisors"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-clock-start"
        title="Clock-in"
        value="clockin"
      ></v-list-item>
    </v-list>
    
  </v-navigation-drawer>
</template>
<script setup lang="js">
import logo from "@/assets/images/goldLogo.png"
</script>
<style scoped>
.gold_logo_avatar {
  border-radius: 50%;
  border: 4px solid rgba(255, 217, 0, 0.596);
}
.bubble::after {
    content: '';
    border-top-left-radius: 80% 100%;
    border-top-right-radius: 40% 100%;
    position: absolute;
    bottom: 0;
    z-index: -1;
    width: 90%;
    background-color: #0f0f10;
    height: 9%;
}
</style>
