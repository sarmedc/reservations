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
  data() {
    return {
      reservation: this.$route.params.reservation,
      code: this.$route.query.code,
    };
  },
  async created() {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };

    try {
      if (!this.reservation && this.code) {
        await axios
          .get(
            "https://my-json-server.typicode.com/sarmedc/reservations/reservations",
            config
          )
          .then((res) => {
            this.reservation = res.data.filter(
              (suggestion) => suggestion.confirmationCode === this.code
            )[0];
          });
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
