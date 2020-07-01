<template>
  <header class="header">
    <h2>Kasa</h2>
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
  name: "AppHeader"
};
</script>

<style>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style: none;
}

li {
  padding: 0 5px;
}
</style>