<template>
  <div>
    <NavbarView />
    <SearchbarView />
    <WeatherView />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import NavbarView from "./components/NavbarView.vue";
import SearchbarView from "./components/SearchbarView.vue";
import WeatherView from "./components/WeatherView.vue";
import axios from "axios";

const weatherData = ref({
  icon: "icon",
  temp: 0,
  text: "text",
  location: "location",
  city: "seoul",
});

const getWeather = async () => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${weatherData.value.city}&appid=4eedfeb184dc7cb08af6c0bd529c48b9`
  );
  console.log(res.data);
};

onMounted(() => {
  getWeather();
});
</script>

<style lang="scss" scoped></style>
