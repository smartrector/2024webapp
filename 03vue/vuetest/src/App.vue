<template>
   <div class="container secWrap">
      <h3>HOT & NEW</h3>
      <div class="cardWrap">
         <div class="card" v-for="(item, i) in data" v-bind:key="i">
            <div class="imgWrap">
               <img v-bind:src="`./images/${item.img}`" alt="" />
            </div>
            <div class="cardText">
               <h3>{{ item.title }}</h3>
               <p>❤️ {{ item.num }}</p>
               <p>대여 : {{ item.won }}</p>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'App',
   data() {
      return {
         todos: ['서울', '부산', '대구'],
         data: [
            { title: '핸섬가이즈', num: '8.6', won: '11,000', img: 'handsome.jpg' },
            { title: '탈주', num: '8.1', won: '11,000', img: 'movie.jpg' },
            { title: '하이재킹', num: '8.7', won: '10,900', img: 'movie1.jpg' },
         ],
      };
   },
};
</script>

<style lang="scss" scoped>
@import './assets/css/style.scss';
.secWrap {
   padding: 5px 16px;
}

.cardWrap {
   display: flex;
   gap: 10px;
   .card {
      width: 212px;

      .imgWrap {
         width: 100%;
         overflow: hidden;
         border-radius: 5px;

         img {
            display: block;
            width: 100%;
            transition: 0.3s;
         }
         &:hover img {
            transform: scale(1.05);
         }
      }
      .cardText {
         padding: 5px;
      }
   }
}
</style>
