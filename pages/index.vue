<template>
  <div class="home">
    <div class="box">
      <ReservationBox
        v-on:search-text="searchText"
        :reservations="reservations"
      />
    </div>
    <img :src="require('../assets/room.jpg')" />
  </div>
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
    const reservations = await app.$axios.$get(
      "https://my-json-server.typicode.com/sarmedc/reservations/reservations"
    );
    console.log(reservations);
    return { reservations };
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

<style>
.home {
  display: flex;
  flex-direction: row;
  position: relative;
}
.home .box {
  top: 80px;
}
.home img {
  right: 0;
  width: 912px;
  height: 560px;
  z-index: -1;
}
</style>
