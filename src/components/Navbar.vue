<script setup>
import { useAuthStore } from "@/stores/auth";
import { computed } from "vue";
import { useRouter } from "vue-router";

const auth = useAuthStore();
const router = useRouter();

const loginButtonLabel = computed(() => {
  return auth.isLoggedIn ? "Logout" : "Login";
});

const handleLogout = async () => {
  auth.logout();
  await router.push("/");
};
</script>

<template>
  <div class="navbar-position">
    <div class="d-flex justify-space-around align-center">
      <div>
        <h3 class="logo_text">BANK CENTRAL LAMONGAN</h3>
      </div>
      <div class="d-flex align-center">
        <ul>
          <li>
            <RouterLink v-if="!auth.isLoggedIn" to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink v-if="auth.isLoggedIn" to="/transaction"
              >Transaction</RouterLink
            >
          </li>
        </ul>
        <div class="hiddenxl">
          <h1>test</h1>
        </div>
      </div>
      <div class="">
        <v-btn>
          <RouterLink v-if="!auth.isLoggedIn" to="/">{{
            loginButtonLabel
          }}</RouterLink>
          <button v-else @click="handleLogout">{{ loginButtonLabel }}</button>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbar-position {
  position: relative;
  z-index: 2;
}

.login-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.logo_text {
  font-weight: 500;
}

ul {
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
}

ul li {
  margin: 0 8px;
}

.hiddenxl {
  display: none;
}

@media (max-width: 768px) {
  .navbar .d-flex {
    flex-direction: column;
    align-items: center;
  }

  .logo_text {
    margin-bottom: 10px;
  }

  ul {
    display: none;
  }

  .hiddenxl {
    display: block;
  }

  ul.hidden {
    display: flex;
    flex-direction: column;
    background-color: #333;
    position: absolute;
    top: 50px;
    right: 10px;
    border: 1px solid #ddd;
    padding: 10px;
  }

  ul li {
    margin: 5px 0;
  }
}

@media (max-width: 480px) {
  .navbar {
    padding: 5px 10px;
  }

  .logo_text {
    font-size: 1.2rem;
  }
}
</style>
