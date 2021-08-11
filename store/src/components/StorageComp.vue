<template>
  <v-card
    flat
    height="130"
    :width="width"
    class="my-5 mx-auto bg-blue-lighten-4 d-block d-sm-block"
  >
    <v-row class="mt-7">
      <v-col align="center">
        <v-img src="../assets/logo.png" class="display-img"></v-img>
      </v-col>
      <v-col align="center">
        <v-card-title>{{ item.name }}</v-card-title>
      </v-col>
      <v-col align="center">
        <v-card-text>Article ID:{{ item.Id }}</v-card-text>
      </v-col>
      <v-col align="center">
        <v-card-text>Quantity: {{ item.quantity }}</v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    item: {
      type: Object,
    },
  },

  data() {
    return {};
  },
  computed: {
    width() {
      switch (this.$vuetify.display.name) {
        case "xs":
          return "100%";
        case "sm":
          return "80%";
      }
      return "80%";
    },
  },
};
</script>

<style scoped>
.display-img {
  max-width: 50px;
  height: 50px;
  border: 1px solid black;
}
.price {
  padding: 10px 8px;
  border: 1px solid black;
  width: fit-content;
  border-radius: 5px;
}
.pricetag {
  font-weight: bold;
  font-size: 1.2rem;
  color: black;
}
</style>
