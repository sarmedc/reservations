<template>
  <div class="container">
    <AppHeader />
    <Nuxt />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";

export default {
  components: { AppHeader },
};
</script>

<style>
.container {
  font-family: Roboto;
  min-width: 1100px;
}
</style>
