<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view />
    </v-main>
    <v-footer>
      <Footer />
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
      event: "Hi",
    };
  },
  methods: {
    result(event) {
      this.event = event;
    },
  },
};
</script>

<style scoped></style>
