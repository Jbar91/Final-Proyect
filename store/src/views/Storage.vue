<template>
  <v-container :fluid="true" class="py-6 bg-blue-grey-darken-2 add-display">
    <v-row v-if="!addItems">
      <StorageComp v-for="item in products" :key="item" :item="item" />
    </v-row>
    <AddItems :items="products" v-if="addItems" @close="showBuy" />
    <v-container :fluid="true" align="end">
      <v-btn class="my-3 mx-4" aria-label="Add Items" @click="showBuy"
        >Add Items</v-btn
      >
      <router-link style="text-decoration: none" to="/buy-items">
        <v-btn class="my-3 mx-4" aria-label="Buy items">Buy Items</v-btn>
      </router-link>
    </v-container>
  </v-container>
</template>

<script>
import StorageComp from "../components/StorageComp.vue";
import AddItems from "../components/AddItems.vue";
import { articles } from "../assets/data/articles.json";

export default {
  name: "Storage",
  components: {
    StorageComp,
    AddItems,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  data() {
    return {
      property: "Support",
      addItems: false,
      products: articles,
    };
  },
  methods: {
    showBuy() {
      this.addItems = !this.addItems;
    },
  },
};
</script>

<style scoped>
.add-display {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
