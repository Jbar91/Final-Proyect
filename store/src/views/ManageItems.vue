<template>
  <v-container
    :fluid="true"
    class="py-6 bg-blue-grey-darken-2 manage-items-display"
  >
    <v-container class="bg-teal-darken-4 d-flex justify-center ">
      <v-container class="d-flex justify-center ">
        <v-card width="500">
          <v-card-title primary-title class="d-flex justify-center">
            <div>
              <h3 class="headline mb-0">Manage Items</h3>
              <div>
                <v-btn
                  flat
                  color="blue-accent-1"
                  class="mx-auto"
                  @click="showBuy"
                  >Buy</v-btn
                ><v-btn
                  flat
                  color="blue-accent-1"
                  class="ml-4"
                  @click="showSell"
                  >Sell</v-btn
                >
              </div>
            </div>
          </v-card-title>
          <BuyItems v-if="show === 'Buy'" />
          <SellItems v-if="show === 'Sell'" />
        </v-card>
      </v-container>
      <v-btn
        icon="mdi-close"
        aria-label="Close button"
        class="float-right d-none d-sm-block"
        @click="back"
      ></v-btn>
    </v-container>
  </v-container>
</template>

<script>
import BuyItems from "../components/BuyItems.vue";
import SellItems from "../components/SellItems.vue";

export default {
  components: {
    BuyItems,
    SellItems,
  },
  data() {
    return {
      options: JSON.parse(localStorage.getItem("products")),
      show: null,
    };
  },
  methods: {
    showBuy() {
      this.show = "Buy";
    },
    showSell() {
      this.show = "Sell";
    },
    back() {
      this.$router.push({ name: "Storage" });
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
.manage-items-display {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
