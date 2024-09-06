<template>
  <div
    v-for="(item, i) in $store.state.userData"
    :key="i"
    class="d-flex gap-2 border rounded p-3 mb-3"
  >
    <div class="avata">
      <img :src="item.image" alt="" />
    </div>
    <div>
      <h5 class="mb-0">{{ item.userid }}</h5>
      <p class="mb-0">{{ item.username }}</p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.avata {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
}
</style>
