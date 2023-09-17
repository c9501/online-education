<template>
  <div class="search-page">
    <div class="top">
      <van-icon name="arrow-left" @click="$router.back()" />
      <van-field class="inp" left-icon="search" placeholder="搜索你想要的内容" />
      <span class="qx">取消</span>
    </div>
    <!-- <div class="searchbox">
      <div class="titlebox">
        <span> 热门搜索</span>
      </div>
      <div class="listbox">
        <span class="itembox" v-for="item, index in list" :key="index">{{ item.name }}</span>
      </div>
      <div class="titlebox">
        <span>历史记录</span>
        <span class="delbox">
          清空
        </span>
      </div>
      <div class="searchlistbox">
        <span class="ibox">
          Python
        </span>
      </div>
    </div> -->
    <div class="searchinfo">
      <van-tabs v-model:active="active" @click-tab="tabHandle">
        <van-tab :title="item.name" v-for="item in nav" :key="item.name">
        </van-tab>
      </van-tabs>
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
        <van-dropdown-item v-model="value3" :options="option3" />
      </van-dropdown-menu>
      <div class="hotbox">

        <div class="ibox" v-for="item in hotlist" :key="item.id">
          <div class="lbox"> <img :src="item.mainImage.includes('http')
            ? item.mainImage
            : 'http://m.mengxuegu.com' + item.mainImage
            " />
            <div class="time">
              {{ item.totalTime }}
            </div>
          </div>

          <div class="rbox">
            <h3>{{ item.title }}</h3>
            <span class="name">{{ item.nickName }}</span>
            <div class="infobox">
              <span style="color: red;font-size: 14px;width: 65px;display: inline-block;">{{ item.isFree ? '免费' :
                `￥${item.priceDiscount}` }} </span>
              <span style="font-size: 12px; color: #222; ">{{ item.studyTotal }}人在学</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { getSearchlist } from '@/services/home';
import type { SearchItemType } from '@/services/types/home';
import { ref } from 'vue'
const active = ref(0)
const list = [{
  name: "Java",
  value: 'java'
},
{
  name: "Python",
  value: 'Python'
}, {
  name: "Vue.js",
  value: 'Vue.js'
}, {
  name: "React",
  value: 'React'
}, {
  name: "SpringBoot",
  value: 'SpringBoot'
}, {
  name: "SpringCloud",
  value: 'SpringCloud'
}]
const nav = [{ name: '课程' }, { name: '文章' }, { name: '问答' }]
const value1 = ref(0);
const value2 = ref('a');
const value3 = ref('A');
const option1 = [
  { text: '综合排序', value: 0 },
  { text: '最新排序', value: 1 },
  { text: '热门排序', value: 2 },
];
const option2 = [
  { text: '全部课程', value: 'a' },
  { text: '付费课程', value: 'b' },
  { text: '免费课程', value: 'c' },
];
const option3 = [
  { text: '全部分类', value: 'A' },
];
const tabHandle = async () => {

}
const hotlist = ref<SearchItemType[]>()
const getlist = async () => {
  const hotres = await getSearchlist({ current: 1, size: 8, sort: 'hot' })
  console.log('hotres=>', hotres)
  hotlist.value = hotres.data.records
}
getlist()
</script>
<style lang="scss" scoped>
.top {
  width: 100%;
  height: 44px;
  padding: 7px 3px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .van-icon {
    font-size: 27px;
  }

  .van-field {
    flex: 1;
    border: 0;
    border-radius: 15px;
    background-color: #eee;
    height: 30px;
    padding: 1px 2px;
    font-size: 16px;
  }

  .qx {
    font-size: 16px;
    margin-left: 5px;
  }
}

.titlebox {
  color: #222;
  font-size: 15px;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .delbox {
    color: #999;
  }
}

.listbox {
  margin: 10px 0 30px;
  width: 100%;
  height: 67.2px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 12px;
  box-sizing: border-box;

  .itembox {
    font-size: 12px;
    color: #999;
    border: 0.5px solid #999;
    border-radius: 4px;
    padding: 3px 7px;
    margin: 5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}

.searchlistbox {
  padding: 0 12px;

  .ibox {
    font-size: 12px;
    color: #999;
    border: 0.5px solid #999;
    border-radius: 4px;
    padding: 3px 7px;
    margin: 5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}

::v-deep() {
  .van-tab--active {
    color: #007aff;
  }
}
.ibox {
    width: 330.2px;
    height: 100.8px;
    display: flex;
    justify-content: space-between;

    padding: 10px 0;

    .lbox {
      width: 154px;
      height: 80px;
      margin-right: 10px;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        border-radius: 8px;
      }

      .time {
        position: absolute;
        bottom: 2px;
        right: 2px;
        font-size: 11px;
        color: #fff;
        background: rgba(51, 51, 51, .4);
        border-radius: 10px;
        padding: 0 4px;
      }
    }

    .rbox {
      width: 175.2px;
      height: 80px;

      h3 {
        font-size: 14px;
      }

      .name {
        font-size: 12px;
        color: #999;
        margin: 2px 0;
      }
    }
  }
</style>
