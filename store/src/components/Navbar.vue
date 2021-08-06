<template>
  <v-app-bar>
    <v-img
      src="../assets/logo.png"
      max-width="60"
      max-height="30"
      class="mr-auto ml-4"
    ></v-img>
    <select name="try" id="some" class="mx-auto">
      <option v-for="item in items" :key="item" :value="items">{{
        item
      }}</option>
    </select>
    <v-btn class="ml-auto mr-4">
      <v-icon>mdi-cart-outline</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
select {
  background-color: white;
  border: thin solid blue;
  border-radius: 4px;
  display: inline-block;
  font: inherit;
  line-height: 1.5em;
  padding: 0.5em 3.5em 0.5em 1em;
  appearance: auto;
}
</style>
