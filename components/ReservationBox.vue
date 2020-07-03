<template>
  <div>
    <h3>Find your reservation</h3>
    <p>
      You can search by providing the city or the confirmation code of your
      reservation
    </p>
    <form @submit.prevent="onSubmit">
      <input
        class="input-box"
        type="text"
        v-model="text"
        v-on:input="searchSuggestion"
        @keydown.up="up"
        @keydown.down="down"
        placeholder="Enter city or code"
      />
      <div
        class="suggestion-box"
        :class="{ hide: suggestions.length === 0 }"
        ref="suggestionBox"
      >
        <ul>
          <li
            v-for="(suggestion, index) in suggestions"
            :key="suggestion.confirmationCode"
            :class="{ selected: selected === index }"
            @click="itemClicked(index)"
          >
            <div>{{ suggestion.city }}, {{ suggestion.state }}</div>
            <div>
              {{ suggestion.checkInDate }} - {{ suggestion.checkOutDate }}, #{{
                suggestion.confirmationCode
              }}
            </div>
          </li>
        </ul>
      </div>
      <input type="submit" value="Search" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ReservationBox",
  props: ["reservations"],
  data() {
    return {
      text: "",
      selected: 0,
      selectedItem: null,
      suggestions: [],
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
      this.selectItem();
    },
    selectItem() {
      this.selectedItem = this.suggestions[this.selected];
      this.text = this.suggestions[this.selected].city;
      this.suggestions = [];
    },
    up() {
      if (this.selected === 0) return;
      this.selected -= 1;
      this.scrollToItem();
    },
    down() {
      if (this.selected >= this.suggestions.length - 1) return;
      this.selected += 1;
      this.scrollToItem();
    },
    scrollToItem() {
      this.$refs.suggestionBox.scrollTop = this.selected * 58;
    },
    async searchSuggestion() {
      const text = this.text.toLowerCase();
      if (text !== "") {
        this.suggestions = this.reservations.filter(
          (reservation) =>
            reservation.city.toLowerCase().includes(text) ||
            reservation.state.toLowerCase().includes(text) ||
            reservation.confirmationCode.toLowerCase().includes(text)
        );
      } else this.suggestions = [];
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
.input-box {
  height: 40px;
  width: 330px;
  background: #fff;
  border: 1px solid rgba(45, 45, 45, 0.2);
  box-sizing: border-box;
  box-shadow: inset 0px 3px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.suggestion-box {
  width: 330px;
  max-height: 130px;
  background: #fff;
  border: 1px solid #d1d1d1;
  box-sizing: border-box;
  border-radius: 4px;
  overflow: auto;
}
.suggestion-box ul {
  list-style: none;
  padding: 0px;
}
.suggestion-box li {
  padding: 10px;
  cursor: pointer;
}
</style>
