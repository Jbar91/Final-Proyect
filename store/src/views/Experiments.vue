<template>
  <v-container>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }} + {{ item.price }} + {{ item.img }}
      </li>
    </ul>
  </v-container>
  <form action="">
    <input type="text" v-model="name" />
    <input type="number" v-model="price" />
    <input type="file" name="" id="" accept="image/*" />
    <v-btn @click="send">Show</v-btn>
  </form>
</template>

<script>
import { articles } from "@/assets/data/articles.json";

export default {
  name: "Experiments",
  components: {},
  emits: ["event"],
  mounted() {
    window.scrollTo(0, 0);
  },
  data() {
    return {
      popup: true,
      quantity: 0,
      items: articles,
      name: "",
      price: "",
      img: "",
    };
  },
  methods: {
    show() {
      this.popup = !this.popup;
      console.log(this.quantity);
    },
    send() {
      let test = {
        name: this.name,
        price: this.price,
        img: this.img,
      };
      this.items = [...this.items, test];
      console.log(test);
      this.$emit("event", this.items);
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
