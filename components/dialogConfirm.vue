<template>
  <v-dialog v-model="dialogSelf" persistent max-width="600px">
    <v-card>
      <slot></slot>
      <div class="display-flex box-center">
        <div class="confirm-btn no-select close" @click="closeDialog">Close</div>
        <div class="confirm-btn no-select load display-flex box-center" v-show="submitBtnStatus">
          <div class="icon-img"><img src="../assets/image/loading.gif" alt=""></div>
          <div>Loading...</div>
        </div>
        <div class="confirm-btn no-select" v-show="!submitBtnStatus" @click="saveDialog">Submit</div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'dialog1',
  data () {
    return {
      dialogSelf: false
    }
  },
  props: {
    submitBtnStatus: {
      type: Boolean,
      default: function () {
        return false
      }
    },
    isShow: {
      type: Boolean,
      default: function () {
        return false
      }
    }
  },
  watch: {
    isShow: function (newVal, oldVal) {
      console.log(oldVal, newVal)
      this.dialogSelf = newVal
    }
  },
  methods: {
    saveDialog () {
      if (this.submitBtnStatus) {
        return
      }
      this.$emit('saveDialog', 1)
    },
    closeDialog () {
      this.$emit('closeDialog')
    }
  }
}
</script>

<style scoped lang="less">
  @import "../assets/css/main";
  .confirm-btn{
    margin-top: 20px;
    cursor: pointer;
    width: 160px;
    height: 48px;
    background-color: @emColor;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 400;
    line-height: 48px;
    color: @colorFFF;
    text-align: center;
    &.load{
      background-color: rgba(156, 185, 24, 0.5);
    }
    .icon-img{
      width: 24px;
      height: 24px;
      margin-right: 10px;
    }
    &.close{
      margin-right: 20px;
      background-color: @color999;
      color: @color333;
    }
  }
</style>
