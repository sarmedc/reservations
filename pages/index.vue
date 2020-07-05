<template>
	<div class="home">
		<ReservationBox v-on:search-text="searchText" :reservations="reservations" />
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
	text-align: right;
	position: relative;
	margin: 15px 86px;
}
.home img {
	width: 80%;
	max-width: 1300px;
	min-width: 800px;
	height: auto;
	z-index: -1;
}
</style>
