<template>
  <v-card flat width="80%" height="130" class="my-5 mx-auto bg-blue-lighten-4">
    <v-row class="mt-7">
      <v-col align="center">
        <v-img src="../assets/logo.png" class="qlq"></v-img>
      </v-col>
      <v-col align="center">
        <v-card-title>Product Name</v-card-title>
      </v-col>
      <v-col align="center">
        <v-card-text>Product ID</v-card-text>
      </v-col>
      <v-col align="center">
        <v-card-text>Quantity: 5555</v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "ProductCard",
  data() {
    return {
      rating: 4.5,
    };
  },
};
</script>

<style scoped>
.qlq {
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
