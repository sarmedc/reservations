<template>
  <div>
    <h1>Your reservation in {{ reservation.city }}, {{ reservation.state }}</h1>
    <div class="content">
      <!-- background image -->
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
export default {
  head() {
    return {
      title: "Confirmation Code",
    };
  },
  data() {
    return {
      reservation: this.$route.params.reservation,
    };
  },
};
</script>

<style></style>
