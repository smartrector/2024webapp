<template>
  <div class="weather-info">
    <div class="icon">
      <img
        :src="`https://openweathermap.org/img/wn/${props.data.icon}@4x.png`"
        alt=""
      />
    </div>
    <div class="temp">{{ (props.data.temp - 273.15).toFixed(2) }}&deg</div>
    <div class="text">{{ props.data.text }}</div>
    <div class="location">
      {{ props.data.location }} / {{ props.data.city }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: Array,
});
</script>

<style lang="scss" scoped></style>
