<template>
   <div class="container">
      <h2 class="mb-10">HOT & NEW</h2>
      <div class="cardWrap">
         <div class="card" v-for="(item, i) in data" v-bind:key="i">
            <div class="imgWrap">
               <img :src="`./images/${item.img}`" :alt="`${item.img}`" />
               <div class="hot" v-if="item.hoticon">HOT</div>
            </div>
            <div class="cardBody">
               <h4>{{ item.title }}</h4>
               <p>❤️ {{ item.num }}</p>
               <p>대여 {{ item.won }}</p>
               <!-- <p>👍 {{ item.like }} <button v-on:click="increseLike(i)">클릭</button></p> -->
            </div>
            <div class="btn btn-primary" v-on:click="$emit('openModal', i)">상세보기</div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'cardList',
   props: { data: Array },
};
</script>

<style lang="scss" scoped></style>
