<template>
  <div class="question-page">
    <ol-nav-bar></ol-nav-bar>
    <van-tabs v-model:active="activeName" @click-tab="onClickTab">
      <van-tab title="热门回答" name="hot" />
      <van-tab title="最新问题" name="new" />
      <van-tab title="等待回答" name="wait" />
    </van-tabs>
    <div class="listbox">
      <div class="ibox" v-for="item in showlist" :key="item.id">
        <span>{{ item.title }}</span>
        <div class="txtbox">
          <div class="l"> {{ item.reply }} 回答 · {{ item.viewCount }} 浏览</div>
          <div class="r">
            {{ item.nickName }} · {{ item.updateDate }}
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { getQuestion } from "@/services/home";
import type { QuestionType } from "@/services/types/home";
import { ref, reactive } from "vue";
const activeName = ref('hot');
const questionreq = reactive({
  current: 1,
  size: 10
})
const showlist = ref<QuestionType[]>()
const onClickTab = () => {
  console.log(activeName.value);
  getlist()
}
//获取问答数据
const getlist = async () => {
  let questionres = await getQuestion(activeName.value, questionreq)
  console.log(questionres);
  showlist.value = questionres.data.records
}
getlist()
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

.ibox {
  padding: 15px;
  border-bottom: 0.5px solid #f1f1f1;
  min-height: 40px;

  >span {
    display: inline-block;
    font-size: 16px;
    font-weight: 700;
    margin: 3px 0;
  }

  .txtbox {
    font-size: 13px;
    color: #999;
    display: flex;
    justify-content: space-between;


  }
}
</style>
