<template>
  <v-app>
    <v-main>
      <Navbar />
      <router-view @event="result" />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: { Navbar },
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
