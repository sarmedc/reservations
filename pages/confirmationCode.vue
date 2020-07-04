<template>
  <div v-if="reservation">
    <h1>Your reservation in {{ reservation.city }}, {{ reservation.state }}</h1>
    <div class="content">
      <img :src="reservation.cityImage" />
      <div class="reservation-info">
        <div>Location</div>
        <div>{{ reservation.location }}</div>
        <br />
        <div>Dates</div>
        <div>
          {{ reservation.checkInDate }} - {{ reservation.checkOutDate }}
        </div>
        <br />
        <div>Confirmation Code</div>
        <div>{{ reservation.confirmationCode }}</div>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  head() {
    return {
      title: "Confirmation Code",
    };
  },
  async asyncData({ app, route }) {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    const id = route.query.id;

    try {
      if (id) {
        const reservation = await app.$axios.$get(
          "https://my-json-server.typicode.com/sarmedc/reservations/reservations/" +
            id,
          config
        );

        return { reservation };
      }
    } catch (err) {
      console.error(err);
    }
  },
};
</script>

<style>
.content {
  display: flex;
  flex-direction: row;
}
img {
  width: 440px;
  height: 275px;
  border-radius: 4px;
}
</style>
