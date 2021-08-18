<template>
  <v-container
    :fluid="true"
    class="py-6 bg-blue-grey-darken-2"
    style="height:100%;"
  >
    <BuyItems />
  </v-container>
</template>

<script>
import BuyItems from "../components/BuyItems.vue";
export default {
  components: {
    BuyItems,
  },
  data() {
    return {
      property: "Support",
    };
  },
};
</script>

<style></style>
