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
    width: 85.7%;
    height: 48px;
    background: @emColor;
    border-radius: 8px;
    margin: 20px auto 0;
    cursor: pointer;

    font-size: 20px;
    font-family: Helvetica-Bold, Helvetica;
    font-weight: bold;
    color: #060816;
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
    border: 2px solid @bdColorddd;
  }
  .select{
    background-color: @bgColor;
    border: 2px solid @emColor;
    color: @emColor;
  }
</style>
