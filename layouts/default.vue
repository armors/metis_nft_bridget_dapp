<template>
  <div id="app">
    <div class="main display-flex box-column" id="main" ref="main">
      <div class="display-flex box-center-Y nav-box">
        <div class="logo-img"><img src="../assets/image/logo.png" alt=""></div>
        <div class="project-name">{{langInfo.projectName}}</div>
        <div class="box-flex1"></div>
        <div class="account-btn" v-if="account !== null">{{account.substr(0, 4)}}...{{account.substr(account.length - 5,
                                                         account.length)}}
        </div>
      </div>
      <div class="box-flex1 content no-scroller" style="overflow-y: scroll;">
        <nuxt/>
        <div class="footer-box">
<!--          <div class="display-flex">-->
<!--            <a href="javascript:;" class="history-text">View your history ></a>-->
<!--          </div>-->
          <div class="display-flex box-center tag">
            <div>Terms of Service</div>
            <div class="policy">Privacy policy</div>
          </div>
          <div>© Copyright 2021 by MetisLab Foundation Ltd.</div>
        </div>
      </div>
      <yLloading></yLloading>
    </div>
  </div>
</template>

<script>
export { default } from './js/default'
</script>

<style lang="less">
  @import "../assets/css/fun.less";

  .total-amount {
    font-size: 32px;
    margin-top: 16px !important;

    &.amount-first {
      margin-top: 64px !important;
    }
  }

  .connect-wallet {
    width: 346px;
    height: 60px;
    background: #FFFFFF;
    border-radius: 4px;
    text-align: center;
    line-height: 60px;
    margin: 16px auto 0 !important;
    font-size: 28px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #293E97;
  }
</style>
<style lang="less">
  .ant-input {
    width: 100%;
    height: 56px;
    background: #060816;
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding-left: 16px;
    font-size: 14px;
    font-family: Helvetica;
    color: #FFFFFF;
    margin-top: 16px;
  }
</style>
<style scoped lang="less">
  @import "../assets/css/fun.less";

  /*@import "../components/css/loading";*/
  #app {
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0 auto;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url("../assets/image/bg@2x.png");
  }

  .main {
    position: relative;
    height: 100vh;
    max-width: 1440PX;
    color: @emColor;

    .nav-box {
      padding: 16px 42px;

      .logo-img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        margin-right: 20px;

        img {
          border-radius: 50%;
          height: 100%;
          width: 100%;
          display: block;
        }
      }

      .project-name {
        font-size: 24px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: @emColor;
      }

      .account-btn {
        width: 176px;
        height: 56px;
        background: rgba(6, 8, 22, 0.8);
        border-radius: 4px;
        text-align: center;
        line-height: 56px;
        font-size: 20px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
      }
    }

    > .content {
      > div {
        max-width: 1088PX;
        margin: 0 auto;
        position: relative;
      }
    }
    .footer-box {
      /*padding-top: 53px;*/
      text-align: center;
      font-size: 16px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.5);
      line-height: 22px;
      padding-bottom: 28px;
      >div{
        padding-bottom: 8px;
      }
      .policy {
        margin-left: 32px;
      }
      .tag{
        padding-top: 64px;
      }
      /*.history-text{*/
      /*  margin: 0 auto;*/
      /*  font-size: 16px;*/
      /*  font-family: Helvetica;*/
      /*  color: #64D9CD;*/
      /*  font-weight: 400;*/
      /*  text-decoration:underline;*/
      /*}*/
    }
  }

  .no-scroller::-webkit-scrollbar {
    display: none;
    overflow-y: auto;
  }
</style>
