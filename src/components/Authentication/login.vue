<script setup lang="js">
import AuthWrapper from "./AuthWrapper.vue"
import { ref } from "vue";
import { useRouter } from 'vue-router'

const router = useRouter()

const loginModel = ref({
  email: "",
  password: "",
});
const login=()=>{
  router.push("/home")
}
</script>

<template>
  <AuthWrapper>
    <v-card-text>
      <p class="text-center">
        <h3 class="font-weight-bold">Welcome to Anand's Jewelry.</h3>
        Unlock treasures within.
        Login to your glittering journey.
      </p>
      <v-text-field
        v-model="loginModel.email"
        color="primary"
        label="Email"
        placeholder="Enter your Email"
      ></v-text-field>
      <v-text-field
        v-model="loginModel.password"
        color="primary"
        label="Password"
        placeholder="Enter your password"
      ></v-text-field>
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn block @click="login()">
          Login
          <v-icon icon="fas fa-caret-right" end></v-icon>
        </v-btn>
      </v-card-actions>
      <v-divider></v-divider>
      <p class="text-center">
        Have you frogot your password? click
        <RouterLink to="/forgot-password">Forgot Password</RouterLink> to reset.
      </p>
    </v-card-text>
  </AuthWrapper>
</template>

<style scoped></style>
