<template>
  <v-container>
    <v-card class="text-justify" elevation="4">
      <v-card-title class="justify-center">
        <h2>Thanks for Reaching Out</h2>
      </v-card-title>
      <v-card-title class="justify-center my-4">
        <v-icon>mdi-email-outline</v-icon>
        <h3>Mail:</h3>
        <p>
          ContacMail@MockUp.com
        </p>
      </v-card-title>
      <v-card-title class="justify-center my-4">
        <v-icon>mdi-cellphone</v-icon>
        <h3>Phone Contact:</h3>
        <p>
          +0 555-55556
        </p>
      </v-card-title>
      <v-card-title class="justify-center my-4">
        <v-icon>mdi-twitter</v-icon>
        <h3>Twitter:</h3>
        <p>
          @ContactMockUpTwitter
        </p>
      </v-card-title>
      <v-card-title class="justify-center my-4">
        <v-icon>mdi-laptop</v-icon>
        <h3>Work with us:</h3>
        <p>
          www.mockupwebpage.com
        </p>
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Experiments",
  components: {},
  mounted() {
    window.scrollTo(0, 0);
  },
  data() {
    return {
      popup: true,
      price: "lorem*10",
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
