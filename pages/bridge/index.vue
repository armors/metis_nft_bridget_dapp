<template>
  <div class="bridgeView">
    <div v-if="selectCollection" class="bridge-box">
      <div class="choose-collection">
        <div class="title">Choose a Collection</div>
        <div @click="selectCollection=false" class="close">
          <img src="../../assets/image/close.png">
        </div>
        <div class="text">
          <input type="text" @keyup="searchCollectionList" v-model="searchSelectCollection" class="select-box-input" placeholder="Search collection name or paste token address"/>
        </div>
      </div>
      <div v-for="(item, index) in selectCollectionList" :key="index" class="select-node">
        <div @click="selectThisCollection(item)" class="icon">
          <img :src="item.logo">
        </div>
        <div @click="selectThisCollection(item)" class="text">{{item.collection_name}}</div>
        <div class="link">
          <a :href="item.link">{{ item.developer_name }}</a>
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
        <input @click="openCollectionList" class="select-box-nft-input" placeholder="Please choose NFT Collection" readonly v-model.trim="nftTokenAddress"/>
        <img @click="openCollectionList" class="select-box-image" src="../../assets/image/select@2x.png">
      </div>
      <div class="title-text">Token ID</div>
      <div> <a-input placeholder="Please input Token ID" @blur="checkOwnerOf" v-model.trim="tokenId"/></div>
      <div class="title-text">Receiving Address</div>
      <div> <a-input :disabled="agree" placeholder="Please enter the receiving address" v-model.trim="receiverAddress" @blur="tokenIdBlur"/></div>
      <div @click="agreeClick" :class="agree ? 'agree-box agree-box-cur' : 'agree-box'">
        <div class="i"></div>
        <div class="t">I want to send asset to my address</div>
      </div>
      <div class="title-text">NFT Token Standard</div>
      <div class="token-id-list display-flex box-nowrap">
        <div class="token-id-item no-select token-standard-item" @click="selectTokenStandard(v, i)" v-for="(v, i) in tokenStandardList" :key="`token-standard-${i}`" :class="{active: tokenStandardIndex === i}">#{{v.key}}</div>
      </div>
      <div class="display-flex ic-box" v-show="!isNeedHold">
        <div class="ic-img"><img src="../../assets/image/ic@2x.png" alt=""></div>
        <div class="box-flex1">
          Please note that at this time,the Metis NFT bridge only supports transferring one copy at a time.<br />
          it will take 8 days for the NFT token to be arrive to Ethereum network.
        </div>
      </div>
      <div class="ic-box standard" v-show="isNeedHold">
        <div>it will take 8 days for the NFT token to be arrive to {{getChainName(toNet)}} network</div>
        <div class="display-flex box-center date-box">
          <div class="ic-img"><img src="../../assets/image/ic_date@2x.png" alt=""></div>
          <div class="">Arrive to {{getChainName(toNet)}} before UTC {{arrivalDate}}</div>
        </div>
      </div>
      <template v-if="isOwnerOfStatus">
        <a-button type="primary" :loading="iconLoading" v-if="!isApprove" @click="approveDialog">
          Approve
        </a-button>
        <a-button type="primary" :loading="iconLoading" v-else @click="confirmDialog">
          Confirm
        </a-button>
      </template>
      <template v-else>
        <div class="button-none-box">
          <div class="button-none">Approve</div>
        </div>
      </template>
    </div>
    <div class="go-wrap-box display-flex box-center-Y no-select" @click="openNew">
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
      <div class="back-img" @click="visible = false; iconLoading = false"><img src="../../assets/image/ic_back@2x.png" alt=""></div>
      <div class="title-box">{{isApprove ? 'Confirm' : 'Approve'}} the Transfer</div>
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

    <a-modal
      v-model="visibleError"
      title=""
      class="bridge-model"
      width="400px"
      centered
      :keyboard="false"
      :maskClosable="false"
      :footer="null"
      :closable="false"
    >
      <div class="close" @click="visibleError = false; iconLoading = false"><img src="../../assets/image/close.png" alt=""></div>
      <div class="sorry">
        <img src="../../assets/image/ic_sorry@2x.png">
      </div>
      <div class="title-box">Sorry</div>
      <div class="content">{{ visibleErrorText }}</div>
      <a-button type="primary" class="confirm-btn no-select sorry-btn" @click="visibleError = false; iconLoading = false">
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
