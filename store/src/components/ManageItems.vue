<template>
  <v-container class="bg-teal-darken-4 d-flex justify-center ">
    <v-container class="d-flex justify-center ">
      <v-card width="500">
        <v-card-title primary-title class="d-flex justify-center">
          <div>
            <h3 class="headline mb-0">Manage Items</h3>
          </div>
        </v-card-title>
        <v-container class="d-flex justify-center">
          <v-card-text>
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
            <v-row class="my-3">
              <label for="quantity-sold">Quantity Sold:</label>
              <input
                type="number"
                name="Sold input"
                id="quantity-sold"
                min="0"
                v-model="amountSold"
              />
            </v-row>
            <v-row class="my-3">
              <label for="item-cost">Total Profit:</label>
              <div>{{ totalProfit }} <span v-if="totalProfit">€</span></div>
            </v-row>
          </v-card-text>
        </v-container>
        <v-container>
          <v-card-actions>
            <v-btn
              flat
              color="blue-accent-1"
              class="mx-auto"
              @click="$emit('close')"
              >Cancel</v-btn
            >
            <v-btn
              flat
              color="blue-accent-1"
              class="mx-auto"
              @click="updateQuantity"
              >Accept</v-btn
            >
          </v-card-actions>
        </v-container>
      </v-card>
    </v-container>
    <v-btn
      icon="mdi-close"
      aria-label="Close button"
      class="float-right d-none d-sm-block"
      @click="$emit('close')"
    ></v-btn>
  </v-container>
</template>

<script>
export default {
  props: {
    items: {
      type: Object,
    },
  },
  emits: ["close", "add", "substract"],
  data() {
    return {
      option: "",
      amountAdded: 0,
      amountSold: 0,
      options: this.items,
    };
  },
  methods: {
    add() {
      this.$emit("add", Number(this.amountAdded), this.option.id);
      this.amountAdded = 0;
      localStorage.setItem("products", JSON.stringify(this.options));
    },
    substract() {
      this.$emit("substract", Number(this.amountSold), this.option.id);
      this.amountSold = 0;
      localStorage.setItem("products", JSON.stringify(this.options));
    },
    updateQuantity() {
      this.add();
      this.substract;
    },
  },
  computed: {
    totalCost() {
      const Cost = this.amountAdded * this.option.price * 1;
      return Cost ? Cost.toFixed(2) : "";
    },
    totalProfit() {
      const profit = this.amountSold * this.option.price * 1;
      return profit ? profit.toFixed(2) : "";
    },
  },
};
</script>

<style>
input[type="text"],
input[type="password"] {
  max-width: 215px;
  margin-left: 5px;
  padding: 2px;
  border: 1px solid black;
  border-radius: 4px;
}
input[type="number"] {
  text-align: center;
  border: 1px solid black;
  width: 80px;
  margin-left: 5px;
  padding: 2px;
}
select {
  background-color: white;
  border: thin solid black;
  border-radius: 4px;
  display: inline-block;
  font: inherit;
  line-height: 1.5em;
  padding: 5px;
  appearance: auto;
  cursor: pointer;
}
</style>
