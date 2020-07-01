<template>
  <div>
    <h3>Find your reservation</h3>
    <p>You can search by providing the city or the confirmation code of your reservation</p>
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="text" placeholder="Enter city or code" />
      <input type="submit" value="Search" />
    </form>
  </div>
</template>

<script>
export default {
  name: "ReservationBox",
  data() {
    return {
      text: ""
    };
  },
  methods: {
    onSubmit() {
      this.$emit("search-text", this.text);
      this.text = "";
    }
  }
};
</script>

<style>
</style>