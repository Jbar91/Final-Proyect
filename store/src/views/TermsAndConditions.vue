<template>
  <v-container :fluid="true" class="bg-blue-grey-darken-2 terms-display">
    <v-container>
      <v-card class="text-justify" elevation="4">
        <v-card-title class="justify-center text-center">
          <h2>Terms and Conditions</h2>
        </v-card-title>
        <v-card-text>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
            aperiam consequatur ullam unde, cum inventore dolore quibusdam
            quisquam error quod ea hic consectetur aliquid corrupti vitae et
            voluptatem adipisci provident? Velit facilis culpa iusto, placeat
            reprehenderit, expedita eligendi sapiente magni maxime iste error,
            consequuntur impedit consectetur quibusdam dolor explicabo natus
            quas laudantium. Doloremque deleniti rem iure tenetur numquam
            accusantium quisquam. A, quas quos commodi maiores nihil odio
            adipisci perspiciatis eius ipsa magnam dicta dignissimos quae libero
            veritatis, necessitatibus fugit doloremque provident molestiae iusto
            sunt deleniti ipsam consequuntur nostrum! Voluptates,
            exercitationem.
          </p>
        </v-card-text>
        <v-card-title class="justify-center">
          <h3>Cookies and Privacy</h3>
        </v-card-title>
        <v-card-text>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi rem
            saepe vel velit voluptatibus eum officiis maxime, maiores earum
            voluptates libero, doloribus deleniti suscipit quasi eaque iure
            explicabo deserunt! Possimus! Error, necessitatibus. Voluptates
            atque veritatis recusandae natus tempora aliquam dolorum est
            quisquam quae, libero eius ab error nostrum eaque expedita quibusdam
            minus impedit necessitatibus. Ullam sint laboriosam enim velit
            voluptatibus.
          </p>
        </v-card-text>
        <v-card-title class="justify-center">
          <h3>License</h3>
        </v-card-title>
        <v-card-text>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            facilis, distinctio, sint amet debitis esse minus quaerat tempore
            voluptas accusantium doloremque quidem accusamus optio quos?
            Voluptas consequatur culpa omnis. Commodi! Dolore consectetur
            tenetur tempore quam et, possimus ab blanditiis cupiditate ullam
            facilis. Exercitationem ex laborum labore nulla necessitatibus,
            quibusdam ea corporis doloremque quisquam quidem odio eveniet. Quas
            consequatur quidem nam. Minima ut voluptates perferendis sit neque.
            Dolorem obcaecati voluptatibus labore placeat harum. Quod molestias,
            dolor voluptate ducimus explicabo assumenda aliquid quia voluptatum
            voluptas quidem at iusto quos suscipit cupiditate voluptatibus! Sit,
            iste? Beatae labore et totam quia animi, distinctio, voluptate earum
            alias nulla quos possimus sunt enim sequi repellendus reiciendis
            esse perferendis architecto at explicabo veniam, facere illo! Ipsam,
            magni.
          </p>
        </v-card-text>
        <v-card-title class="justify-center ">
          <h3>Disclaimer</h3>
        </v-card-title>
        <v-card-text>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet modi
            et autem inventore eum labore consectetur quos, ut aliquam molestiae
            non reprehenderit magnam, facere dolor voluptates sequi dolorum
            itaque facilis.
          </p>
        </v-card-text>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "TermsAndConditions",
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.terms-display {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
