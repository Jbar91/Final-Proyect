<template>
  <v-app-bar>
    <v-img
      src="../assets/logo.png"
      max-width="60"
      max-height="30"
      class="mr-auto ml-4"
    ></v-img>
    <Select />
    <v-btn class="ml-auto mr-4">
      <v-icon>mdi-cart-outline</v-icon>
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

<style></style>
