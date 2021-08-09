<template>
  <v-container id="buy-popup" class="bg-teal-darken-4 d-flex justify-center">
    <v-container class="d-flex justify-center align-center">
      <v-card width="500" height="400">
        <v-card-title primary-title class="d-flex justify-center">
          <div>
            <h3 class="headline mb-0">Buy New Article</h3>
          </div>
        </v-card-title>
        <v-container class="d-flex justify-center">
          <v-card-text>
            <v-row class="my-2 ">
              <label for="item-name"> Article Name:</label>
              <input type="text" name="Name" id="item-name" required />
            </v-row>
            <v-row class="my-2 ">
              <label for="item-category"> Article Category:</label>
              <Select id="item-category" />
            </v-row>
            <v-row class="my-2">
              <label for="item-quantity">Quantity:</label>
              <input
                type="number"
                name="Quantity"
                id="item-quantity"
                value="10"
                required
              />
            </v-row>
            <v-row class="my-2">
              <label for="item-price">Price:</label>
              <input type="number" name="Price" id="item-price" required />€
            </v-row>
            <v-row class="my-2">
              <label for="img">Image:</label>
              <input type="file" name="image" id="img" accept="image/*" />
            </v-row>
          </v-card-text>
        </v-container>
        <v-container>
          <v-card-actions>
            <v-btn
              flat
              color="blue-accent-1"
              class="mx-auto"
              @click="dialog = false"
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
    <v-btn icon="mdi-close" class="float-right" @click="$router.go(-1)"></v-btn>
  </v-container>
</template>

<script>
import Select from "../components/Select.vue";
export default {
  name: "Experiments",
  components: {
    Select,
  },
  data() {
    return {
      popup: true,
      price: "",
      quantity: 0,
      products: [
        { name: "monitor", Id: 1, quantity: 25, price: 30 },
        { name: "monitor", Id: 2, quantity: 25, price: 30 },
        { name: "monitor", Id: 3, quantity: 25, price: 30 },
        { name: "monitor", Id: 4, quantity: 25, price: 30 },
        { name: "monitor", Id: 5, quantity: 25, price: 30 },
        { name: "monitor", Id: 6, quantity: 25, price: 30 },
        { name: "monitor", Id: 7, quantity: 25, price: 30 },
      ],
    };
  },
  methods: {
    show() {
      this.popup = !this.popup;
      console.log(this.quantity);
    },
  },
  computed: {
    totalPrice() {
      const result = this.quantity * this.price.price * 1;
      return result ? result : "";
    },
  },
};
</script>

<style scoped>
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
  padding: 0.5em 3.5em 0.5em 1em;
  appearance: auto;
  cursor: pointer;
}
</style>
