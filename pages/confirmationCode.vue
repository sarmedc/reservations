<template>
  <div v-if="reservation" class="confirmation-page">
    <h1 class="reservation-name">Your reservation in {{ reservation.city }}</h1>
    <div class="content">
      <img :src="reservation.cityImage" />
      <div class="reservation-info">
        <div class="reservation-info-title">Location</div>
        <div class="reservation-info-detail">{{ reservation.location }}</div>
        <br />
        <div class="reservation-info-title">Dates</div>
        <div class="reservation-info-detail">
          {{ reservation.checkInDate }} - {{ reservation.checkOutDate }}
        </div>
        <br />
        <div class="reservation-info-title">Confirmation Code</div>
        <div class="reservation-info-detail">
          #{{ reservation.confirmationCode }}
        </div>
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
    const id = route.query.id;

    if (id) {
      const reservation = await app.$axios.$get(
        "https://my-json-server.typicode.com/sarmedc/reservations/reservations/" +
          id
      );

      return { reservation };
    }
  },
};
</script>

<style>
.confirmation-page {
  margin: 0 86px;
  height: 60vh;
}
.content {
  display: flex;
  flex-direction: row;
  color: #2d2d2d;
}
.reservation-name {
  color: #2d2d2d;
  font-weight: bold;
  font-size: 32px;
  line-height: 32px;
  margin: 40px 0;
}
.reservation-info {
  margin-left: 25px;
}
.reservation-info-title {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
}
.reservation-info-detail {
  font-size: 16px;
  line-height: 24px;
  font-weight: normal;
}
img {
  width: 448px;
  height: 275px;
  border-radius: 4px;
}
</style>
