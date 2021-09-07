<template>
  <v-container :fluid="true" class="py-6 bg-blue-grey-darken-2 add-display">
    <v-row>
      <StorageComp v-for="item in filter" :key="item" :item="item" />
    </v-row>
    <v-container
      :fluid="true"
      class="manage-container"
      v-if="status === 'isOnline'"
    >
      <router-link :to="{ name: 'ManageItems' }">
        <v-btn class="my-3 mx-4" aria-label="Manage Items">Manage Items</v-btn>
      </router-link>
    </v-container>
  </v-container>
</template>

<script>
import StorageComp from "../components/StorageComp.vue";
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
  },
  mounted() {
    localStorage.getItem("products")
      ? (this.products = JSON.parse(localStorage.getItem("products")))
      : localStorage.setItem("products", JSON.stringify(this.products));
  },
  data() {
    return {
      products: articles,
      status: JSON.parse(sessionStorage.getItem("Logged")),
    };
  },
  methods: {},
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
.manage-container {
  display: flex;
  justify-content: end;
}
</style>
