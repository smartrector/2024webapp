<template>
   <div class="test">
      <h1>title</h1>
   </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$color: #ddd;
.test {
   h1 {
      color: red;
   }
   &.on {
      background: skyblue;
   }
   &:hover {
      background: $color;
   }
}
</style>
