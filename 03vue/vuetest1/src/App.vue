<template>
   <NavbarView />
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
               <p>👍 {{ item.like }} <button v-on:click="increseLike(i)">클릭</button></p>
            </div>
            <div class="btn btn-primary" v-on:click="modalOpen(i)">상세보기</div>
         </div>
      </div>
   </div>
   <div class="modal" v-if="isModal">
      <div class="inner">
         <h2 class="mb-10">{{ data[selectedNum].title }}</h2>
         <hr class="mb-10" />
         <p class="mb-10">
            {{ data[selectedNum].detail }}
         </p>
         <button class="btn btn-primary" v-on:click="isModal = false">닫기</button>
      </div>
   </div>
</template>

<script>
import mdata from './assets/mdata';
import NavbarView from './components/NavbarView.vue';

export default {
   name: 'appView',
   data() {
      return {
         data: mdata,
         isModal: false,
         selectedNum: 0,
      };
   },
   methods: {
      increseLike(i) {
         console.log(i);
         this.data[i].like += 1;
      },
      modalOpen(num) {
         this.isModal = true;
         this.selectedNum = num;
      },
   },
   components: {
      NavbarView: NavbarView,
   },
};
</script>

<style lang="scss">
$radius: 5px;
.container {
   width: 1000px;
   margin: 0 auto;

   @media screen and (max-width: 790px) {
      width: 100%;
      padding: 0 16px;
   }
   img {
      display: block;
   }
}

.cardWrap {
   display: flex;
   flex-wrap: wrap;
   gap: 10px;
   .card {
      width: calc((100% - 40px) / 5);
      // width: 25%;

      @media screen and (max-width: 790px) {
         width: calc((100% - 10px) / 2);
      }

      @media screen and (max-width: 560px) {
         width: 100%;
      }

      .imgWrap {
         width: 100%;
         position: relative;
         overflow: hidden;
         cursor: pointer;
         border-radius: $radius;
         img {
            width: 100%;
            transition: 0.3s;
         }

         &:hover img {
            transform: scale(1.1);
         }
         .hot {
            position: absolute;
            top: 10px;
            left: 10px;
            background-color: skyblue;
            padding: 2px 10px;
            border-radius: 5px;
            font-weight: bold;
            color: white;
         }
      }
   }
}
.mb-10 {
   margin-bottom: 10px !important;
}

.btn {
   background: pink;
   border-radius: $radius;
   padding: 5px 16px;
   text-align: center;
   cursor: pointer;
   color: white;
   border: 0 none;
   display: block;
   width: 100%;

   &.btn-primary {
      background-color: skyblue;
   }
   &.btn-info {
      background-color: greenyellow;
   }
}

.modal {
   position: fixed;
   background-color: rgba(150, 0, 0, 0.5);
   //  opacity: 0.3;
   //  width: 100%;
   //  height: 100%;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   .inner {
      background: #fff;
      width: 500px;
      padding: 16px 16px;
      border-radius: $radius;
      @media screen and (max-width: 570px) {
         width: 90%;
      }
   }
}
</style>
