import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import Cars from '../Components/Cars.vue';
import Home from '../Components/Home.vue';
import RentCar from '../Components/RentCar.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/cars', name: 'Cars', component: Cars },
  { path: '/rent', name: 'RentCar', component: RentCar },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
