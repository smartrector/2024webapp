<template>
  <div class="search-bar">
    <input type="text" class="inp" />
    <div class="sIcon">
      <i class="fa-solid fa-magnifying-glass"></i>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.search-bar {
  padding: 10px 16px;
  position: relative;

  .inp {
    border: 0 none;
    outline: 0 none;
    border-bottom: 1px solid #333;
    padding: 10px 10px;
    width: 100%;
    font-size: 18px;
  }
  .sIcon {
    width: 30px;
    height: 30px;
    // background-color: skyblue;
    display: flex;
    justify-content: center;
    align-items: center;
    // border: 1px solid #333;
    border-radius: 50%;
    position: absolute;
    right: 16px;
    top: 12px;
    cursor: pointer;
  }
}
</style>
