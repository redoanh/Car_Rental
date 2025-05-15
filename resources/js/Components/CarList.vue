<template>
  <div>
    <h1>Available Cars</h1>
    <div class="car-list">
      <CarCard
        v-for="car in cars"
        :key="car.id"
        :car="car"
        @book="bookCar"
      />
    </div>
  </div>
</template>

<script setup>
import {
  onMounted,
  ref,
} from 'vue';

import axios from 'axios';

import CarCard from './CarCard.vue';

const cars = ref([])

const fetchCars = async () => {
  const res = await axios.get('/api/cars')
  cars.value = res.data
}

const bookCar = (carId) => {
  alert('Book car ID: ' + carId)
}

onMounted(fetchCars)
</script>
