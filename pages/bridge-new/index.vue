<template>
  <div class="bridgeView">
    <div v-if="selectCollection" class="bridge-box">
      <div class="choose-collection">
        <div class="title">Choose a Collection</div>
        <div @click="selectCollection=false" class="close">x</div>
        <div class="text">Search collection name or paste token address</div>
      </div>
      <div @click="selectCollection=false" class="select-node">
        <div class="icon"></div>
        <div class="text">[Ledger] Market Pass - Genesis Edition</div>
        <div class="link">
          Genesis Edition
        </div>
      </div>
      <div class="select-node">
        <div class="icon"></div>
        <div class="text">[Ledger] Market Pass - Genesis Edition</div>
        <div class="link">
          Genesis Edition
        </div>
      </div>
      <div class="select-node">
        <div class="icon"></div>
        <div class="text">[Ledger] Market Pass - Genesis Edition</div>
        <div class="link">
          Genesis Edition
        </div>
      </div>
      <div class="select-node">
        <div class="icon"></div>
        <div class="text">[Ledger] Market Pass - Genesis Edition</div>
        <div class="link">
          Genesis Edition
        </div>
      </div>
      <div class="select-node">
        <div class="icon"></div>
        <div class="text">[Ledger] Market Pass - Genesis Edition</div>
        <div class="link">
          Genesis Edition
        </div>
      </div>
      <div class="select-node">
        <div class="icon"></div>
        <div class="text">[Ledger] Market Pass - Genesis Edition</div>
        <div class="link">
          Genesis Edition
        </div>
      </div>
      <div class="select-node">
        <div class="icon"></div>
        <div class="text">[Ledger] Market Pass - Genesis Edition</div>
        <div class="link">
          Genesis Edition
        </div>
      </div>
    </div>
    <div v-else class="bridge-box">
      <div class="network-box display-flex box-center-Y">
        <div class="box-flex1 from-chain">{{getChainName(fromNet)}}</div>
        <div class="exchange-img" @click="exchangeNet"><img src="../../assets/image/ic_switch@2x.png" alt=""></div>
        <div class="box-flex1 to-chain">{{getChainName(toNet)}}</div>
      </div>
      <div class="title-text">NFT Collection</div>
      <div class="select-box">
        <a-input placeholder="Please choose NFT Collection" aria-readonly="false" v-model.trim="nftTokenAddress" @blur="nftTokenBlur"/>
        <img @click="selectCollection=true" class="select-box-image" src="../../assets/image/select@2x.png">
      </div>
      <div class="title-text">Token ID</div>
      <div> <a-input placeholder="Please input Token ID" v-model.trim="receiverAddress"/></div>
      <div class="title-text">Receiving Address</div>
      <div> <a-input placeholder="Please enter the receiving address" v-model.trim="tokenId" @blur="tokenIdBlur"/></div>
      <div @click="agree=!agree" :class="agree ? 'agree-box agree-box-cur' : 'agree-box'">
        <div class="i"></div>
        <div class="t">I want to send asset to my address</div>
      </div>
      <div class="title-text">NFT Token Standard</div>
      <div class="token-id-list display-flex box-nowrap">
        <div class="token-id-item no-select token-standard-item" @click="selectTokenStandard(v, i)" v-for="(v, i) in tokenStandardList" :key="`token-standard-${i}`" :class="{active: tokenStandardIndex === i}">#{{v.key}}</div>
      </div>
      <div class="tishi-box">
        <div class="i">!</div>
        <div class="t">
          Please note that at this time,the Metis NFT bridge only supports transferring one copy at a time.<br />
          it will take 8 days for the NFT token to be arrive to Ethereum network.
        </div>
      </div>
      <a-button type="primary" :loading="iconLoading" v-if="!isApprove" @click="approveDialog">
        Approve
      </a-button>
      <a-button type="primary" :loading="iconLoading" v-else @click="confirmDialog">
        Confirm
      </a-button>
    </div>
    <div class="go-wrap-box display-flex box-center-Y no-select" @click="$router.push({path: '/wrap'})">
      <div class="img-box-wrap"><img src="../../assets/image/ic_developer@2x.png" alt=""></div>
      <div class="box-flex1">i’m a developer，take me to deploy wrapped NFT</div>
      <div class="icon-right"><img src="../../assets/image/ic_right@2x.png" alt=""></div>
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
      <div class="close" @click="visible = false; iconLoading = false"><img src="../../assets/image/close.png" alt=""></div>
      <div class="sorry">
        <img src="../../assets/image/ic_sorry@2x.png">
      </div>
      <div class="title-box">Sorry</div>
      <div class="content">notification notification notification</div>
      <a-button type="primary" class="confirm-btn no-select sorry-btn" @click="visible = false; iconLoading = false">
        OK
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
