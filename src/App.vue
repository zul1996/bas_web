<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";

import { useAuthStore } from "@/stores/auth";

const auth = useAuthStore();
</script>

<template>
  <div class="navColor">
    <v-container class="">
      <Navbar />
    </v-container>
  </div>
  <div class="background">
    <div class="login-container">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.navColor {
  background: linear-gradient(
    to bottom,
    #f5f5f5,
    #e0e0e0
  ); /* Soft grey gradient */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.background {
  background-image: url("@/assets/background2.jpg");
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  overflow: hidden;
}

.login-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
