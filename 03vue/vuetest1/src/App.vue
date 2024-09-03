<template>
   <div class="container">
      <h2>HOT & NEW</h2>
      <div class="cardWrap">
         <div class="card" v-for="(item, i) in data" v-bind:key="i">
            <div class="imgWrap">
               <img :src="`./images/${item.img}`" :alt="`${item.img}`" />
            </div>
            <div class="cardBody">
               <h4>{{ item.title }}</h4>
               <p>❤️ {{ item.num }}</p>
               <p>대여 {{ item.won }}</p>
               <p>👍 {{ item.like }} <button>클릭</button></p>
            </div>
            <div class="hot">HOT</div>
         </div>
      </div>
   </div>
</template>

<script>
import mdata from './assets/mdata';

export default {
   name: 'appView',
   data() {
      return {
         data: mdata,
      };
   },
};
</script>

<style lang="scss" scoped>
.container {
   width: 1000px;
   margin: 0 auto;

   @media screen and (max-width: 790px) {
      width: 100%;
   }
   img {
      display: block;
   }
}
</style>
