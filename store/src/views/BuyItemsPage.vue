<template>
  <v-container :fluid="true" class="py-6 bg-blue-grey-darken-2">
    <BuyItems />
  </v-container>
  <v-footer height="90">
    <Footer :property="property" />
  </v-footer>
</template>

<script>
import BuyItems from "../components/BuyItems.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    BuyItems,
    Footer,
  },
  data() {
    return {
      property: "Support",
    };
  },
};
</script>

<style></style>
