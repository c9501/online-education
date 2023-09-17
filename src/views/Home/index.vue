<template>
  <div class="home-page">
    <div class="banner-box">
      <div class="head">
        <div class="inp"  @click="$router.push('/search')"><van-icon name="search" />搜索你想要的内容</div>
      </div>
      <van-swipe :autoplay="3000" lazy-render>
        <van-swipe-item v-for="(item, index) in bannerlist" :key="index">
          <img :src="'http://m.mengxuegu.com' + item.imageUrl" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="category-box">
      <div class="itembox" v-for="(item, index) in categorylist?.slice(0, 7)" :key="index" @click="$router.push('/search')">
        {{ item.name }}
      </div>
      <div class="itembox">全部分类</div>
    </div>
    <div class="listbox">
      <van-cell title="热门推荐" is-link value="全部" />
      <div class="hotbox">

        <div class="ibox" v-for="item in hotlist" :key="item.id" @click="$router.push('/course')">
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
      <van-cell title="近期上新" is-link value="全部" />
      <div class="newbox">
        <div class="ibox" v-for="item in newlist" :key="item.id"  @click="$router.push('/course')">
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
      <van-cell title="免费精选" is-link value="全部" />
      <div class="freebox">

        <div class="ibox" v-for="item in freelist" :key="item.id"  @click="$router.push('/course')">
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

      <van-cell title="付费精品" is-link value="全部" />
      <div class="costbox">

        <div class="ibox" v-for="item in costlist" :key="item.id"  @click="$router.push('/course')">
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
import { getBanner, getCategory, getSearchlist } from '@/services/home'
import type { BannerType, CategoryType, SearchItemType } from '@/services/types/home'
import { ref } from 'vue'
const bannerlist = ref<BannerType[]>()
const categorylist = ref<CategoryType[]>()
//热门推荐
const hotlist = ref<SearchItemType[]>()
//近期上新
const newlist = ref<SearchItemType[]>()
//免费精选
const freelist = ref<SearchItemType[]>()
//付费精品
const costlist = ref<SearchItemType[]>()
const getlist = async () => {
  const bannerRes = await getBanner()
  //轮播图
  bannerlist.value = bannerRes.data
  // console.log('bannerRes=>', bannerRes)
  //导航栏
  const categoryRes = await getCategory()
  console.log(categoryRes)
  categorylist.value = categoryRes.data
  //热门推荐
  const hotres = await getSearchlist({ current: 1, size: 8, sort: 'hot' })
  console.log('hotres=>', hotres)
  hotlist.value = hotres.data.records
  //近期上新
  const newres = await getSearchlist({ current: 1, size: 10, sort: 'new' })
  console.log('newres=>', newres)
  newlist.value = newres.data.records

  //免费精选
  const fewwres = await getSearchlist({ current: 1, size: 8, isFree: 1 })
  console.log('fewwres=>', fewwres)
  freelist.value = fewwres.data.records

  //付费精品
  const costres = await getSearchlist({ current: 1, size: 8, isFree: 0 })
  console.log('costres=>', costres)
  costlist.value = costres.data.records
}
getlist()
</script>
<style lang="scss" scoped>
.home-page {
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
}

.banner-box {
  width: 100%;
  height: 235px;
  background: linear-gradient(rgb(0, 108, 0) 50%, rgb(255, 255, 255));

  .head {
    padding: 7px 3px;
    height: 44px;
    box-sizing: border-box;

    .inp {
      height: 30px;
      background-color: #fff;
      text-align: center;
      border-radius: 15px;
      font-size: 16px;
      color: rgb(151, 156, 157);
      line-height: 30px;
    }
  }

  .van-swipe {
    width: 100%;
    height: 175px;
    padding: 0 15px;
    box-sizing: border-box;

    img {
      width: 345.2px;
      height: 100%;
      border-radius: 10px;
    }
  }
}

.category-box {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 10px 15px 0;

  .itembox {
    width: 80px;
    height: 35px;
    background-color: #f8f9fb;
    text-align: center;
    line-height: 35px;
    font-size: 13px;
    border-radius: 10px;
    margin-top: 7px;
  }


}

.listbox {
  padding: 0 15px;


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

  .newbox {
    display: flex;
    overflow: auto;

    .ibox {
      width: 145px;
      height: 180.8px;
      justify-content: flex-start;
      flex-direction: column;
      margin: 0 10px 0 0;
      padding: 0 5px;
      box-sizing: border-box;

      .lbox {
        width: 145px;
        height: 80px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .rbox {
        h3 {
          font-size: 14px;
          width: 143px;
        }
      }

    }
  }
}
</style>
