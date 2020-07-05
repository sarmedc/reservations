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
  margin: 0 84px 0 84px;
  font-family: Roboto;
  min-width: 1100px;
}
</style>
