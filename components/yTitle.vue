<template>
  <div class="title-box">
    <div><slot></slot></div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: 'y-title'
}
</script>

<style scoped lang="less">
  .title-box{
    text-align: center;
    font-size: 36px;
    margin-top: 72px;
    .line{
      margin-top: 21px;
      width: 100%;
      height: 3px;
      background: linear-gradient(211deg, rgba(159, 102, 169, 0) 0%, #2E3D98 48%, rgba(159, 102, 169, 0) 100%);
      opacity: 1;
    }
  }
</style>
