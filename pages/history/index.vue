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
        <div class="table-list">
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
        .table-list{
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
