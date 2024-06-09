<template>
  <div
    class="container-content d-flex justify-center align-self-center rounded-xl"
  >
    <div class="d-flex justify-space-around pa-12">
      <!-- Left Content -->

      <!-- Right Content -->
      <div class="d-flex flex-column">
        <div class="d-flex flex-column align-center">
          <div class="font-weight-bold">Get Started</div>
          <div>Already have an account? <span>Sign in</span></div>
        </div>
        <form @submit.prevent="handleSubmit" class="d-flex flex-column">
          <label class="pb-3" for="account_id">Account id</label>
          <input
            v-model="formData.account_id"
            class="input"
            placeholder="Account_id"
            id="account_id"
          />

          <label for="bank_id">Bank id</label>
          <input
            v-model="formData.bank_id"
            type="text"
            class="input"
            placeholder="Bank_id"
            id="bank_id"
          />

          <label for="amount">Amount</label>
          <input
            v-model="formData.amount"
            type="number"
            class="input"
            placeholder="Amount"
            id="amount"
          />

          <label for="transaction_date">Transaction Date</label>
          <input
            v-model="formData.transaction_date"
            type="text"
            class="input"
            placeholder="Transaction_date"
            id="transaction_date"
          />

          <button type="submit" class="button">Sign In</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from "vue";

const myAxios = inject("myAxios");

const formData = ref({
  account_id: "",
  bank_id: "",
  amount: "",
  transaction_date: "",
});

const handleSubmit = async () => {
  try {
    const response = await myAxios.post("/transaction/create", formData.value);
    console.log("Response:", response.data);
    // Handle success, e.g., show a message or redirect
  } catch (error) {
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
    // Handle error, e.g., show an error message
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
  border: 1px solid #ccc; /* 1px solid border */
  border-radius: 5px; /* Rounded corners */
}

.button {
  width: 100%;
  height: 40px;
  background-color: #808080; /* Grey color */
  color: #fff; /* White text color */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #336699; /* Blue color on hover */
}
</style>

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
  border: 1px solid #ccc; /* Add a 1px solid border with color #ccc */
  border-radius: 5px; /* Add border radius for rounded corners */
}

.button {
  width: 100%;
  height: 40px;
  background-color: #808080; /* Grey color */
  color: #fff; /* White text color */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #336699; /* Elegant blue color on hover */
}
</style>
