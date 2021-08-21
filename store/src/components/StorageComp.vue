<template>
  <v-col cols="12" md="6" sm="12">
    <v-card
      flat
      min-height="130"
      class="ma-3 bg-blue-lighten-4 d-flex align-center "
    >
      <v-row>
        <v-col align="center" cols="6" md="3" sm="3">
          <img
            :src="require(`@/assets/imgs/${item.img}`)"
            :alt="item.name"
            class="display-img v-img"
          />
        </v-col>
        <v-col
          cols="6"
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
        <v-col align="center" cols="6" md="2" sm="2">
          <v-card-text>Article ID:{{ item.Id }}</v-card-text>
        </v-col>
        <v-col align="center" cols="6" md="3" sm="2">
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
};
</script>

<style scoped>
.display-img {
  max-width: 70px;
  height: 70px;
  background-color: white;
  border: 1px solid black;
  margin-top: 8px;
}
.text {
  line-height: initial;
  padding: 0;
  font-size: 1rem;
}
</style>
