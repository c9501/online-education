<template>
  <div class="navbar">
    <div class="inp" @click="$router.push('/search')"><van-icon name="search" size="20"/>搜索你想要的内容</div>
  </div>
</template>

<script setup lang="ts">
</script>
<style lang="scss" scoped>
.navbar{
  background-color: rgb(52, 93, 194);
  width: 100%;
  height: 44px;
  padding: 7px 3px;
  box-sizing: border-box;

  .inp{
    text-align: center;
    background-color: #fff;
    width: 331.2px;
    height: 30px;
    margin: auto;
    border-radius: 15px;
    text-align: center;
    line-height: 30px;
    color: rgb(118, 118, 118);
    font-size: 16px;
  }
}
</style>
