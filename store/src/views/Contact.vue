<template>
  <v-container :fluid="true" class="contact-display bg-blue-grey-darken-2">
    <v-container>
      <v-card class="text-justify" elevation="4">
        <v-card-title class="justify-center">
          <h2 style="text-align:center;">Thanks for Reaching Out</h2>
        </v-card-title>
        <v-card-title class="justify-center my-4 flex-wrap">
          <v-icon>mdi-email-outline</v-icon>
          <h3>Mail:</h3>
          <p>
            ContactMail@MockUp.com
          </p>
        </v-card-title>
        <v-card-title class="justify-center my-4 flex-wrap">
          <v-icon>mdi-cellphone</v-icon>
          <h3>Phone Contact:</h3>
          <p>
            +0 555-55556
          </p>
        </v-card-title>
        <v-card-title class="justify-center my-4 flex-wrap">
          <v-icon>mdi-twitter</v-icon>
          <h3>Twitter:</h3>
          <p>
            @ContactMockUpTwitter
          </p>
        </v-card-title>
        <v-card-title class="justify-center my-4 flex-wrap">
          <v-icon>mdi-laptop</v-icon>
          <h3>Work with us:</h3>
          <p>
            www.mockupwebpage.com
          </p>
        </v-card-title>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
.contact-display {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
