<script setup lang="js">
import AuthWrapper from "./AuthWrapper.vue"
import { ref } from "vue";
const loginModel = ref({
  email: "",
  password: "",
  conform_password:"",
});
var showconfPassword=ref(false)
var showPassword=ref(false)
const togglePassword=()=>{
    showPassword= !showPassword
}
const toggleconfPassword=()=>{
    showconfPassword= !showconfPassword
}
</script>

<template>
  <AuthWrapper>
    <v-card-text>
      <p class="text-center">
        <h3 class="font-weight-bold">Forgot Your Password?.</h3>
        Enter your email address below to reset your password.
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
        label="New Password"
        :append-inner-icon="showPassword ? 'fa-eye' : 'fa-eye'"
        :type="showPassword ? 'text' : 'password'"
        @click:append-inner="showPassword= !showPassword"
        placeholder="Enter your New password"
      ></v-text-field>
      <v-text-field
        v-model="loginModel.conform_password"
        color="primary"
        :append-inner-icon="showconfPassword ? 'fa-eye' : 'fa-eye'"
        :type="showconfPassword ? 'text' : 'password'"
        @click:append-inner="showconfPassword=!showconfPassword"
        label="Confirm Password"
        placeholder="Enter your confirm password"
      ></v-text-field>
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn  block>
          Update password
          <v-icon icon="fas fa-caret-right" end></v-icon>
        </v-btn>
      </v-card-actions>
      <v-divider></v-divider>
      <p class="text-center">
        Click <RouterLink to="/">here</RouterLink> to return to the login page.
      </p>
    </v-card-text>
  </AuthWrapper>
</template>

<style scoped></style>
