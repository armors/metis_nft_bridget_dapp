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
      <div> <a-input placeholder="Add text" v-model="tokenId" @blur="tokenIdBlur"/></div>
      <!--      <div class="token-id-list display-flex box-nowrap">-->
<!--        <div class="token-id-item no-select" @click="selectTokenId(v, i)" v-for="(v, i) in tokenIdList" :key="`token-id-${i}`" :class="{active: tokenIdIndex === i}">#{{v.key}}</div>-->
<!--      </div>-->
      <div class="title-text">NFT Token Standard</div>
      <div class="token-id-list display-flex box-nowrap">
        <div class="token-id-item no-select token-standard-item" @click="selectTokenStandard(v, i)" v-for="(v, i) in tokenStandardList" :key="`token-standard-${i}`" :class="{active: tokenStandardIndex === i}">#{{v.key}}</div>
      </div>
      <div class="display-flex ic-box" v-show="!isNeedHold">
        <div class="ic-img"><img src="../../assets/image/ic@2x.png" alt=""></div>
        <div class="box-flex1">Please note that at this time，the Metis NFT bridge only supports transferring one copy at a time</div>
      </div>
      <div class="ic-box standard" v-show="isNeedHold">
        <div>it will take 7 days for the NFT token to be arrive to {{getChainName(toNet)}} network</div>
        <div class="display-flex box-center date-box">
          <div class="ic-img"><img src="../../assets/image/ic_date@2x.png" alt=""></div>
          <div class="">Arrive to {{getChainName(toNet)}} before UTC {{arrivalDate}}</div>
        </div>
      </div>
      <a-button type="primary" :loading="iconLoading" v-if="!isApprove" @click="approveDialog">
        Approve
      </a-button>
      <a-button type="primary" :loading="iconLoading" v-else @click="confirmDialog">
        Confirm
      </a-button>
    </div>
    <div class="display-flex">
      <a href="javascript:;" @click="$router.push({path: '/history'})" class="history-text">View history ></a>
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
      <div class="back-img" @click="visible = false; iconLoading = false"><img src="../../assets/image/ic_back@2x.png" alt=""></div>
      <div class="title-box">􏰌􏰇􏱧􏰾􏰿􏰍􏱧􏱧􏰊􏰾􏱐􏰇 􏰌􏰇􏱧􏰾􏰿{{isApprove ? 'Confirm' : 'Approve'}} the Transfer</div>
      <div class="chain-box">
        <div>{{getChainName(fromNet)}}</div>
        <div class="next-img"><img src="../../assets/image/ic_next@2x.png" alt=""></div>
        <div>{{getChainName(toNet)}}</div>
      </div>
      <div class="token-info">
        <div class="display-flex box-center-Y">
          <div>Token IDs:</div>
          <div class="box-flex1">{{tokenId}}</div>
        </div>
        <div class="display-flex box-center-Y token-stand">
          <div>Token Standards:</div>
          <div class="box-flex1">{{tokenStandardIndex > -1 ? tokenStandardList[tokenStandardIndex].key : '--'}}</div>
        </div>
      </div>
      <div class="tip-box" :class="{'hidden': !isNeedHold}">It will take up to 8 days for the NFT token to arrive to the
                                                            {{getChainName(toNet)}} Network</div>
      <div class="tip-box tip-box1" :class="{'hidden': !isNeedHold}">Estimate to arrive at {{getChainName(toNet)}} before UTC {{arrivalDate}}</div>
      <a-button type="primary" class="confirm-btn no-select" :loading="iconLoading" v-if="isApprove" @click="confirmFun">
        {{isNeedHold ? 'Confirm i will wait for 8 days' : 'Confirm'}}
      </a-button>
      <a-button type="primary" class="confirm-btn no-select" :loading="iconLoading" v-else @click="approveFun">
        Approve
      </a-button>
    </a-modal>
  </div>
</template>

<script>
export { default } from './js/index'
</script>

<style scoped lang="less">
@import "./css/index";
</style>
