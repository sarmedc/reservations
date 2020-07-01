<template>
  <ReservationBox v-on:search-text="searchText" />
  <!-- add bg image -->
</template>

<script>
import ReservationBox from "../components/ReservationBox";

export default {
  components: {
    ReservationBox
  },
  head() {
    return {
      title: "Reservation"
    };
  },
  data() {
    return {
      reservations: []
    };
  }
};
</script>

<style>
</style>
