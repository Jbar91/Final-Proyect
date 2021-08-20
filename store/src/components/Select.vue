<template>
  <select
    v-model="options"
    name="options"
    id="select-articles"
    class="mx-auto"
    @click="send"
  >
    <option v-for="item in items" :key="item" :value="{ categoryValue: item }">
      {{ item }}
    </option>
  </select>
</template>

<script>
import { categories } from "../assets/data/articles.json";

export default {
  emits: ["filter"],
  data() {
    return {
      items: categories,
      options: "",
    };
  },
  methods: {
    send() {
      this.$emit("filter", this.options.categoryValue);
    },
  },
};
</script>

<style scoped>
select {
  background-color: white;
  border: thin solid black;
  border-radius: 4px;
  display: inline-block;
  font: inherit;
  line-height: 1.5em;
  padding: 0.5em 3.5em 0.5em 1em;
  appearance: auto;
  cursor: pointer;
}
</style>
