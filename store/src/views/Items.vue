<template>
  <v-container :fluid="true" class="py-6 bg-blue-grey-darken-2 item-display">
    <v-container class="bg-white item-info">
      <img :src="require(`@/assets/imgs/${details.img}`)" alt="" />
      <div>
        <h1>{{ details.name }}</h1>
        <p>Price: {{ details.price }}€</p>
        <p>Quantity: {{ details.quantity }}</p>
        <p>Category: {{ details.category }}</p>
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
  mounted() {
    window.scrollTo(0, 0);
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
p {
  text-align: left;
  margin-top: 10px;
  font-size: large;
}
</style>
