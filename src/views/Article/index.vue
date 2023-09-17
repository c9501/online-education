<template>
  <div class="article-page">
    <ol-nav-bar></ol-nav-bar>
    <div class="tabbox">
      <van-tabs v-model:active="active" @click-tab="tabHandle">
        <van-tab :title="item.name" v-for="item in list" :key="item.id" >
        </van-tab>
      </van-tabs>
      <div class="listbox">
            <div class="itembox" v-for="ele in articlelist" :key="ele.id">
              <div class="infobox">
                <div class="l">
                  <h3>{{ ele.title }}</h3>
                  <p>{{ ele.summary }}</p>
                </div>
                <img v-if="ele.imageUrl" :src="ele.imageUrl?.includes('http')
                  ? ele.imageUrl
                  : `http://m.mengxuegu.com${ele.imageUrl}`
                  " />
              </div>
              <span  style="color: #222;font-size: 13px;">{{ ele.nickName }}</span><span style="color: #999;font-size: 13px;"> · {{ ele.updateDate }} · {{ ele.viewCount }}赞</span>
            </div>
          </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { getArticle, getCategory } from '@/services/home';
import type { ArticleType, Articleres, CategoryType } from '@/services/types/home';
import { onMounted, ref } from 'vue';
const active = ref(0)
const list = ref<CategoryType[]>([])
const articlelist = ref<ArticleType[]>([])
const tabHandle = async()=>{
  const articleRes = await getArticle({
    categoryId:active.value,
    current: 1,
    size: 10
  })
  articlelist.value = articleRes.data.records
}
onMounted(async () => {
  const listres = await getCategory()
  // console.log(listres);
  list.value = listres.data
  const articleRes = await getArticle({
    current: 1,
    size: 10,
    categoryId:active.value
  })
  console.log('articleRes', articleRes);
  articlelist.value = articleRes.data.records
})
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

.itembox {
  width: 375.2px;
  height: 121.6px;
  padding: 15px;
  box-sizing: border-box;

  .infobox {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .l {
      min-width: 233.2px;

      h3 {
        font-size: 17px;
      }

      >p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 13px;
        color: #999;
      }
    }

    img {
      width: 110px;
      height: 70px;
      border-radius: 10px;
    }
  }
}

.listbox {
  min-height: calc(100vh - 154px);
  overflow-y: auto;
  margin-bottom: 60px;
}</style>
