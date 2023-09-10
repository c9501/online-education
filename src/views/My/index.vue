<template>
  <div class="my-page">
    <div class="topbox">
      <div class="top"></div>
      <div class="loginbox">
        <div class="l"> <img src="http://m.mengxuegu.com/static/logo.png" alt=""><span>请登录</span></div>
        <van-icon name="arrow" />
      </div>

    </div>
    <div class="cellbox">
      <van-cell-group>
        <van-cell title="我的订单" icon="location-o" is-link size="large" />
        <van-cell title="我的余额" icon="location-o" is-link size="large" />
        <van-cell title="我的学习" icon="location-o" is-link size="large" />
      </van-cell-group>
      <van-cell-group>
        <van-cell title="设置" icon="location-o" is-link size="large" />
        <van-cell title="意见反馈" icon="location-o" is-link size="large" />
      </van-cell-group>
      <van-cell-group>
        <van-cell title="关于我们" icon="location-o" is-link size="large" />
      </van-cell-group>

    </div>
  </div>
</template>

<script setup lang="ts">
</script>
<style lang="scss" scoped>
.my-page {
  height: 100vh;
  width: 100%;

  .top {
    width: 100%;
    height: 44px;
    padding: 7px 3px;
    box-sizing: border-box;
  }

  .loginbox {
    padding: 25px 19px;
    background-color: #fff;
    border-radius: 15px 15px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .l {
      display: flex;
      align-items: center;
      width: 147px;
      height: 75px;
      justify-content: space-between;

      img {
        width: 75px;
        height: 75px;
      }

      >span {
        font-size: 19px;
        font-weight: 700;
      }
    }
  }


}

::v-deep() {
  .cellbox {
    background-color: #f8f9fb;
    font-size: 16px;
    padding-top: 10px;
  }
}

.topbox {
  background-color: #345dc2;
}</style>
