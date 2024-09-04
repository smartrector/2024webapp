<template>
  <div>ViewComp</div>
  {{ props.text }}

  <button @click="emit('update')">변경</button>
</template>

<script setup>
const props = defineProps(["text"]);

const emit = defineEmits();
</script>

<style lang="scss" scoped></style>
