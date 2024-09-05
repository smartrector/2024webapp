<template>
  <SearchbarView @searchCity="searchCity" />
  <WeatherView />
</template>

<script setup>
import SearchbarView from "./SearchbarView.vue";
import WeatherView from "./WeatherView.vue";
</script>

<style lang="scss" scoped></style>
