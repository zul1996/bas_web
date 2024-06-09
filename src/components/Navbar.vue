<script setup>
import { useAuthStore } from "@/stores/auth";
import { computed } from "vue";
import { useRouter } from "vue-router"; // Import useRouter

const auth = useAuthStore();
const router = useRouter(); // Use useRouter

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

/* List styles */
ul {
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
}

/* List item styles */
ul li {
  margin: 0 8px;
}

.hiddenxl {
  display: none;
}

/* Responsive styles */
@media (max-width: 768px) {
  /* Adjust the flex direction to column for smaller screens */
  .navbar .d-flex {
    flex-direction: column;
    align-items: center;
  }

  /* Center the logo */
  .logo_text {
    margin-bottom: 10px;
  }

  /* Stack list items vertically */
  ul {
    display: none;
  }

  .hiddenxl {
    display: block;
  }

  ul.hidden {
    display: flex; /* Show the navbar when not hidden */
    flex-direction: column;
    background-color: #333; /* Ensure background matches navbar */
    position: absolute; /* Overlay menu */
    top: 50px; /* Position below the navbar */
    right: 10px; /* Align to the right */
    border: 1px solid #ddd;
    padding: 10px;
  }

  ul li {
    margin: 5px 0;
  }
}

@media (max-width: 480px) {
  /* Reduce padding for even smaller screens */
  .navbar {
    padding: 5px 10px;
  }

  /* Adjust the font size for the logo */
  .logo_text {
    font-size: 1.2rem;
  }
}
</style>
