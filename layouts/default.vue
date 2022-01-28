<template>
  <div id="app">
    <div class="main display-flex box-column" id="main" ref="main">
      <div class="display-flex box-center-Y nav-box">
        <div class="logo-img"><img src="../assets/image/logo.png" alt=""></div>
        <div class="project-name">{{langInfo.projectName}}</div>
        <div class="box-flex1"></div>
        <div class="account-btn" v-if="account !== null">{{account.substr(0, 4)}}...{{account.substr(account.length - 5, account.length)}}</div>
      </div>
      <div class="box-flex1 content no-scroller" style="overflow-y: scroll;">
        <nuxt />
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
  .total-amount{
    font-size: 32px;
    margin-top: 16px !important;
    &.amount-first{
      margin-top: 64px !important;
    }
  }
  .connect-wallet{
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
<style scoped lang="less">
 @import "../assets/css/fun.less";

  /*@import "../components/css/loading";*/
 #app{
   width: 100%;
   height: 100%;
   overflow: hidden;
   margin: 0 auto;
   background-position: center;
   background-repeat: no-repeat;
   background-size: 100% 100%;
   background-image: url("../assets/image/bg@2x.png");
 }
 .main{
   position: relative;
   height: 100vh;
   max-width: 1440PX;
   color: @emColor;
   .nav-box{
     padding: 16px 42px;
     .logo-img{
       width: 64px;
       height: 64px;
       border-radius: 50%;
       margin-right: 20px;
       img{
         border-radius: 50%;
         height: 100%;
         width: 100%;
         display: block;
       }
     }
     .project-name{
       font-size: 24px;
       font-family: PingFangSC-Semibold, PingFang SC;
       font-weight: 600;
       color: #63D7CC;
     }
     .account-btn{
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
   >.content{
     >div{
       max-width: 1088PX;
       margin: 0 auto;
       position: relative;
     }
   }
 }
 .banner-box{
   width: 100%;
   position: relative;
   height: 352px;
   background-position: center;
   background-repeat: no-repeat;
   background-size: 100% 100%;
   padding: 30px 40px 0;
   color: #fff;
   font-size: 36px;
   font-weight: 600;
   .logo-img{
     width: 48px;
     height: 32px;
     border-radius: 3px;
     margin-right: 12px;
     img{
       height: 100%;
     }
   }
   .icon-img{
     width: 32px;
     height: 32px;
     margin-right: 24px;
     margin-left: 24px;
   }
 }
  .no-scroller::-webkit-scrollbar{
    display: none;
    overflow-y: auto;
  }
</style>
