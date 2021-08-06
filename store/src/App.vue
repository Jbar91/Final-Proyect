<template>
  <v-app>
    <v-main>
      <Navbar :items="items" />
      <router-view />
    </v-main>
    <v-footer height="90">
      <Footer :property="property" />
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { Navbar, Footer },
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
      property: "About us",
    };
  },
};
</script>

<style scoped>
footer {
  border-top: 2px solid #00877b;
}
</style>
