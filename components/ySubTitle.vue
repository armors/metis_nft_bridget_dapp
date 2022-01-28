<template>
  <div class="title-sub">
    <div class="trade-item-title"><slot></slot></div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: 'ySubTitle'
}
</script>

<style scoped lang="less">
  @import "../assets/css/fun";
  .trade-item-title{
    font-size: 36px;
    font-family: PingFang SC;
    font-weight: 600;
    line-height: 98px;
    color: @emColor;
    opacity: 1;
    width: 100%;
    height: 98px;
    padding: 0 24px;
    text-align: center;
    background: linear-gradient(45deg, rgba(24, 49, 65, 0) 20%, rgba(5, 10, 13, 0) 100%);
  }
  .line{
    width: 100%;
    height: 2px;
    background: linear-gradient(45deg, rgba(24, 49, 65, 0) 0%, #0D1B24 48%, rgba(5, 10, 13, 0) 100%);
    opacity: 0.1;
  }
</style>
