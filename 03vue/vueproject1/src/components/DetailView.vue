<template>
  <div class="container mt-5">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias expedita
    repudiandae doloribus unde itaque hic eligendi repellat. Eos, obcaecati
    similique.

    <h2>{{ $route.name }}</h2>
    <hr />

    <h3>{{ $route }}</h3>
    {{ $route.params }} /
    <p>{{ props.data[0] }}</p>
    <div class="btn btn-primary" @click="$router.push({ name: 'home' })">
      home
    </div>

    <div v-if="item">
      <h1>{{ item.title }}</h1>
    </div>
    <div v-else>해당자료를 존재하지 않습니다.</div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({
  data: Array,
});

const route = useRoute();
const item = computed(() => {
  const id = parseInt(route.params.num);
  return props.data.find((item) => item.id === id);
});

console.log(item.value);
</script>

<style lang="scss" scoped></style>
