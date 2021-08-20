<template>
  <v-app-bar>
    <router-link to="/" class="mr-auto ml-4">
      <img :src="require('../assets/pc-tower.svg')" alt="logo" />
    </router-link>
    <Select @filter="trie($event)" />
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

  methods: {
    trie(value) {
      this.$emit("filter", value);
    },
  },
};
</script>

<style scoped>
img {
  height: 50px;
  width: 50px;
}
</style>
