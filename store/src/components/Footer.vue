<template>
  <v-container :fluid="true">
    <v-row align="center" justify="space-around">
      <p>Made by: elyonson</p>
      <router-link to="/terms-and-conditions">Terms And Conditions</router-link>
      <router-link to="/support">{{ property }}</router-link>
      <router-link to="/contact">Contact</router-link>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Footer",
  props: {
    property: {
      type: String,
    },
  },
};
</script>

<style>
footer {
  border-top: 2px solid #00877b;
}
</style>
