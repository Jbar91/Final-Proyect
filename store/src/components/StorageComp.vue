<template>
  <v-col cols="12" md="6" sm="12">
    <v-card
      flat
      height="130"
      class="my-5 mx-auto bg-blue-lighten-4 d-flex align-center"
    >
      <v-row>
        <v-col align="center" cols="3" md="3" sm="3">
          <img
            :src="require('../assets/logo.png')"
            alt="item"
            class="display-img v-img"
          />
        </v-col>
        <v-col
          cols="3"
          md="4"
          sm="5"
          class="d-flex justify-center"
          style="padding: 0"
        >
          <v-card-title
            ><p class="text">
              {{ item.name }}
            </p></v-card-title
          >
        </v-col>
        <v-col align="center" cols="2" md="2" sm="2">
          <v-card-text>Article ID:{{ item.Id }}</v-card-text>
        </v-col>
        <v-col align="center" cols="3" md="3" sm="2">
          <v-card-text>Quantity:{{ item.quantity }}</v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "StorageComp",
  props: {
    item: {
      type: Object,
    },
  },

  data() {
    return {};
  },
  computed: {},
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
.text {
  line-height: initial;
  padding: 0;
  font-size: 1rem;
}
</style>
