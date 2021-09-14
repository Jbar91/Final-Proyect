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
      <label for="quantity-sold">Quantity Sold:</label>
      <input
        type="number"
        name="Sold input"
        id="quantity-sold"
        :max="maxSold"
        @click="max"
        min="0"
        v-model="amountSold"
      />
    </v-row>
    <v-row class="my-3">
      <label for="item-cost">Total Profit:</label>
      <div>{{ totalProfit }} <span v-if="totalProfit">€</span></div>
    </v-row>
  </v-card-text>
  <v-card-actions>
    <v-btn flat color="blue-accent-1" class="mx-auto" @click="back"
      >Cancel</v-btn
    >
    <v-btn flat color="blue-accent-1" class="mx-auto" @click="substract"
      >Accept</v-btn
    >
  </v-card-actions>
</template>

<script>
export default {
  data() {
    return {
      options: JSON.parse(localStorage.getItem("products")),
      amountSold: 0,
      option: "",
      maxSold: null,
    };
  },
  methods: {
    substract() {
      this.options[this.option.id].quantity =
        this.options[this.option.id].quantity - Number(this.amountSold);
      this.amountSold = 0;
      localStorage.setItem("products", JSON.stringify(this.options));
    },
    max() {
      this.maxSold = this.options[this.option.id].quantity;
    },
    back() {
      this.$router.push({ name: "Storage" });
    },
  },
  computed: {
    totalProfit() {
      const profit = this.amountSold * this.option.price * 1;
      return profit ? profit.toFixed(2) : "";
    },
    stock() {
      let amountStock;
      this.option ? (amountStock = this.options[this.option.id].quantity) : "";
      return amountStock;
    },
  },
};
</script>

<style></style>
