<template>
  <div class="question-page">
    <ol-nav-bar></ol-nav-bar>
    <van-tabs v-model:active="activeName" @click-tab="onClickTab">
      <van-tab title="热门回答" name="hot" />
      <van-tab title="最新问题" name="new" />
      <van-tab title="等待回答" name="wait" />
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue"
const activeName = ref('hot');
const onClickTab = () => {
  console.log(activeName.value);
}
</script>
<style lang="scss" scoped>
.article-page {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

::v-deep() {
  .van-tab--active {
    color: #007aff;
  }

}
</style>
