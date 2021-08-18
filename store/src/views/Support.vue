<template>
  <v-container class="support-display">
    <v-card class="text-justify" elevation="4">
      <v-card-title class="justify-center">
        <h2>Support Page</h2>
      </v-card-title>
      <v-card-title class="justify-center my-4 flex-wrap">
        <v-icon>mdi-email-outline</v-icon>
        <h3>Mail Support:</h3>
        <p>
          SupportMail@MockUp.com
        </p>
      </v-card-title>
      <v-card-title class="justify-center my-4 flex-wrap">
        <v-icon>mdi-cellphone</v-icon>
        <h3>Phone Support:</h3>
        <p>
          +0 555-55555
        </p>
      </v-card-title>
      <v-card-title class="justify-center my-4 flex-wrap">
        <v-icon>mdi-twitter</v-icon>
        <h3>Twitter Support:</h3>
        <p>
          @SupportMockUpTwitter
        </p>
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Support",
};
</script>

<style scoped>
.support-display {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
