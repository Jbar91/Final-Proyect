<template>
  <v-container :fluid="true" class="py-6 bg-blue-grey-darken-2 ">
    <v-row v-if="!addItems">
      <StorageComp v-for="item in products" :key="item" :item="item" />
    </v-row>
    <AddItems :items="products" v-if="addItems" @close="showBuy" />
    <v-container :fluid="true" align="end">
      <v-btn class="my-3 mx-4" @click="showBuy">Add Items</v-btn>
      <router-link style="text-decoration: none" to="/buy-items">
        <v-btn class="my-3 mx-4">Buy Items</v-btn>
      </router-link>
    </v-container>
  </v-container>
  <v-footer height="90">
    <Footer :property="property" />
  </v-footer>
</template>

<script>
import StorageComp from "../components/StorageComp.vue";
import Footer from "../components/Footer.vue";
import AddItems from "../components/AddItems.vue";

export default {
  name: "Storage",
  components: {
    StorageComp,
    Footer,
    AddItems,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  data() {
    return {
      property: "Support",
      addItems: false,
      products: [
        { name: "monitor", Id: 1, quantity: 25, price: 30 },
        { name: "monitor", Id: 2, quantity: 25, price: 30 },
        { name: "monitor", Id: 3, quantity: 25, price: 30 },
        { name: "monitor", Id: 4, quantity: 25, price: 30 },
        { name: "monitor", Id: 5, quantity: 25, price: 30 },
        { name: "monitor", Id: 6, quantity: 25, price: 30 },
        { name: "monitor", Id: 7, quantity: 25, price: 30 },
      ],
    };
  },
  methods: {
    showBuy() {
      this.addItems = !this.addItems;
    },
  },
};
</script>

<style scoped></style>
