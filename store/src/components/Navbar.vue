<template>
  <v-app-bar>
    <router-link to="/" class="mr-auto ml-4">
      <img :src="require('../assets/logo.png')" alt="logo" />
    </router-link>
    <Select />
    <v-btn class="ml-auto mr-4" aria-label="Login">
      <v-icon>mdi-login-variant</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import Select from "../components/Select.vue";
export default {
  components: {
    Select,
  },
  name: "Navbar",
};
</script>

<style scoped>
img {
  height: 50px;
  width: 50px;
}
</style>
