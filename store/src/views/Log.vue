<template>
  <v-container :fluid="true" class="log-display bg-blue-grey-darken-2">
    <v-container
      v-if="status !== 'isOnline'"
      class="bg-grey-lighten-2 log-inputs"
    >
      <h1>Login</h1>
      <form action="">
        <label for="username">Username:</label>
        <input
          type="text"
          required
          name="username"
          id="username"
          autocomplete="off"
          v-model="username"
        />
        <label for="password">Password:</label>
        <input
          type="password"
          required
          name="password"
          id="password"
          autocomplete="off"
          v-model="password"
        />
        <p v-if="message">{{ message }}</p>
        <span>
          <v-btn class="btn" @click="cancel">Cancel</v-btn>
          <v-btn class="btn" @click="send">Log in</v-btn>
        </span>
      </form>
    </v-container>
    <v-container
      v-if="status === 'isOnline'"
      class="bg-grey-lighten-2 log-inputs"
    >
      <h2>Hello {{ user }}</h2>
      <v-btn @click="logOut">Log Out</v-btn>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      user: "StoreManager",
      pass: "1a2b3c",
      status: JSON.parse(sessionStorage.getItem("Logged")),
      message: null,
    };
  },
  methods: {
    send() {
      if (this.username === this.user && this.password === this.pass) {
        sessionStorage.setItem("Logged", JSON.stringify("isOnline"));
        this.cancel();
      } else {
        this.message = "Incorrect username and/or password, please try again";
        this.username = "";
        this.password = "";
      }
    },
    cancel() {
      this.$router.push({ name: "Storage" });
    },
    logOut() {
      sessionStorage.setItem("Logged", JSON.stringify("isOffline"));
      this.cancel();
    },
  },
};
</script>

<style scoped>
input[type="text"],
input[type="password"] {
  max-width: 215px;
  margin-left: 5px;
  padding: 2px;
  border: 1px solid black;
  border-radius: 4px;
}
.log-inputs {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}
.log-display {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
form {
  display: flex;
  flex-direction: column;
  max-width: 260px;
}
.btn {
  margin: 20px 10px;
}
</style>
