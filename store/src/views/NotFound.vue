<template>
  <v-container :fluid="true" class="ma-3 container-404">
    <h1>
      <v-icon>mdi-robot-dead-outline</v-icon> Page not found, try going
      <router-link :to="{ name: 'Storage' }">home</router-link>
    </h1>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.container-404 {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}
</style>
