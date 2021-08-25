<template>
  <v-container :fluid="true" class="log-display bg-blue-grey-darken-2">
    <v-container v-if="!status" class="bg-grey-lighten-2 log-inputs">
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
    <v-container v-if="status" class="bg-grey-lighten-2 log-inputs">
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
      const correct =
        this.username === this.user && this.password === this.pass;
      const incorrectPassword =
        this.username === this.user && this.password !== this.pass;
      const incorrectUsername =
        this.username !== this.user && this.password === this.pass;

      if (correct) {
        sessionStorage.setItem("Logged", JSON.stringify(true));
        this.cancel();
      } else if (incorrectPassword) {
        this.message = "Incorrect password, please try again";
        this.password = "";
      } else if (incorrectUsername) {
        this.message = "Incorrect username, please try again";
        this.username = "";
      } else {
        this.message = "Incorrect username and password, please try again";
      }
    },
    cancel() {
      window.history.go(-1);
    },
    logOut() {
      sessionStorage.setItem("Logged", JSON.stringify(false));
      this.cancel();
    },
  },
};
</script>

<style scoped>
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
