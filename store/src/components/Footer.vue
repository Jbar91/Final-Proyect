<template>
  <v-container :fluid="true">
    <v-row align="center" justify="space-around">
      <p>Made by: elyonson</p>
      <p>Terms and Conditions</p>
      <p>{{ property }}</p>
      <p>Contact</p>
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

<style scoped></style>
