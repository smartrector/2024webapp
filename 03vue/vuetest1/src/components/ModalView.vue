<template>
   <div class="modal" v-if="isModal">
      <div class="inner">
         <h2 class="mb-10">{{ data[num].title }}</h2>
         <hr class="mb-10" />
         <p class="mb-10">
            {{ data[num].detail }}
         </p>
         <button class="btn btn-primary" v-on:click="$emit('closeModal')">닫기</button>
      </div>
   </div>
</template>

<script>
export default {
   name: 'modalView',
   props: {
      data: Array,
      isModal: Boolean,
      num: Number,
   },
};
</script>

<style lang="scss" scoped>
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
   z-index: 999;
   .inner {
      background: #fff;
      width: 500px;
      padding: 16px 16px;
      border-radius: 5px;
      @media screen and (max-width: 570px) {
         width: 90%;
      }
   }
}
</style>
