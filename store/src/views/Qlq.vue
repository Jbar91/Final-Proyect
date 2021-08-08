<template>
  <v-container :fluid="true" class="py-6 bg-blue-grey-darken-2">
    <v-row v-if="!popup">
      <StorageComp v-for="n in 12" :key="n" />
    </v-row>
    <BuyItems v-if="popup" @close="show" />
    <v-container :fluid="true" align="end">
      <v-btn class="my-3 mx-4">Add Items</v-btn>
      <v-btn class="my-3 mx-4" @click="show">Buy Items</v-btn>
    </v-container>
  </v-container>
  <v-footer height="90">
    <Footer :property="property" />
  </v-footer>
</template>

<script>
import StorageComp from "../components/StorageComp.vue";
import Footer from "../components/Footer.vue";
import BuyItems from "../components/BuyItems.vue";
export default {
  name: "Qlq",
  components: {
    StorageComp,
    Footer,
    BuyItems,
  },
  data() {
    return {
      property: "Support",
      popup: false,
    };
  },
  methods: {
    show() {
      this.popup = !this.popup;
      console.log(this.popup);
    },
  },
};
</script>

<style scoped></style>
