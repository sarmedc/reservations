<template>
  <ReservationBox v-on:search-text="searchText" :reservations="reservations" />
  <!-- add bg image -->
</template>

<script>
import axios from "axios";
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

  async created() {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };

    try {
      await axios
        .get(
          "https://my-json-server.typicode.com/sarmedc/reservations/reservations",
          config
        )
        .then((res) => {
          this.reservations = res.data;
        });
    } catch (err) {
      console.error(err);
    }
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
        query: { code: reservation.confirmationCode },
        params: { reservation },
      });
    },
  },
};
</script>

<style></style>
