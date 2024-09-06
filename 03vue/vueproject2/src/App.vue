<template>
  <ModalView v-if="$store.state.modalView" />
  <NavbarView />
  <router-view />
</template>

<script setup>
import NavbarView from "./components/NavbarView.vue";
import ModalView from "./components/ModalView.vue";
</script>

<style lang="scss" scoped></style>
