<template>
  <div class="bridgeView">
    <div class="bridge-box">
      <div class="network-box display-flex box-center-Y">
        <div class="box-flex1 from-chain">Ethereum</div>
        <div>-></div>
        <div class="box-flex1 to-chain">Andromeda</div>
      </div>
      <div class="title-text">NFT Token Address(ETH)</div>
      <div> <a-input placeholder="Add text" /></div>
      <div class="title-text">Receiver Address(Andromeda)</div>
      <div> <a-input placeholder="Add text" /></div>
      <div class="title-text">Token IDs</div>
      <div class="token-id-list display-flex box-nowrap">
        <div class="token-id-item no-select" @click="selectTokenId(v, i)" v-for="(v, i) in tokenIdList" :key="`token-id-${i}`" :class="{active: tokenIdIndex === i}">#{{v.key}}</div>
      </div>
      <div class="title-text">NFT Token Standard</div>
      <div class="token-id-list display-flex box-nowrap">
        <div class="token-id-item no-select token-standard-item" @click="selectTokenStandard(v, i)" v-for="(v, i) in tokenStandardList" :key="`token-standard-${i}`" :class="{active: tokenStandardIndex === i}">#{{v.key}}</div>
      </div>
      <div class="display-flex ic-box">
        <div class="ic-img"><img src="../../assets/image/ic@2x.png" alt=""></div>
        <div class="box-flex1">Please note that at this time，the Metis NFT bridge only supports transferring one copy at a time</div>
      </div>
      <y-btn>Approve</y-btn>
    </div>
    <div class="display-flex">
      <a href="javascript:;" class="history-text">View your history ></a>
    </div>
  </div>
</template>

<script>
export { default } from './js/index'
</script>

<style scoped lang="less">
.bridgeView{
  .bridge-box{
    width: 560px;
    background: #060816;
    border-radius: 16px;
    padding: 32px 40px 24px;
    margin: 0 auto;
    .network-box{
      height: 72px;
      padding: 0 40px;
      border-radius: 4px;
      background: rgba(101, 218, 207, 0.05);

      font-size: 20px;
      font-family: Helvetica;
      color: #64D9CD;
      .to-chain{
        text-align: right;
      }
    }
    .title-text{
      margin-top: 18px;
      font-size: 14px;
      font-family: Helvetica;
      color: #64D9CD;
    }
    .token-id-list{
      padding-top: 11px;
      .token-id-item{
        margin-top: 15px;
        text-align: center;
        cursor: pointer;
        line-height: 40px;
        width: 88px;
        height: 40px;
        background: rgba(101, 218, 207, 0.1);
        margin-right: 16px;
        border-radius: 4px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        font-size: 14px;
        font-family: Helvetica;
        color: #FFFFFF;
        &.active{
          color: #060816;
          background: #65DACF;
          border-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        &.token-standard-item{
          background-color: transparent;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        &.token-standard-item.active{
          color: #060816;
          background: #F4B74F;
          border-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      }
    }
    .ic-box{
      margin-top: 24px;
    }
    .ic-img{
      width: 14px;
      height: 14px;
      margin-right: 6px;
    }
  }
  .history-text{
    padding-top: 53px;
    margin: 0 auto;
    font-size: 16px;
    font-family: Helvetica;
    color: #64D9CD;
    font-weight: 400;
    text-decoration:underline;
  }
}
</style>
