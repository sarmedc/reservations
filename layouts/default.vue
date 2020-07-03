<template>
  <div class="container">
    <AppHeader />
    <Nuxt />
    <!-- <Footer/> -->
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader";

export default {
  components: { AppHeader },
};
</script>

<style>
.container {
  margin: 0 84px 0 84px;
  font-family: Roboto;
}
</style>
