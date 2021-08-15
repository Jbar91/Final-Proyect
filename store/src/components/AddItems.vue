<template>
  <v-container class="bg-teal-darken-4 d-flex justify-center ">
    <v-container class="d-flex justify-center ">
      <v-card width="500">
        <v-card-title primary-title class="d-flex justify-center">
          <div>
            <h3 class="headline mb-0">Add Items</h3>
          </div>
        </v-card-title>
        <v-container class="d-flex justify-center">
          <v-card-text>
            <v-row class="my-2 ">
              <label for="item-name"> Article:</label>
              <select name="articles-stock" id="item-name" v-model="option">
                <option
                  v-for="item in items"
                  :key="item"
                  :value="{ price: item.price }"
                  >{{ item.name }}</option
                >
              </select>
            </v-row>
            <v-row class="my-3">
              <label for="item-quantity">Quantity:</label>
              <input
                type="number"
                name="Quantity"
                id="item-quantity"
                required
                v-model="quantity"
              />
            </v-row>
            <v-row class="mt-3">
              <label for="item-price">Total Price:</label>
              <div>{{ totalPrice }}€</div>
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
              @click="dialog = false"
              >Accept</v-btn
            >
          </v-card-actions>
        </v-container>
      </v-card>
    </v-container>
    <v-btn
      icon="mdi-close"
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
  data() {
    return {
      option: "",
      quantity: 0,
    };
  },
  methods: {
    print() {
      console.log(this.quantity, this.option.price);
    },
  },
  computed: {
    totalPrice() {
      const result = this.quantity * this.option.price * 1;
      return result ? result : "";
    },
  },
};
</script>

<style>
input[type="text"] {
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
input[type="file"] {
  margin-left: 10px;
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
