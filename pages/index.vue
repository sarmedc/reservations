<template>
  <ReservationBox v-on:search-text="searchText" />
  <!-- add bg image -->
</template>

<script>
import ReservationBox from "../components/ReservationBox";

export default {
  components: {
    ReservationBox,
  },
  head() {
    return {
      title: "Reservation",
    };
  },
  data() {
    return {
      reservations: [],
    };
  },
  methods: {
    searchText(reservation) {
      console.log(`searched for ${reservation.city}`);
      this.$router.push({
        name: "confirmationCode",
        params: { reservation },
      });
    },
  },
};
</script>

<style></style>
