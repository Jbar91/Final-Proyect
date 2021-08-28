<template>
  <v-container :fluid="true" class="py-6 bg-blue-grey-darken-2 add-display">
    <v-row v-if="!addItems">
      <StorageComp v-for="item in filter" :key="item" :item="item" />
    </v-row>
    <ManageItems
      :items="products"
      v-if="addItems"
      @close="showBuy"
      @add="add"
      @substract="substract"
    />
    <v-container :fluid="true" align="end">
      <v-btn class="my-3 mx-4" aria-label="Add Items" @click="showBuy"
        >Manage Items</v-btn
      >
    </v-container>
  </v-container>
</template>

<script>
import StorageComp from "../components/StorageComp.vue";
import ManageItems from "../components/ManageItems.vue";
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
    ManageItems,
  },
  mounted() {
    window.scrollTo(0, 0);
    localStorage.getItem("products")
      ? (this.products = JSON.parse(localStorage.getItem("products")))
      : "";
  },
  data() {
    return {
      addItems: false,
      products: articles,
    };
  },
  methods: {
    showBuy() {
      this.addItems = !this.addItems;
    },
    add(amountAdded, id) {
      this.products[id].quantity = this.products[id].quantity + amountAdded;
    },
    substract(amountSold, id) {
      this.products[id].quantity = this.products[id].quantity - amountSold;
      this.products[id].quantity < 0 ? (this.products[id].quantity = 0) : "";
    },
  },
  computed: {
    filter() {
      let filtered = this.products;
      let value = this.filterValue;
      let filteredItems = filtered.filter(function(article) {
        return value === "All" ? article : article.category === value;
      });
      return filteredItems;
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
