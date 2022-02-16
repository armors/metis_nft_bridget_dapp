<template>
  <div class="bridgeView">
    <div class="bridge-box">
      <div class="network-box display-flex box-center-Y">
        <div class="box-flex1 from-chain">{{getChainName(fromNet)}}</div>
        <div class="exchange-img" @click="exchangeNet"><img src="../../assets/image/ic_next@2x.png" alt=""></div>
        <div class="box-flex1 to-chain">{{getChainName(toNet)}}</div>
      </div>
      <div class="title-text">NFT Token Address({{getChainName(fromNet)}})</div>
      <div> <a-input placeholder="Add text" v-model="nftTokenAddress" @blur="nftTokenBlur"/></div>
      <div class="title-text">Receiver Address({{getChainName(toNet)}})</div>
      <div> <a-input placeholder="Add text" v-model="receiverAddress"/></div>
      <div class="title-text">Token IDs</div>
      <div> <a-input placeholder="Add text" v-model="tokenId" /></div>
      <!--      <div class="token-id-list display-flex box-nowrap">-->
<!--        <div class="token-id-item no-select" @click="selectTokenId(v, i)" v-for="(v, i) in tokenIdList" :key="`token-id-${i}`" :class="{active: tokenIdIndex === i}">#{{v.key}}</div>-->
<!--      </div>-->
      <div class="title-text">NFT Token Standard</div>
      <div class="token-id-list display-flex box-nowrap">
        <div class="token-id-item no-select token-standard-item" @click="selectTokenStandard(v, i)" v-for="(v, i) in tokenStandardList" :key="`token-standard-${i}`" :class="{active: tokenStandardIndex === i}">#{{v.key}}</div>
      </div>
      <div class="display-flex ic-box" v-show="tokenStandardIndex === 0">
        <div class="ic-img"><img src="../../assets/image/ic@2x.png" alt=""></div>
        <div class="box-flex1">Please note that at this time，the Metis NFT bridge only supports transferring one copy at a time</div>
      </div>
      <div class="ic-box standard" v-show="tokenStandardIndex === 1">
        <div>it will take 7 days for the NFT token to be arrive to Ethereum network</div>
        <div class="display-flex box-center date-box">
          <div class="ic-img"><img src="../../assets/image/ic_date@2x.png" alt=""></div>
          <div class="">Arrive to Ethereum before UTC 11-12-2021</div>
        </div>
      </div>
      <a-button type="primary" :loading="iconLoading" @click="approveFun">
        Approve
      </a-button>
    </div>
    <div class="display-flex">
      <a href="javascript:;" class="history-text">View your history ></a>
    </div>

    <a-modal
      v-model="visible"
      title=""
      class="bridge-model"
      width="400px"
      centered
      :keyboard="false"
      :maskClosable="false"
      :footer="null"
      :closable="false"
    >
      <div class="back-img" @click="visible = false"><img src="../../assets/image/ic_back@2x.png" alt=""></div>
      <div class="title-box">􏰌􏰇􏱧􏰾􏰿􏰍􏱧􏱧􏰊􏰾􏱐􏰇 􏰌􏰇􏱧􏰾􏰿Approve the Transfer</div>
      <div class="chain-box">
        <div>Ethereum Mainnet</div>
        <div class="next-img"><img src="../../assets/image/ic_next@2x.png" alt=""></div>
        <div>Metis Andromeda</div>
      </div>
      <div class="token-info">
        <div class="display-flex box-center-Y">
          <div>Token IDs:</div>
          <div class="box-flex1">-</div>
        </div>
        <div class="display-flex box-center-Y token-stand">
          <div>Token Standards:</div>
          <div class="box-flex1">-</div>
        </div>
      </div>
      <div class="tip-box">It will take up to 8 days for the NFT token to arrive to the
                    Ethereum Network</div>
      <div class="tip-box tip-box1">Estimate to arrive at Ethereum before UTC 11-12-2021</div>
      <div class="confirm-btn no-select" @click="visible = false">Confirm i will wait for 8 days</div>
    </a-modal>
  </div>
</template>

<script>
export { default } from './js/index'
</script>

<style scoped lang="less">
@import "./css/index";
</style>
