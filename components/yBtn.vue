<template>
  <div
    @click="submitAction"
    class="display-flex box-center no-select"
    :class="['submit', color]"
  >
    <slot>{{$lang.submit_btn}}</slot>
  </div>
</template>

<script>
export default {
  name: 'submitBtn',
  props: {
    color: {
      type: String,
      default: ''
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    showAgree: {
      type: Boolean,
      default: true
    },
    operateBtn: {
      type: Boolean,
      default: false
    },
    isPaddingBottom: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    submitAction () {
      this.$emit('submitAction')
    }
  }
}
</script>

<style lang="less">
@import "../assets/css/main";
  .submit {
    width: 100%;
    height: 80px;
    border-radius: 8px;
    background-color: @bdColorddd;
    text-align: center;
    line-height: 80px;
    font-size: 28px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: @color333;
    cursor: pointer;
    .icon-img{
      width: 24px;
      height: 24px;
      margin-left: 24px;
    }
  }
  .primary {
    background: linear-gradient(265deg, #2E3D98 0%, #9F66A9 100%);
    color: @colorFFF;
  }
  .disabled {
    background-color: @disableBtnBg;
    color: @disableBtnColor;
  }
  .choice {
    background-color: @bgColor;
    border: 2px solid $bdColorddd;
  }
  .select{
    background-color: @bgColor;
    border: 2px solid $emColor;
    color: @emColor;
  }
</style>
