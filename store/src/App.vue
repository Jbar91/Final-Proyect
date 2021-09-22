<template>
  <v-app>
    <Navbar @filter="filter($event)" />
    <v-main>
      <router-view :filterValue="filterValue" />
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
      filterValue: "All",
    };
  },
  methods: {
    filter(value = "All") {
      this.filterValue = value;
    },
  },
};
</script>

<style>
.v-layout {
  overflow: hidden;
}
</style>
