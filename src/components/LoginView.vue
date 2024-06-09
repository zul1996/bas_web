<template>
  <div class="container-content">
    <div class="d-flex justify-center align-center">
      <div class="flex-column pr-14">
        <h1>BANK CENTRAL LAMONGAN</h1>
        <img src="@/assets/LamonganBank.png" alt="Bank Logo" width="200px" />
      </div>

      <div class="d-flex flex-column">
        <div class="d-flex flex-column align-center">
          <div class="font-weight-bold">Get Started</div>
          <div>Already have an account? <span>Sign in</span></div>
        </div>
        <label for="Username">Username</label>
        <input
          v-model="data.username"
          type="text"
          class="input"
          placeholder="Username"
        />
        <label for="Password">Password</label>
        <input
          v-model="data.password"
          type="password"
          class="input"
          placeholder="Password"
        />
        <button class="button" @click="handleLogin">Sign In</button>

        <v-snackbar
          v-model="data.snackbar"
          :timeout="2000"
          :color="data.snackbarColor"
        >
          {{ data.pesanLogin }}
          <template v-slot:actions>
            <v-btn color="red" text @click="data.snackbar = false">Close</v-btn>
          </template>
        </v-snackbar>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, reactive } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const auth = useAuthStore();
const router = useRouter();

const data = reactive({
  username: "",
  password: "",
  snackbar: false,
  pesanLogin: "",
  snackbarColor: "success",
});

const myAxios = inject("myAxios");

const handleLogin = async () => {
  try {
    // Make sure to set snackbar to false before making the login request
    data.snackbar = false;

    const response = await myAxios.post("auth/login", {
      username: data.username,
      password: data.password,
    });

    // Check if response status is 200
    if (response.status === 200) {
      // Authentication successful
      auth.authenticated();
      router.push("transaction");
    } else {
      // Handle other response statuses if necessary
      throw new Error("Invalid response status");
    }

    // Set success message and snackbar color
    data.pesanLogin = "Login Successfully";
    data.snackbarColor = "success";
  } catch (error) {
    // Handle login errors
    console.error("Login failed", error);
    data.pesanLogin =
      error.response && error.response.status === 401
        ? "Username or Password is incorrect"
        : "Error Logging in";
    data.snackbarColor = "error";
  } finally {
    // Always set snackbar to true after login attempt, regardless of success or failure
    data.snackbar = true;
  }
};
</script>

<style scoped>
.container-content {
  background-color: #f5f5f5;
  border-radius: 16px;
  border: 1px solid #ddd;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
}

.input {
  width: 300px;
  height: 40px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.button {
  width: 100%;
  height: 40px;
  background-color: #808080;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #336699;
}
</style>
