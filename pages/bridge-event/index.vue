<template>
  <div class="bridgeView">
    <div>
      <div class="step-title">Developer NFT Bridge event to get $1000 reward!</div>
      <div class="select-box">
        <Select
          :selectData="selectData"
          :selValue="selValue"
          color="white"
          @getValue="getValue">
        </Select>
      </div>
      <div class="time-box">(Jul-24-2022 03:00:00 PM +UTC ~ Jul-30-2022 03:00:00 PM +UTC)</div>
      <div class="padding-box padding-p0">
        <div class="step-node">
          <div class="image-1">
            <div class="image-cur"></div>
          </div>
          <div class="text">Prepating</div>
        </div>
        <div class="step-node">
          <div class="image-2">
          </div>
          <div class="text">Start</div>
        </div>
        <div class="step-node">
          <div class="image-3">
          </div>
          <div class="text">End</div>
        </div>
        <div class="step-node">
          <div class="image-4">
          </div>
          <div class="text">Distribution</div>
        </div>
      </div>
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
      <div class="time-box">Top 5 developers with the addresses translation confirmed in the NFT bridge win prize.</div>
      <div class="detail">
        <div class="detail-btn">Total Token prozes</div>
      </div>
      <div class="price-box">
        <div class="p1">$999,999</div>
        <div class="p2">$22,999,999</div>
        <div class="p3">$999,999</div>
        <div class="p4">#4</div>
        <div class="p6">$22,999,999</div>
        <div class="p5">#5</div>
        <div class="p7">$999,999</div>
      </div>
      <div class="nft-info">
        <div class="nft-info-inner">
          <div class="nft-node">
            <div class="t">Your Estimated Ranking</div>
            <div class="n">#21</div>
          </div>
          <div class="nft-node">
            <div class="t">NFT Bridge Confirmed Addresses</div>
            <div class="n">5</div>
          </div>
          <div class="nft-node">
            <div class="t">NFT Bridge Confirmed Addresses</div>
            <div class="n">6</div>
            <div class="d">
              Latest Updated: <br />
              Jul-30-2022 03:00:00 AM+UTC
            </div>
          </div>
        </div>
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
      <div class="step-title">FQA</div>
      <div v-for="(item, index) in qaList" :key="index" @click="showOpen(item)" :class="item.open ? 'qa up' : 'qa'">
        <div class="qa-t">{{item.title}}</div>
        <div class="qa-d">{{item.content}}</div>
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
  .qa {
    margin: 0 auto;
    margin-bottom: 30px;
    width: 900px;
    background: #0D182A;
    border-radius: 8px;
    overflow: hidden;
    height: 80px;
    .qa-t {
      cursor: pointer;
      background: url("../../assets/image/ic_down@2x.png") no-repeat 850px 35px;
      background-size: 2%;
      font-size: 16px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 22px;
      border-bottom: 1px #1f2d44 solid;
      padding: 30px;
    }
    .qa-d {
      font-size: 16px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 22px;
      padding: 30px;
    }
  }
  .up {
    height: auto;
    .qa-t {
      background: url("../../assets/image/ic_up@2x.png") no-repeat 850px 35px;
      background-size: 2%;
    }
  }
  .nft-info {
    padding-top: 20px;
    padding-bottom: 50px;
    .nft-info-inner {
      margin: 0 auto;
      width: 900px;
      height: 220px;
      background: #0D182A;
      border-radius: 16px;
      display: flex;
      flex-wrap: wrap;
      .nft-node {
        width: 300px;
        height: 220px;
        .t {
          text-align: center;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #FFFFFF;
          line-height: 20px;
          padding-top: 51px;
        }
        .n {
          text-align: center;
          font-size: 32px;
          font-family: Helvetica-Bold, Helvetica;
          font-weight: bold;
          color: #65DACF;
          line-height: 38px;
          padding-top: 20px;
        }
        .d {
          text-align: center;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #cecaca;
          line-height: 20px;
          padding-top: 20px;
        }
      }
    }
  }
  .price-box {
    margin: 0 auto;
    height: 428px;
    width: 957px;
    background: url("../../assets/image/price-bg.png") no-repeat;
    position: relative;
    .p1 {
      position: absolute;
      text-align: center;
      width: 180px;
      height: 38px;
      font-size: 32px;
      font-family: Helvetica-Bold, Helvetica;
      font-weight: bold;
      color: #65DACF;
      line-height: 38px;
      top: 130px;
      left: 182px;
    }
    .p2 {
      position: absolute;
      text-align: center;
      width: 180px;
      height: 38px;
      font-size: 32px;
      font-family: Helvetica-Bold, Helvetica;
      font-weight: bold;
      color: #65DACF;
      line-height: 38px;
      top: 130px;
      left: 390px;
    }
    .p3 {
      position: absolute;
      text-align: center;
      width: 180px;
      height: 38px;
      font-size: 32px;
      font-family: Helvetica-Bold, Helvetica;
      font-weight: bold;
      color: #65DACF;
      line-height: 38px;
      top: 130px;
      left: 595px;
    }
    .p4 {
      position: absolute;
      text-align: center;
      width: 296px;
      height: 34px;
      font-size: 28px;
      font-family: Helvetica-Bold, Helvetica;
      font-weight: bold;
      color: #FFFFFF;
      line-height: 34px;
      text-align: center;
      top: 260px;
      left: 185px;
    }
    .p5 {
      position: absolute;
      text-align: center;
      width: 296px;
      height: 34px;
      font-size: 28px;
      font-family: Helvetica-Bold, Helvetica;
      font-weight: bold;
      color: #FFFFFF;
      line-height: 34px;
      text-align: center;
      top: 260px;
      left: 480px;
    }
    .p6 {
      position: absolute;
      text-align: center;
      width: 296px;
      height: 38px;
      font-size: 32px;
      font-family: Helvetica-Bold, Helvetica;
      font-weight: bold;
      color: #65DACF;
      line-height: 38px;
      text-align: center;
      top: 310px;
      left: 185px;
    }
    .p7 {
      position: absolute;
      text-align: center;
      width: 296px;
      height: 38px;
      font-size: 32px;
      font-family: Helvetica-Bold, Helvetica;
      font-weight: bold;
      color: #65DACF;
      line-height: 38px;
      text-align: center;
      top: 310px;
      left: 480px;
    }
  }
  .out-btn.ant-btn-primary{
    background-color: transparent !important;
    border: 1px solid #65DBCF !important;
    color: #65DBCF !important;
  }
  .padding-p0 {
    background: #060A18 url("../../assets/image/p/p0.png") no-repeat center 80px;
  }
  .padding-p1 {
    background: #060A18 url("../../assets/image/p/p2.png") no-repeat center 80px;
  }
  .padding-p2 {
    background: #060A18 url("../../assets/image/p/p4.png") no-repeat center 80px;
  }
  .padding-p3 {
    background: #060A18 url("../../assets/image/p/p6.png") no-repeat center 80px;
  }
  .padding-box {
    width: 880px;
    height: 180px;
    border-radius: 8px;
    margin: 0 auto;
    display: flex;
    box-shadow: 0px 5px 25px #03475e;
    .step-node {
      width: 220px;
      height: 180px;
      position: relative;
      .image-1 {
        width: 220px;
        height: 160px;
        background: url("../../assets/image/evet_img_1@2x.png") no-repeat center center;
        background-size: 30%;
      }
      .image-2 {
        width: 220px;
        height: 160px;
        background: url("../../assets/image/evet_img_2@2x.png") no-repeat center center;
        background-size: 30%;
      }
      .image-3 {
        width: 220px;
        height: 160px;
        background: url("../../assets/image/evet_img_3@2x.png") no-repeat center center;
        background-size: 30%;
      }
      .image-4 {
        width: 220px;
        height: 160px;
        background: url("../../assets/image/evet_img_4@2x.png") no-repeat center center;
        background-size: 30%;
      }
      .image-cur {
        width: 220px;
        height: 160px;
        background: url("../../assets/image/evet_img_cur@2x.png") no-repeat center center;
        background-size: 50%;
      }
      .text {
        width: 220px;
        text-align: center;
        left: 0;
        bottom: 20px;
        position: absolute;
      }
    }
  }
  .time-box {
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    text-align: center;
    height: 80px;
    line-height: 80px;
  }
  .select-box {
    width: 200px;
    margin: 0 auto;
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
          background: #050511;
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
    height: 130px;
    line-height: 130px;
  }
  .detail {
    height: 100px;
    .detail-btn {
      margin: 0 auto;
      margin-top: 15px;
      width: 240px;
      height: 48px;
      background: #65DACF;
      border-radius: 8px;
      font-size: 20px;
      font-family: Helvetica-Bold, Helvetica;
      font-weight: bold;
      color: #060816;
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
