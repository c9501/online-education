<template>
  <div class="layout-page">
    <RouterView />
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/article">阅读</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/question">问答</van-tabbar-item>
      <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">

</script>
<style lang="scss" scoped></style>
