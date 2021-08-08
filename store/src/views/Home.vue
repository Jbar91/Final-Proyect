<template>
  <v-container :fluid="true" class="my-6">
    <v-row justify="space-around">
      <ProductCard v-for="item in items" :key="item" />
    </v-row>
  </v-container>
  <v-footer height="90">
    <Footer :property="property" />
  </v-footer>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Home",

  components: {
    ProductCard,
    Footer,
  },
  data() {
    return {
      items: [
        "Filter",
        "CPU",
        "Motherboard",
        "GPU",
        "RAM Memory",
        "Storage",
        "PSU",
        "Cooling Fans",
        "Monitors",
        "Keyboards",
        "Mouse",
        "Cases",
      ],
      property: "About us",
    };
  },
};
</script>
