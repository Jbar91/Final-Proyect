<template>
  <v-col cols="12" lg="4" md="6" sm="12" style="padding:0px">
    <v-card
      flat
      min-height="130"
      class="ma-3 bg-blue-lighten-4 d-flex align-center"
    >
      <v-row>
        <v-col align="center" cols="6" md="3" sm="3">
          <router-link
            :to="{ name: 'Item', params: { id: item.Id, slug: item.name } }"
          >
            <div class="display-img">
              <img
                :src="require(`@/assets/imgs/${item.img}`)"
                :alt="item.name"
                class="item-thumbnail"
                :class="{ disabled: lowStock }"
              />
            </div>
          </router-link>
        </v-col>
        <v-col
          cols="6"
          md="4"
          sm="5"
          class="d-flex justify-center"
          style="padding: 0"
        >
          <v-card-title
            ><p class="text" :class="{ disabled: lowStock }">
              {{ item.name }}
            </p></v-card-title
          >
        </v-col>
        <v-col align="center" cols="6" md="2" sm="2">
          <v-card-text>ID:{{ item.Id }}</v-card-text>
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
  computed: {
    lowStock() {
      return this.item.quantity === 0 ? true : false;
    },
  },
};
</script>

<style scoped>
.display-img {
  width: 70px;
  height: 70px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px solid black;
}
.disabled {
  opacity: 0.3;
}
.v-row {
  margin: 0px;
  align-items: center;
}
.item-thumbnail {
  width: 100%;
}
.text {
  line-height: initial;
  padding: 0;
  font-size: 1rem;
}
</style>
