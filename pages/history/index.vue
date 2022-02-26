<template>
  <div class="historyView">
    <div class="history-box">
      <div class="history-title">Historical Records</div>
      <div class="table-box">
        <div class="table-header table-item display-flex">
          <div class="table-td display-flex box-center nft-token-address">NFT Token Address</div>
          <div class="table-td display-flex box-center">Receiver Address</div>
          <div class="table-td display-flex box-center">Source Chain</div>
          <div class="table-td display-flex box-center">Destination Chain</div>
          <div class="table-td display-flex box-center">Token ID</div>
          <div class="table-td display-flex box-center">NFT Token Standard</div>
          <div class="table-td display-flex box-center approve-time">Approval Time</div>
          <div class="table-td display-flex box-center arrival-time">Arrival Time</div>
          <div class="table-td display-flex box-center">Status</div>
        </div>
        <div class="table-list" :class="{'style-10':tableList.length > 6}">
          <div class="table-item display-flex" v-for="(v, i) in tableList" :key="`table-item-${i}`">
            <div class="table-td display-flex box-center nft-token-address">{{v.nftTokenAddress}}</div>
            <div class="table-td display-flex box-center">{{v.receiverAddress}}</div>
            <div class="table-td display-flex box-center">{{v.sourceChain}}</div>
            <div class="table-td display-flex box-center">{{v.destinationChain}}</div>
            <div class="table-td display-flex box-center">{{v.tokenId}}</div>
            <div class="table-td display-flex box-center">{{v.NFTTokenStandard}}</div>
            <div class="table-td display-flex box-center approve-time">{{v.approvalTime}}</div>
            <div class="table-td display-flex box-center arrival-time">{{v.arrivalTime}}</div>
            <div class="table-td display-flex box-center" :class="{emColor: v.status === 'Pending'}">{{v.status}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export { default } from './js/index'
</script>

<style scoped lang="less">
  @import "../../assets/css/color";
  .historyView{
    padding-top: 30px;
    .history-box{
      width: 1088px;
      height: 660px;
      background: #060816;
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0px 0px 30px rgba(0, 148, 199, 0.49);
      .history-title{
        padding-top: 6px;
        text-align: center;
        font-size: 20px;
        font-family: Helvetica-Bold, Helvetica;
        font-weight: bold;
        color: #FFFFFF;
      }
      .table-box{
        margin-top: 20px;
        .table-item{
          .table-td{
            width: 105px;
            text-align: center;
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            line-height: 17px;
            color: #FFFFFF;
            &.approve-time, &.arrival-time{
              width: 148px;
              padding: 0 12px;
            }
            &.nft-token-address{
              width: 114px;
            }
            &.arrival-time{
              padding: 0 12px;
            }
            &.emColor{
              color: @emColor;
            }
          }
          &.table-header{
            height: 48px;
            .table-td{
              color: rgba(255, 255, 255, 0.5);
            }
          }
        }
        .style-10::-webkit-scrollbar {
          width: 10px;
          background-color: #F5F5F5;
          border-radius: 10px;
        }
        .style-10::-webkit-scrollbar-thumb {
          background-color: #AAA;
          border-radius: 10px;
          background-image: -webkit-linear-gradient(90deg,
          rgba(0, 0, 0, .2) 25%,
          rgba(0, 0, 0, .4) 45%,
          );
        }
        .style-10::-webkit-scrollbar-track {
          -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
          background-color: #F5F5F5;
          border-radius: 10px;
        }
        .table-list{
          height: 440px;
          overflow-y: scroll;
          .table-item{
            height: 72px;
            .table-td{
              border: 1px solid #373944;
              border-bottom: none;
              border-left: none;
              &:first-child{
                border-left: 1px solid #373944;
              }
            }
            &:last-child{
              .table-td{
                border-bottom: 1px solid #373944;
              }
            }
          }
        }
      }
    }
  }

</style>
