<template>
  <v-app>
    <v-main>
      <Navbar />
      <router-view />
    </v-main>

    <router-link to="/Qlq">QLQ</router-link>
    <router-link to="/experiments"><v-btn>Experiments</v-btn></router-link>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: { Navbar },
  name: "App",

  data() {
    return {};
  },
};
</script>

<style scoped></style>
