<template>
  <ReservationBox v-on:search-text="searchText" :reservations="reservations" />
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

  async asyncData({ app }) {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };

    try {
      const reservations = await app.$axios.$get(
        "https://my-json-server.typicode.com/sarmedc/reservations/reservationsSearch",
        config
      );

      return { reservations };
    } catch (err) {
      console.error(err);
    }
  },

  methods: {
    searchText(reservation) {
      this.$router.push({
        name: "confirmationCode",
        query: { id: reservation.id },
      });
    },
  },
};
</script>

<style></style>
