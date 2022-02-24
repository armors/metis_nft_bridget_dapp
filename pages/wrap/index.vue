<template>
  <div class="bridgeView">
    <div class="bridge-box wrap display-flex box-column">
      <div class="bridge-title">Wrap NFT</div>
      <div class="step-list display-flex box-center-Y">
        <div class="box-flex1 step-item display-flex no-select" v-for="(v, i) in step" :key="`step${i}`" :class="{
          active: i === stepIndex,
          'box-center': i === 1
        }" @click="changeStep(v, i)">{{v}}</div>
      </div>
      <div class="network-box display-flex box-center-Y">
        <div class="box-flex1 from-chain">{{getChainName(fromNet)}}</div>
        <div class="exchange-img" @click="exchangeNet"><img src="../../assets/image/ic_next@2x.png" alt=""></div>
        <div class="box-flex1 to-chain">{{getChainName(toNet)}}</div>
      </div>
      <template v-if="stepIndex === 0">
        <div class="title-text">NFT Token Address(Native)</div>
        <div> <a-input placeholder="Add text" v-model="nftTokenAddress" /></div>
        <div class="box-flex1"></div>
        <a-button type="primary" :loading="iconLoading" @click="nextStep">
          next
        </a-button>
<!--        <y-btn @submitAction="nextStep">next</y-btn>-->
      </template>
      <template v-if="stepIndex === 1">
        <div class="wallet-address">{{nftTokenAddress}}</div>
        <div class="title-text">NFT Token Standard</div>
        <div class="token-id-list display-flex box-nowrap">
          <div class="token-id-item no-select token-standard-item" @click="selectTokenStandard(v, i)" v-for="(v, i) in tokenStandardList" :key="`token-standard-${i}`" :class="{active: tokenStandardIndex === i}">#{{v.key}}</div>
        </div>
        <div class="display-flex box-center-Y input-item" v-show="tokenStandardIndex === 0">
          <div class="label">Name</div>
          <a-input class="box-flex1" v-model="name" placeholder="Add text" />
        </div>
        <div class="display-flex box-center-Y input-item" v-show="tokenStandardIndex === 0">
          <div class="label">Symbol</div>
          <a-input class="box-flex1" v-model="symbol" placeholder="Add text" />
        </div>
        <div class="display-flex box-center-Y input-item">
          <div class="label">BaseURL</div>
          <a-input class="box-flex1" v-model="baseUrl" placeholder="Add text" />
        </div>
        <div class="box-flex1"></div>
        <a-button type="primary" :loading="iconLoading" @click="confirmWrap">
          Confirm&Wrap NFT
        </a-button>
      </template>
    </div>
    <div class="display-flex">
      <a href="javascript:;" class="history-text">View your history ></a>
    </div>

    <a-modal
      v-model="visible"
      title=""
      width="600px"
      centered
      :keyboard="false"
      :maskClosable="false"
      :footer="null"
      :closable="false"
    >
      <div class="title-box">Your wrapped NFT Token Address</div>
      <div class="address-box display-flex box-center-Y">
        <div class="box-flex1">{{tokenTag}}</div>
        <div class="copy-img"
             v-clipboard:copy="tokenTag"
             v-clipboard:success="onCopy"
             v-clipboard:error="onCopyError"
        ><img src="../../assets/image/ic_copy@2x.png" alt=""></div>
      </div>
      <div class="confirm-btn no-select" @click="setNftEvent">SetNFT</div>
    </a-modal>
  </div>
</template>

<script>
export { default } from './js/index'
</script>

<style scoped lang="less">
@import "../bridge/css/index";
</style>
