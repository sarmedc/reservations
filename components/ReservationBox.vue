<template>
  <div>
    <h3>Find your reservation</h3>
    <p>
      You can search by providing the city or the confirmation code of your
      reservation
    </p>
    <form @submit.prevent="onSubmit">
      <input
        type="text"
        v-model="text"
        v-on:input="searchSuggestion"
        placeholder="Enter city or code"
      />
      <div
        class="suggestion-box"
        v-bind:class="{ hide: suggestions.length === 0 }"
      >
        wolololo
      </div>
      <input type="submit" value="Search" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ReservationBox",
  data() {
    return {
      text: "",
      suggestions: []
    };
  },
  methods: {
    onSubmit() {
      this.$emit("search-text", this.text);
      this.text = "";
    },

    searchSuggestion() {
      console.log(this.text);
    }
  }
};
</script>

<style>
.hide {
  display: none;
}
</style>
