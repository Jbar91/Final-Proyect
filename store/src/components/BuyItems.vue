<template>
  <v-card-text class="item-options">
    <v-row class="my-3 ">
      <label for="item-name"> Article:</label>
      <select name="articles-stock" id="item-name" v-model="option">
        <option
          v-for="(item, Id) in options"
          :key="item.name"
          :value="{
            price: item.price,
            id: Id,
          }"
          >{{ item.name }}</option
        >
      </select>
    </v-row>
    <v-row class="my-3">
      <label for="amount-stock">Amount in Stock: </label>
      <div v-if="stock">{{ stock }}</div>
    </v-row>
    <v-row class="my-3">
      <label for="quantity-bought">Quantity to Add:</label>
      <input
        type="number"
        name="Bought input"
        id="quantity-bought"
        min="0"
        v-model="amountAdded"
      />
    </v-row>
    <v-row class="my-3">
      <label for="item-price">Total Cost:</label>
      <div>{{ totalCost }}<span v-if="totalCost">€</span></div>
    </v-row>
  </v-card-text>
  <v-card-actions>
    <v-btn flat color="blue-accent-1" class="mx-auto" @click="back"
      >Cancel</v-btn
    >
    <v-btn flat color="blue-accent-1" class="mx-auto" @click="add"
      >Accept</v-btn
    >
  </v-card-actions>
</template>

<script>
export default {
  data() {
    return {
      option: "",
      options: JSON.parse(localStorage.getItem("products")),
      amountAdded: 0,
    };
  },
  methods: {
    add() {
      this.options[this.option.id].quantity =
        this.options[this.option.id].quantity + Number(this.amountAdded);
      this.amountAdded = 0;
      localStorage.setItem("products", JSON.stringify(this.options));
    },
    back() {
      this.$router.push({ name: "Storage" });
    },
  },
  computed: {
    totalCost() {
      const Cost = this.amountAdded * this.option.price * 1;
      return Cost ? Cost.toFixed(2) : "";
    },
    stock() {
      let amountStock;
      this.option ? (amountStock = this.options[this.option.id].quantity) : "";
      return amountStock;
    },
  },
};
</script>

<style>
.item-options {
  margin: 12px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
}
</style>
