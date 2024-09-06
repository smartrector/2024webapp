<template>
  <div>지도</div>
  <div id="map" style="width: 500px; height: 400px"></div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  var container = document.getElementById("map");
  var options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3,
  };

  var map = new kakao.maps.Map(container, options);
});
</script>

<style lang="scss" scoped></style>
