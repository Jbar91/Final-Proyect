<template>
  <select name="try" id="some" class="mx-auto">
    <option v-for="item in items" :key="item" :value="items">{{ item }}</option>
  </select>
</template>

<script>
export default {
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
