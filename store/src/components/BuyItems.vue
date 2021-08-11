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
              <input
                type="file"
                name="image"
                id="img"
                accept="image/*"
                disabled
              />
            </v-row>
          </v-card-text>
        </v-container>
        <v-container>
          <v-card-actions>
            <v-btn
              flat
              color="blue-accent-1"
              class="mx-auto"
              @click="
                dialog = false;
                $router.go(-1);
              "
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
      @click="$router.go(-1)"
    ></v-btn>
  </v-container>
</template>

<script>
import Select from "./Select.vue";
export default {
  components: {
    Select,
  },
  methods: {},
};
</script>

<style scoped>
#buy-popup {
  width: 100%;
  height: 100%;
}
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
</style>
