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
      <div class="suggestion-box" :class="{ hide: suggestions.length === 0 }">
        <div class="options">
          <ul>
            <li
              v-for="(suggestion, index) in suggestions"
              :key="suggestion.confirmationCode"
              :class="{ selected: selected === index }"
              @click="itemClicked(index)"
            >
              {{ suggestion.city }}
            </li>
          </ul>
        </div>
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
      suggestions: [],
      selected: 0,
      selectedItem: null,
    };
  },
  methods: {
    onSubmit() {
      console.log("wtf", this.selectedItem);
      if (this.selectedItem) {
        this.$emit("search-text", this.selectedItem);
        this.text = "";
      }
    },
    itemClicked(index) {
      this.selected = index;
      this.selectedItem = this.suggestions[index];
      this.text = this.suggestions[index].city;
      this.suggestions = [];
    },

    async searchSuggestion() {
      const config = {
        headers: {
          Accept: "application/json",
        },
      };
      try {
        const text = this.text.toLowerCase();
        if (text !== "") {
          const res = await axios
            .get(
              "https://my-json-server.typicode.com/sarmedc/reservations/reservations",
              config
            )
            .then((res) => {
              this.suggestions = res.data.filter(
                (suggestion) =>
                  suggestion.city.toLowerCase().includes(text) ||
                  suggestion.state.toLowerCase().includes(text) ||
                  suggestion.confirmationCode.toLowerCase().includes(text)
              );
            });
        } else this.suggestions = [];
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
.hide {
  display: none;
}
.selected {
  background: #eee;
  font-weight: 600;
}
</style>
