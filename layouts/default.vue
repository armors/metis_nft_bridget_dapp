<template>
  <div id="app">
    <div class="main display-flex box-column" id="main" ref="main">
      <div class="display-flex box-center-Y nav-box">
        <div class="logo-img"><img src="../assets/image/logo.png" alt=""></div>
        <div class="project-name">{{langInfo.projectName}}</div>
        <div class="nav-item no-select" v-for="(v, i) in langInfo.tabList" @click="selectTab(v, i)" :class="{active: i === tab}" :key="`tab${i}`">{{v.name}}</div>
        <div class="box-flex1"></div>
        <a-dropdown :trigger="['click']">
          <a-menu slot="overlay" @click="changeNetWorkFun">
            <a-menu-item v-for="(v) in $store.state.netWorkList" :key="v.chainId" :chainName="v.chainName" :class="{'item-active-select': v.chainId === $store.state.netWork.chainId}">{{v.chainName}}</a-menu-item>
          </a-menu>
          <div class="net-btn no-select">{{$store.state.netWork.chainName}}</div>
        </a-dropdown>
        <div class="account-btn no-select" @click="openAccount" v-if="account !== null && account !== undefined">{{account.substr(0, 4)}}...{{account.substr(account.length - 5,
                                                         account.length)}}</div>
        <div class="connect-wallet no-select" v-else @click="openWalletType">Connect Wallet</div>
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

    <a-modal
      v-model="$store.state.dialogConnectType"
      title=""
      class="bridge-model"
      width="480px"
      centered
      :keyboard="false"
      :maskClosable="false"
      :footer="null"
      :closable="true"
      @cancel="closeWalletType"
    >
      <div class="display-flex box-center-Y" v-show="account !== null && account !== undefined" @click="goAccountDialog">
        <div class="back-img"><img src="../assets/image/ic_back@2x.png" alt=""></div>
        <div class="back-text no-select">Back</div>
      </div>
      <div class="title-box"> Connect your account</div>
      <div class="connect-list">
        <div class="connect-item display-flex box-center-Y no-select" v-for="(v, i) in connectList" :key="`connect-item-${i}`" :class="{active: $store.state.connectType === v.type}" @click="changeConnectType(v)">
          <div class="circle"></div>
          <div class="box-flex1">{{v.name}}</div>
          <div class="icon-img"><img :src="v.icon_img" alt=""></div>
        </div>
      </div>
    </a-modal>
    <a-modal
      v-model="$store.state.dialogAccount"
      title=""
      class="account-model"
      width="560px"
      centered
      :keyboard="false"
      :maskClosable="false"
      :footer="null"
      :closable="true"
      @cancel="closeDialogAccount"
    >
      <div class="title-box">Account</div>
      <div class="account-info-box">
        <div class="display-flex box-center-Y connect-type">
          <div class="box-flex1">Connected with {{$store.state.connectType}}</div>
          <div class="change-btn no-select" @click="changeAccountBtn">Change</div>
        </div>
        <div class="account-info display-flex box-center-Y">
          <div class="connect-type-img"><img src="../assets/image/logo.png" alt=""></div>
          <div class="box-flex1" v-if="account !== null && account !== undefined">{{account.substr(0, 4)}}...{{account.substr(account.length - 5, account.length)}}</div>
        </div>
      </div>
      <div class="tab-info">View transactions on Andromeda Explorer</div>
    </a-modal>
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
    text-align: center;
    width: 167px;
    height: 48px;
    line-height: 48px;
    background-color: #fff;
    border: 1px solid #65DACF;
    border-radius: 4px;
    position: relative;
    margin-right: 32px;
    cursor: pointer;
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #060816;
  }
</style>
<style lang="less">
  /*.swal2-container, .swal2-top-end, .swal2-backdrop-show{*/
  /*  display: none !important;*/
  /*}*/
