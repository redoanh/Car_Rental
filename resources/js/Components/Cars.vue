<template>
  <div class="container">
    <h1 class="title">Available Cars</h1>

    <div class="car-list">
      <div v-for="car in cars" :key="car.id" class="car-card">
        <img :src="car.image" alt="Car Image" class="car-image" />
        <h2>{{ car.name }}</h2>
        <p><strong>Brand:</strong> {{ car.brand }}</p>
        <p><strong>Type:</strong> {{ car.car_type }}</p>
        <p><strong>Price per day:</strong> ${{ car.daily_rent_price }}</p>
        <button @click="bookCar(car)" class="book-btn">Book Now</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cars',
  data() {
    return {
      cars: [
        {
          id: 1,
          name: 'Corolla',
          brand: 'Toyota',
          car_type: 'Sedan',
          daily_rent_price: 50,
          image: '/images/cars/corolla.jpg', // Replace with your correct image path
        },
        {
          id: 2,
          name: 'Civic',
          brand: 'Honda',
          car_type: 'Sedan',
          daily_rent_price: 55,
          image: '/images/cars/civic.jpg',
        },
        // Add more dummy data or pull from API later
      ],
    };
  },
  methods: {
    bookCar(car) {
      alert(`Booking requested for ${car.name}`);
      // Later, route to booking page or make API call
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
}
.title {
  text-align: center;
  margin-bottom: 30px;
}
.car-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.car-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  width: calc(50% - 20px);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.car-image {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 5px;
}
.book-btn {
  background-color: #007bff;
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
}
.book-btn:hover {
  background-color: #0056b3;
}
</style>
