<template>
  <div class="card">
    <img :src="car.image" alt="Car Image" width="100" />
    <h2>{{ car.name }} ({{ car.brand }})</h2>
    <p>{{ car.car_type }} - ${{ car.daily_rent_price }}/day</p>
    <button @click="$emit('book', car.id)">Book</button>
  </div>
</template>

<script setup>
defineProps(['car'])
</script>
