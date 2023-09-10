<template>
  <div class="login-page">
    <div class="top">
      <van-icon name="cross" />
    </div>
    <div class="listbox">
      <div class="titlebox">
        <span>LOGIN</span>
      </div>
      <span class="txt">欢迎回来！</span>
      <van-cell-group>

        <van-field label="手机号码" placeholder="请输入手机号码" label-align="top" />
        <van-field label="验证码" placeholder="请输入手机验证码" label-align="top"> <template #button>
            <van-button size="small" type="primary">获取验证码</van-button>
          </template></van-field>
      </van-cell-group>
      <van-button type="primary" size="large">登录</van-button>

    </div>
    <div class="agreebox">
      <input type="checkbox" class="inp">
      <p>
        <span>请认真阅读并同意</span>
        <a href="javascript:;">《用户服务协议》</a>
        <a href="javascript:;">《隐私权政策》</a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
.agreebox {
  position: absolute;
  left: 0;
  bottom: 5px;
  width: 375px;
  height: 45px;
  font-size: 12px;
  color: #999;
  display: flex;
  align-items: center;
  justify-content: center;
}



.top {
  position: fixed;
  left: 0;
  top: 0;
}

::v-deep() {
  .van-icon {
    font-size: 19px;
    color: #606266;
    margin-top: 20px;
    margin-left: 20px;
  }

  .van-field {
    background-color: #f8f6fc;
    border-radius: 4px;
    margin-bottom: 25px;
    font-size: 13px;
  }
}

.listbox {
  width: 100%;
  height: 425.6px;
  padding: 0 15px;
  box-sizing: border-box;
}

.login-page {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding: 100px 0 0;

  .titlebox {
    font-size: 60px;
    color: #f8f8f8;
  }

  .txt {
    position: relative;
    top: -45px;
    padding-left: 30px;
    font-size: 23px;
    color: #555;
    text-shadow: 1px 0 1px rgba(0, 0, 0, .3);
  }
}
</style>
