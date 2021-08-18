<template>
  <v-container :fluid="true" class="py-6 bg-blue-grey-darken-2 add-display">
    <v-row v-if="!addItems">
      <StorageComp v-for="item in filter" :key="item" :item="item" />
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
  props: {
    filterValue: {
      type: String,
    },
  },
  components: {
    StorageComp,
    AddItems,
  },
  mounted() {
    window.scrollTo(0, 0);
    this.filterValue;
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
  computed: {
    filter() {
      let filtered = this.products;
      let value = this.filterValue;
      let qlq = filtered.filter(function(article) {
        if (value === "All") {
          return article;
        } else {
          return article.category === value;
        }
      });
      return qlq;
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
