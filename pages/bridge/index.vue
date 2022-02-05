<template>
  <div class="bridgeView">
    <div class="bridge-box">
      <div class="network-box display-flex box-center-Y">
        <div class="box-flex1 from-chain">Ethereum</div>
        <div class="exchange-img"><img src="../../assets/image/ic_next@2x.png" alt=""></div>
        <div class="box-flex1 to-chain">Andromeda</div>
      </div>
      <div class="title-text">NFT Token Address(ETH)</div>
      <div> <a-input placeholder="Add text" /></div>
      <div class="title-text">Receiver Address(Andromeda)</div>
      <div> <a-input placeholder="Add text" /></div>
      <div class="title-text">Token IDs</div>
      <div> <a-input placeholder="Add text" /></div>
      <!--      <div class="token-id-list display-flex box-nowrap">-->
<!--        <div class="token-id-item no-select" @click="selectTokenId(v, i)" v-for="(v, i) in tokenIdList" :key="`token-id-${i}`" :class="{active: tokenIdIndex === i}">#{{v.key}}</div>-->
<!--      </div>-->
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
@import "./css/index";
</style>
