<template>
   <div class="container">
      <!-- <input type="search" @input="inputText = $event.target.value" placeholder="검색어를 입력하세요" /> -->
      <!-- <input type="search" v-model="inputText" placeholder="검색어를 입력하세요" /> -->
      <input type="search" @change="inputText = $event.target.value" />
      <button>검색</button>

      <p>{{ inputText }}</p>
      <p>{{ data }}</p>
   </div>
</template>

<script>
export default {
   name: 'SearchComp',
   props: {
      data: Object,
   },
   data() {
      return {
         inputText: 'test',
      };
   },
};
</script>

<style lang="scss" scoped></style>
