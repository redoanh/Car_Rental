<script setup>
defineProps(['canLogin', 'canRegister', 'laravelVersion', 'phpVersion']);
</script>

<template>
  <h1>Welcome to Car Rental</h1>
  <p>Laravel Version: {{ laravelVersion }}</p>
  <p>PHP Version: {{ phpVersion }}</p>
</template>
