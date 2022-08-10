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
        <div> <a-input placeholder="Please Input NFT Token Address" v-model.trim="nftTokenAddress" /></div>
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
          <a-input disabled class="box-flex1" v-model="name" placeholder="Add text" />
        </div>
        <div class="display-flex box-center-Y input-item" v-show="tokenStandardIndex === 0">
          <div class="label">Symbol</div>
          <a-input disabled class="box-flex1" v-model="symbol" placeholder="Add text" />
        </div>
        <div class="display-flex box-center-Y input-item">
          <div class="label">BaseURL</div>
          <a-input disabled class="box-flex1" v-model="baseUrl" placeholder="Add text" />
        </div>
        <div class="box-flex1"></div>
        <a-button type="primary" :loading="iconLoading" @click="confirmWrap">
          Confirm&Wrap NFT
        </a-button>
      </template>
    </div>
    <div>
      <div class="step-title">Developer NFT Bridge event to get $1000 reward!</div>
      <div class="step-all">
        <div class="step-node">
          <div class="image-1"></div>
          <div class="text">Wrap NFT</div>
          <div class="number">1</div>
        </div>
        <div class="step-node">
          <div class="image-2">
          </div>
          <div class="text">Submit a pull reques</div>
          <div class="number">2</div>
        </div>
        <div class="step-node">
          <div class="image-3">
          </div>
          <div class="text">Collection optional</div>
          <div class="number">3</div>
        </div>
        <div class="step-node">
          <div class="image-4">
          </div>
          <div class="text">Let your users <br />participate in the NFT <br />bridge</div>
          <div class="number">4</div>
        </div>
      </div>
      <div class="detail">
        <div class="detail-btn">Details</div>
      </div>
      <div class="new-footer">
        <div class="title">Develpoer Partners</div>
        <div class="image-box">
          <div v-for="(item, index) in 6" :key="index" class="image-item">
            <div class="image-item-inner">
              <div class="image">
                <img src="../../assets/image/logo.png">
              </div>
              <div class="text">OpenSea[{{item}}]</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a-modal
      v-model="visible"
      title=""
      width="600px"
      centered
      :keyboard="true"
      :maskClosable="true"
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
      <div class="title-box sub">Please submit your deployed wrap contract address to github</div>
<!--      <a-button type="primary" :loading="iconLoading" @click="setNftEvent">-->
<!--        SetNFT-->
<!--      </a-button>-->
      <div class="display-flex box-center-Y">
        <a-button type="primary" class="out-btn" :loading="iconLoading" @click="$router.push({path: '/bridge'})">
          Go back
        </a-button>
        <div style="width: 32px"></div>
        <a-button type="primary" :loading="iconLoading" @click="wrapRequest">
          Take me there!
        </a-button>
      </div>

<!--      <div class="confirm-btn no-select" @click="setNftEvent"></div>-->
    </a-modal>
  </div>
</template>

<script>
export { default } from './js/index'
</script>

<style scoped lang="less">
@import "../bridge/css/index";
</style>
<style lang="less">
  .out-btn.ant-btn-primary{
    background-color: transparent !important;
    border: 1px solid #65DBCF !important;
    color: #65DBCF !important;
  }
  .new-footer {
    background: #101726;
    height: 340px;
    width: 900px;
    margin: 0 auto;
    .title {
      height: 140px;
      line-height: 140px;
      text-align: center;
      font-size: 26px;
    }
    .image-box {
      width: 750px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      .image-item {
        width: 250px;
        height: 90px;
        .image-item-inner {
          width: 230px;
          height: 70px;
          margin: 0 auto;
          background: #070911;
          display: flex;
          border-radius: 5px;
          border: 1px solid #21252c;
          flex-wrap: wrap;
          .image {
            width: 70px;
            height: 65px;
            padding-top: 15px;
            img {
              height: 40px;
              width: 40px;
              margin: 0 auto;
            }
          }
          .text {
            width: 150px;
            line-height: 70px;
            color: #FFFFFF;
            font-size: 26px;
          }
        }
      }
    }
  }
  .step-title {
    text-align: center;
    font-size: 26px;
    height: 150px;
    line-height: 150px;
  }
  .detail {
    height: 80px;
    .detail-btn {
      margin: 0 auto;
      width: 200px;
      height: 48px;
      border-radius: 8px;
      border: 1px solid #65DACF;
      font-size: 16px;
      font-family: Helvetica-Bold, Helvetica;
      font-weight: bold;
      color: #080d2a;
      line-height: 48px;
      text-align: center;
    }
  }
  .step-all {
    margin: 0 auto;
    width: 800px;
    display: flex;
    flex-wrap: wrap;
    .step-node {
      width: 200px;
      height: 290px;
      .image-1 {
        width: 200px;
        height: 100px;
        background: url("../../assets/image/img_1@2x.png") no-repeat center center;
        background-size: 15%;
      }
      .image-2 {
        width: 200px;
        height: 100px;
        background: url("../../assets/image/img_2@2x.png") no-repeat center center;
        background-size: 15%;
      }
      .image-3 {
        width: 200px;
        height: 100px;
        background: url("../../assets/image/img_3@2x.png") no-repeat center center;
        background-size: 15%;
      }
      .image-4 {
        width: 200px;
        height: 100px;
        background: url("../../assets/image/img_4@2x.png") no-repeat center center;
        background-size: 15%;
      }
      .text {
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 22px;
        text-align: center;
        height: 80px;
      }
      .number {
        width: 28px;
        height: 28px;
        background: #65DACF;
        color: #000000;
        border-radius: 14px;
        text-align: center;
        line-height: 28px;
        font-size: 20px;
        margin: 0 auto;
      }
    }
  }
</style>
