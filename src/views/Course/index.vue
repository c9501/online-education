<template>
  <div class="course-page">
    <div class="top">
      <div class="icon">
        <van-icon name="arrow-left" @click="$router.back()"/>
      </div>
    </div>
    <div class="imgbox">
      <img :src="infolist?.mainImage.includes('http')
        ? infolist.mainImage
        : 'http://m.mengxuegu.com' + infolist?.mainImage
        " />
    </div>
    <div class="infobox">
      <div class="pricebox">
        <span style="color: #fa140e;
        display: inline-block;
         font-size: 23px;
         font-weight: 700;
         margin-right: 5px;
         ">￥{{ infolist?.priceDiscount }}</span>
        <span style="color: #b6bbbf;
        display: inline-block;
        font-size: 15px;
         text-decoration: line-through;
         margin-right: 5px;">￥{{ infolist?.priceOriginal }}</span>
        <span style="color: #fa140e;
          font-size: 12px;
          border: 1px solid #fa140e;
          border-radius: 5px;
          display: inline-block;
          padding: 0 1px;">优惠价</span>
      </div>

      <div class="titlebox">
        <span style="font-size: 17px;
        font-weight: 700;
        color: #1d1d1f;
         padding-left: 4px;">{{ infolist?.title }}</span>
      </div>
      <div class="goodbox">
        <span><van-icon name="flower-o" />{{ infolist?.goodRate }}好评</span>
        <span><van-icon name="user-o" />{{ infolist?.studyTotal }}</span>
      </div>


    </div>

    <div class="long">
      <img :src="infolist?.detailUrls[0]" alt="">
    </div>
    <div class="btnbox">
      <button class="btn">立即购买</button>
    </div>

  </div>
</template>

<script setup lang="ts">
import { getInfo, getIsbuy } from '@/services/buy';
import type { InfoType } from '@/services/types/buy';
import { ref } from 'vue';
const isbuy = ref<boolean>(false)
const infolist = ref<InfoType>()
const getlist = async () => {
  //是都购买
  let isbuyres = await getIsbuy()
  isbuy.value = isbuyres.data.isBuy
  //
  let infores = await getInfo()
  console.log(infores.data);
  infolist.value = infores.data
}
getlist()
</script>
<style lang="scss" scoped>
.course-page {
  padding: 0 0 50px 0;
}

.btnbox {
  width: 100%;
  height: 50px;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;

  .btn {
    width: 350px;
    background-color: #345dc2;
    text-align: center;
    font-size: 17px;
    color: #fff;
    border-radius: 25px;
    line-height: 40px;
    border: 0;
  }
}

.top {
  width: 100%;
  height: 44px;
  padding: 7px 3px;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 0;

  .icon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, .5);


    .van-icon {
      font-size: 27px;
      color: #fff;
      text-align: center;
      line-height: 32px;
    }
  }
}

.imgbox {
  width: 100%;
  height: 210px;

  img {
    width: 100%;
    height: 100%;
  }
}

.infobox {

  padding: 12px;
  background-color: #fff;
  border: 12px solid #f8f9fb;
  border-left: 0;
  border-right: 0;

  width: 100%;
  height: 135.6px;

  box-sizing: border-box;

  .titlebox {
    font-size: 17px;
    font-weight: 700;
    color: #1d1d1f;
    padding-left: 4px;
  }

  .goodbox {
    padding: 7px 0;

    span {
      margin-right: 7px;
      font-size: 10px;
      color: #7d828f;
      background-color: #f8f9fb;
      padding: 7px;
      border-radius: 15px;
    }
  }
}

.long {
  width: 100%;

  img {
    width: 100%;
  }
}
</style>
