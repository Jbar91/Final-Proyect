<template>
  <v-app-bar>
    <router-link to="/" class="mr-auto ml-2">
      <div class="container">
        <img :src="require('../assets/logo50.png')" alt="logo" />
      </div>
    </router-link>
    <Select @filter="send($event)" />
    <router-link :to="{ name: 'UserLog' }" class="ml-auto mr-4">
      <span>{{ userStatus }}</span>
      <v-btn aria-label="Login">
        <v-icon>mdi-login-variant</v-icon>
      </v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>
import Select from "../components/Select.vue";
export default {
  components: {
    Select,
  },
  props: ["filterValue"],
  name: "Navbar",
  emits: ["filter"],
  methods: {
    send(value) {
      this.$emit("filter", value);
    },
  },
  computed: {
    userStatus() {
      let user = JSON.parse(sessionStorage.getItem("Status"));
      console.log(user);
      return user;
    },
  },
};
</script>

<style scoped>
.container {
  height: 45px;
  width: 60px;
}
img {
  width: 100%;
  height: 100%;
}
</style>
