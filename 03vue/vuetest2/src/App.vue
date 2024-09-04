<template>
  <div class="container">
    <h1>test</h1>
    {{ count }}
    <button @click="addNum">클릭</button>
    <div class="box" v-if="showBox">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et adipisci
      reprehenderit optio! Libero temporibus amet cupiditate magnam,
      perspiciatis dolor dolorem repellendus in exercitationem! Corporis, est
      consequatur itaque dolorum eius nemo?
      <button @click="closeBox">close</button>
    </div>
    <ViewComp :text="text" @update="textChange" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ViewComp from "./components/ViewComp.vue";

const count = ref(0);
const text = ref("title");
const showBox = ref(false);

const addNum = () => {
  console.log("test");
  count.value++;
  showBox.value = true;
};

const closeBox = () => {
  showBox.value = false;
};

const textChange = () => {
  console.log("textChange");
  text.value = "vueCamp";
};
</script>

<style lang="scss" scoped></style>