</style>
<style lang="less">
  @import "../assets/css/color";
  .ant-btn-primary{
    display: block !important;
    width: 85.7%;
    border: none !important;
    height: 48px !important;
    background-color: @emColor !important;
    border-radius: 8px;
    margin: 20px auto 0;
    cursor: pointer;
    font-size: 20px !important;
    font-family: Helvetica-Bold, Helvetica;
    font-weight: bold;
    color: #060816 !important;
  }
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
    .ant-modal-close{
      color: #64D9CD;
      &:focus, &:hover{
        color: #64D9CD;
      }
    }
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
          .back-text{
            font-size: 20px;
            font-family: Helvetica;
            color: #64D9CD;
            line-height: 24px;
            padding-left: 12px;
          }
          .connect-list{
            padding-top: 48px;
            .connect-item{
              width: 71.8%;
              height: 56px;
              background-color: #122537;
              border-radius: 8px;
              line-height: 56px;
              margin: 16px auto 0;
              padding: 0 24px;

              font-size: 16px;
              font-family: Helvetica;
              color: #65DACF;
              .circle{
                display: none;
                width: 8px;
                height: 8px;
                background-color: #F4B74F;
                border-radius: 50%;
              }
              .icon-img{
                width: 28px;
                height: 28px;
              }
              &.active{
                .circle{
                  display: block;
                  margin-right: 8px;
                }
              }
              &:first-child{
                margin-top: 0;
              }
            }
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
            &.hidden{
              visibility: hidden;
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
  .account-model{
    .ant-modal {
      .ant-modal-content {
        border: none;
        box-shadow: 0px 5px 20px rgba(0, 148, 199, 0.49);
        .ant-modal-body {
          height: 100%;
          padding: 56px 40px 64px;
          color: #64D9CD;
          .title-box{
            text-align: left;
          }
          .account-info-box{
            margin-top: 36px;
            width: 100%;
            background: #060816;
            padding: 16px 12px 32px 18px;
            border-radius: 4px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            .connect-type{
              font-size: 14px;
              font-family: Helvetica;
              .change-btn{
                text-align: center;
                width: 96px;
                height: 32px;
                background: #64D9CD;
                border-radius: 4px;
                line-height: 32px;
                font-size: 14px;
                font-family: Helvetica-Bold, Helvetica;
                font-weight: bold;
                color: #060816;
              }
            }
            .account-info{
              font-size: 24px;
              font-family: Helvetica-Bold, Helvetica;
              font-weight: bold;
              color: #FFFFFF;
              line-height: 29px;
              padding-top: 24px;
              .connect-type-img{
                width: 32px;
                height: 32px;
                margin-right: 12px;
              }
            }
          }
          .tab-info{
            margin-top: 16px;
            font-size: 14px;
            font-family: Helvetica;
            color: #64D9CD;
            line-height: 17px;
          }
        }
      }
    }
  }
  .ant-message{
    top: 100px !important;
  }
  .ant-message-notice{
    padding-right: 0 !important;
    text-align: right !important;
    .ant-message-notice-content{
      border-radius: 16px 0px 0px 16px;
      padding: 0 !important;
      .ant-message-custom-content{
        padding: 36px 20px 16px;
        width: 320px;
        text-align: left;
        border-radius: 16px 0px 0px 16px;
        font-size: 14px;
        font-family: Helvetica-Bold, Helvetica;
        color: #FFFFFF;
        line-height: 17px;
        font-weight: 400;
        .anticon{
          display: none;
        }
        position: relative;
        &:before{
          position: absolute;
          left: 20px;
          top: 16px;
          font-weight: bold;
        }
        &.ant-message-error{
          background-color: #DB603F;
          &:before{
            content: 'ERROR';
          }
        }
        &.ant-message-success{
          background-color: #65DA86;
          &:before{
            content: 'success';
          }
        }
        &.ant-message-warning{
          background-color: #F4B74F;
          &:before{
            content: 'warn';
          }
        }
        &.ant-message-info{
          padding-top: 16px;
          background-color: #53B3A9;
        }
      }
    }
  }
  .ant-dropdown-menu{
    padding: 0 !important;
  }
  .ant-dropdown-menu-item, .ant-dropdown-menu-submenu-title{
    padding: 8px 16px !important;
  }
  .ant-dropdown-menu-item:hover, .ant-dropdown-menu-submenu-title:hover{
  }
  .item-active-select{
    font-weight: 500;
    background-color: #65DACF !important;
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
    margin: 0 auto;
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
        min-width: 120px;
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
