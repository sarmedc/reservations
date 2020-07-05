<template>
  <header class="header">
    <h2><nuxt-link to="/" class="link">Kasa</nuxt-link></h2>
    <ul>
      <li>Your reservations</li>
      <li>FAQ</li>
      <li>Contact</li>
      <li>Guest Portal</li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 86px;
}

.header .link {
  color: #2f2a8d;
  text-decoration: none;
}

.header ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style: none;
}

.header li {
  padding: 0 5px;
}
</style>
