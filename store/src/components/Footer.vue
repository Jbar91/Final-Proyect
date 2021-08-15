<template>
  <ul class="footer-items">
    <li>
      <p>Made by: elyonson</p>
    </li>
    <li>
      <router-link to="/terms-and-conditions">Terms And Conditions</router-link>
    </li>
    <li>
      <router-link to="/support">Support</router-link>
    </li>
    <li>
      <router-link to="/contact">Contact</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
footer {
  border-top: 2px solid #00877b;
  height: 70px;
  max-height: 70px;
}
.footer-items {
  list-style: none;
  display: inline-flex;

  align-items: center;
  width: 100%;
  justify-content: space-evenly;
}
ul > li {
  padding: 8px 12px;
}
li > a {
  text-decoration: none;
}
</style>
