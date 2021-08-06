<template>
  <v-container :fluid="true" class="my-6">
    <v-row justify="space-around">
      <ProductCard v-for="item in items" :key="item" />
    </v-row>
  </v-container>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
export default {
  name: "Home",

  components: {
    ProductCard,
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
    };
  },
};
</script>
