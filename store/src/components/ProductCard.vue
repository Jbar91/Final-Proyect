<template>
  <v-card width="300" height="300" class="my-5 mx-2">
    <v-img src="../assets/logo.png" class="mx-auto qlq"></v-img>
    <v-card-title class="mx-auto"><h3>Product Name</h3></v-card-title>
    <v-card-text>
      <v-row align="center" class="mx-0 ">
        <v-rating
          v-model="rating"
          color="black"
          readonly
          size="18"
          half-increments
        ></v-rating>
      </v-row>
      <v-row align="center">
        <div class="price ml-3 my-5">
          <p class="pricetag">123.45€</p>
        </div>
        <v-btn class="mr-2 ml-auto">
          <v-icon size="30">mdi-plus</v-icon>
        </v-btn>
      </v-row>
    </v-card-text>
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
  width: 150px;
  height: 150px;
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
