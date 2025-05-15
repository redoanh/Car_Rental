<script setup>
defineProps(['cars']);
</script>

<template>
  <h1 class="text-2xl font-bold">Available Cars</h1>
  <div v-for="car in cars" :key="car.id" class="mt-4 p-4 border">
    <p><strong>Model:</strong> {{ car.model }}</p>
    <p><strong>Brand:</strong> {{ car.brand }}</p>
    <p><strong>Price per Day:</strong> ${{ car.price_per_day }}</p>
  </div>
</template>
