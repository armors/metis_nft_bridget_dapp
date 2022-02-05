<template>
  <div id="app">
    <div class="main display-flex box-column" id="main" ref="main">
      <div class="display-flex box-center-Y nav-box">
        <div class="logo-img"><img src="../assets/image/logo.png" alt=""></div>
        <div class="project-name">{{langInfo.projectName}}</div>
        <div class="nav-item no-select" v-for="(v, i) in langInfo.tabList" @click="selectTab(v, i)" :class="{active: i === tab}" :key="`tab${i}`">{{v.name}}</div>
        <div class="box-flex1"></div>
        <div class="net-btn no-select">Test Network</div>
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
    width: 100% !important;
    height: 56px !important;
    background-color: #060816 !important;
    border-radius: 4px !important;
    border: 1px solid rgba(255, 255, 255, 0.2) !important;
    padding-left: 16px !important;
    font-size: 14px !important;
    font-family: Helvetica;
    color: #FFFFFF !important;
    margin-top: 16px !important;
  }
  .ant-modal-mask{
    background-color: rgba(0, 0, 0, 0.6) !important;
  }
  .ant-modal{
    padding-bottom: 0 !important;
    .ant-modal-content{
      background: #060816;
      border-radius: 16px;
      border: 1px solid #65DBCF;
      .ant-modal-body{
        height: 100%;
        padding: 65px 40px 48px;
        .title-box{
          text-align: center;
          font-size: 28px;
          font-family: AppleSymbols;
          color: #64D9CD;
        }
        .address-box{
          width: 100%;
          height: 64px;
          background: #060816;
          border-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          font-size: 16px;
          font-family: Helvetica;
          color: #FFFFFF;
          padding: 0 16px;
          margin-top: 48px;
          .copy-img{
            width: 24px;
            height: 24px;
            cursor: pointer;
          }
        }
        .confirm-btn{
          width: 56.7%;
          height: 48px;
          background: #65DACF;
          border-radius: 4px;
          text-align: center;
          line-height: 48px;
          margin: 48px auto 0;
          font-size: 16px;
          font-family: Helvetica-Bold, Helvetica;
          font-weight: bold;
          color: #060816;
          cursor: pointer;
        }
      }
    }
  }
  .input-item{
    .ant-input{
      margin-top: 0 !important;
    }
  }
  .bridge-model{
    .ant-modal{
      .ant-modal-content{
        .ant-modal-body{
          height: 100%;
          padding: 24px 30px 30px;
          .back-img{
            width: 20px;
            height: 20px;
            cursor: pointer;
          }
          .title-box{
            text-align: center;
            font-size: 28px;
            font-family: AppleSymbols;
            color: #64D9CD;
          }
          .chain-box{
            width: 100%;
            padding: 24px 30px 18px;
            text-align: center;
            font-size: 16px;
            font-family: Verdana;
            color: rgba(255, 255, 255, 0.5);
            line-height: 19px;
            background-color: #122537;
            border-radius: 4px;
            margin-top: 38px;
            .next-img{
              width: 40px;
              height: 40px;
              margin: 15px auto;
              -webkit-transform: rotate(90deg);
              -moz-transform: rotate(90deg);
              -o-transform: rotate(90deg);
              -ms-transform: rotate(90deg);
              transform: rotate(90deg);
            }
          }
          .token-info{
            margin-top: 30px;
            padding: 20px 16px 24px;
            width: 100%;
            background: #060816;
            border-radius: 4px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            font-size: 16px;
            font-family: Helvetica;
            color: #64D9CD;
            line-height: 19px;
            .token-stand{
              padding-top: 24px;
            }
            .box-flex1{
              text-align: right;
            }
          }
          .tip-box{
            font-size: 12px;
            font-family: Helvetica;
            color: #64D9CD;
            line-height: 14px;
            padding-top: 16px;
            &.tip-box1{
              padding-top: 24px;
              text-align: center;
              color: #F4B74F;
            }
          }
          .confirm-btn{
            margin-top: 20px;
            width: 100%;
          }
        }
      }
    }
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
      .nav-item{
        font-size: 16px;
        color: #fff;
        min-width: 160px;
        padding-left: 30px;
        text-align: center;
        cursor: pointer;
        padding-top: 5px;
        /*font-family: 'Nunito Sans', sans-serif;*/
        text-transform: uppercase;
        &.active{
          color: @emColor;
        }
      }
      .project-name {
        font-size: 24px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: @emColor;
      }
      .net-btn{
        padding: 0 32px 0 16px ;
        min-width: 167px;
        height: 48px;
        line-height: 48px;
        background-color: #65DACF;
        border-radius: 4px;
        position: relative;
        margin-right: 32px;
        cursor: pointer;
        font-size: 18px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #060816;
        &:after{
          content: '';
          position: absolute;
          right: 14px;
          top: 19px;
          width: 0px;
          height: 0px;
          border-left: 6px solid transparent;
          border-bottom: 6px solid transparent;//向上的三角
          border-right: 8px solid transparent;
          border-top: 8px solid #060816;
        }
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
