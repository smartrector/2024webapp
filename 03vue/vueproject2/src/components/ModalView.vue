<template>
  <div class="modalWrap">
    <div class="inner">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, est.
      <div class="btn btn-primary" @click="$store.state.modalView = false">
        닫기
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.modalWrap {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  .inner {
    width: 300px;
    height: 300px;
    background-color: white;
  }
}
</style>
