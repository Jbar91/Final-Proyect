<template>
  <v-app>
    <v-main>
      <Navbar :items="items" />
      <router-view />
    </v-main>

    <router-link to="/Qlq">QLQ</router-link>
    <router-link to="/experiments">Exper</router-link>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: { Navbar },
  name: "App",

  data() {
    return {
      items: [
        "Filter",
        "CPU",
        "Motherboard",
        "GPU",
        "RAM Memory",
        "Storage",
        "PSU",
        "Cooling Fans",
        "Monitors",
        "Keyboards",
        "Mouse",
        "Cases",
      ],
    };
  },
};
</script>

<style scoped></style>
