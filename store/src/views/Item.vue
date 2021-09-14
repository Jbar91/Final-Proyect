<template>
  <v-container :fluid="true" class="py-6 bg-blue-grey-darken-2 item-display">
    <v-container>
      <v-btn aria-label="Back button" class="float-left " @click="back"
        ><v-icon>mdi-keyboard-backspace</v-icon></v-btn
      >
    </v-container>
    <v-container class="bg-white item-info">
      <img :src="require(`@/assets/imgs/${details.img}`)" alt="" />
      <div>
        <h1>{{ details.name }}</h1>
        <p class="item-descriptions">Price: {{ details.price }}€</p>
        <p class="item-descriptions">Quantity: {{ details.quantity }}</p>
        <p class="item-descriptions">Category: {{ details.category }}</p>
      </div>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      itemId: this.$route.params.id,
      articles: JSON.parse(localStorage.getItem("products")),
    };
  },
  methods: {
    back() {
      this.$router.push({ name: "Storage" });
    },
  },
  computed: {
    details() {
      return this.articles.find((item) => item.Id === Number(this.itemId));
    },
  },
};
</script>

<style scoped>
img {
  height: 260px;
  width: 260px;
}
.item-display {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.item-info {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
}
.item-descriptions {
  text-align: left;
  margin-top: 10px;
  font-size: large;
}
</style>
