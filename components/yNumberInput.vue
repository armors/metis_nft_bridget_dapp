<template>
  <div class="display-flex box-center-Y my-number-box">
    <input class="my-number-input box-flex1" :class="{
      'no-border': noBorder,
      'no-right': isMax
    }" :readonly="readonly" @focus="focus" type="text" :placeholder="placeholder" v-model="inputModel">
    <y-btn v-show="isMax" class="primary" @submitAction="maxEvent">MAX</y-btn>
  </div>
</template>
<script>
let that
export default {
  components: {},
  props: {
    isMax: {
      default: false
    },
    noBorder: {
      default: false
    },
    point: {
      default: 0
    },
    is_disabled: {
      default: false
    },
    readonly: {
      default: false
    },
    max: Number,
    min: Number,
    placeholder: String,
    value: {
      default: ''
    }
  },
  computed: {
    inputModel: {
      get: function () {
        // 父组件==>子组件 发消息
        return this.value
      },
      set: function (value) {
        console.log(value)
        if (this.is_disabled) {
          event.target.value = ''
          this.setParentModeVal('')
          return
        }
        event.target.value = value
        // 子组件==>父组件 发消息
        let val
        if (this.point === 0) {
          val = event.target.value.replace(/[^1-9]{0,1}(\d*(?:\.\d{0})?).*$/g, '$1')
        }
        if (this.point === 1) {
          val = event.target.value.replace(/^\D*(\d*(?:\.\d{0,1})?).*$/g, '$1')
        }
        if (this.point === 2) {
          val = event.target.value.replace(/^\D*(\d*(?:\.\d{0,2})?).*$/g, '$1')
        }
        if (this.point === 3) {
          val = event.target.value.replace(/^\D*(\d*(?:\.\d{0,3})?).*$/g, '$1')
        }
        if (this.point === 4) {
          val = event.target.value.replace(/^\D*(\d*(?:\.\d{0,4})?).*$/g, '$1')
        }
        if (this.point === 5) {
          val = event.target.value.replace(/^\D*(\d*(?:\.\d{0,5})?).*$/g, '$1')
        }
        if (this.point === 6) {
          val = event.target.value.replace(/^\D*(\d*(?:\.\d{0,6})?).*$/g, '$1')
        }
        if (this.point === 7) {
          val = event.target.value.replace(/^\D*(\d*(?:\.\d{0,7})?).*$/g, '$1')
        }
        if (this.point === 8) {
          val = event.target.value.replace(/^\D*(\d*(?:\.\d{0,8})?).*$/g, '$1')
        }
        if (this.point === 18) {
          val = event.target.value.replace(/^\D*(\d*(?:\.\d{0,18})?).*$/g, '$1')
        }
        // console.log(this.point, val, event.target.value, this.max)
        event.target.value = parseFloat(val)
        // event.target.value = val.replace(/[^1-9]{0,1}(\d*(?:\.\d{0,2})?).*$/g, '$1')
        // console.log(' 子组件==>父组件 发消息' + val)
        if (val === '') {
          event.target.value = ''
          this.setParentModeVal('')
          return
        }
        if (val === '.') {
          event.target.value = ''
          this.setParentModeVal('')
          return
        }
        console.log(val)
        console.log(this.point)
        const len = val.length
        console.log(len)
        if (this.min && this.min > parseFloat(val)) {
          event.target.value = this.min
          this.setParentModeVal(event.target.value)
          return
        }
        if (this.max === 0) {
          event.target.value = 0
          this.setParentModeVal('')
          return
        }
        if (this.point === 0) {
          if (val.indexOf('0') === 0) {
            event.target.value = ''
            this.setParentModeVal('')
            return
          }
          // 解决首位直接输入 '0开头的数字'问题
          if (len === 2 && val.charAt(0) === 0 && val.charAt(1) !== '.') {
            event.target.value = val.charAt(1)
            this.setParentModeVal(event.target.value)
            return
          }
        }
        // 解决数字键盘可以输入输入多个小数点问题
        // if (Math.abs(this.value) > 0 && val === '' && value === '') {
        //   if (this.keyDownDel) {
        //     event.target.value = ''// 正常删除
        //     // console.log('---正常删除---' + this.value)
        //   } else {
        //     event.target.value = this.value// 多次输入小数点时
        //     // console.log('---多次输入小数点---' + this.value)
        //   }
        //   this.setParentModeVal(event.target.value)
        //   return
        // }
        // 解决开始就输入点问题
        if (this.value === '.' && val === '.' && value === '.') {
          console.log('---22aa---' + this.value)
          event.target.value = ''
          this.setParentModeVal('')
          return
        }
        // 解决保留两位小数问题
        if (val) {
          const pointIndex = val.indexOf('.')
          if (this.point === 0 && len === 2 && val.charAt(pointIndex) === '.') {
            console.log('只能输入整数')
            event.target.value = val.substr(0, pointIndex)
            this.setParentModeVal(event.target.value)
            return
          }
          if (this.point === 0) {
            // console.log('this.point === 0')
            const v = val ? parseInt(val.replace(/[^0-9]/ig, '')) : ''
            if (v && this.max > 0 && v > this.max) {
              event.target.value = this.max
              val = this.max
            } else {
              event.target.value = v
              val = v
            }
            this.setParentModeVal(val)
            return
          } else {
            if (pointIndex > 0 && (len - pointIndex) > (this.point + 1)) {
              console.log('只能输入' + this.point + '位小数')
              event.target.value = val.substr(0, pointIndex + this.point + 1)
              this.setParentModeVal(event.target.value)
              return
            } else {
              console.log('this.max === 0')
              // 解决输入最大值问题
              if (this.max > 0 && parseFloat(val + '') > this.max) {
                console.log('---4---')
                // event.target.value = val.substr(0, len - 1)
                event.target.value = this.max
                val = this.max
              }
              this.setParentModeVal(val)
              return
            }
          }
        }
        if (this.point === 0) {
          const v = val ? parseInt(val.replace(/[^0-9]/ig, '')) : ''
          // console.log(v)
          if (v && this.max > 0 && v > this.max) {
            event.target.value = this.max
            val = this.max
          } else {
            event.target.value = v
            val = v
          }
          this.setParentModeVal(val)
          return
        }
        // 解决输入最大值问题
        if (this.max > 0 && parseFloat(val + '') > this.max) {
          console.log('解决输入最大值问题---4---')
          // event.target.value = val.substr(0, len - 1)
          event.target.value = this.max
          val = this.max
          this.setParentModeVal(val)
          return
        }
        event.target.value = val
        this.setParentModeVal(val)
      }
    }
  },
  data () {
    return {
      keyDownDel: false// 判断键盘输入值
    }
  },
  mounted () {
    // 判断键盘是否是删除动作
    that = this
    if (process.client) {
      window.document.onkeydown = function (event) {
        /* eslint-disable */ //避开代码检测
        let e = event || window.event || arguments.callee.caller.arguments[0]
        if (e.keyCode === 8 || e.keyCode === 46) {
          that.keyDownDel = true
        } else {
          that.keyDownDel = false
        }
      }
    }

  },
  methods: {
    maxEvent () {
      this.$emit('maxEvent')
    },
    setParentModeVal (value) {
      // this.value = value
      this.$emit('input', value)
    },
    focus () {
      this.$emit('focus', event.target.value)
    }
  }
}
</script>

<style lang="less">
  .my-number-box{
    margin-top: 18px;
    .submit{
      height: 72px;
      width: 100px;
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
      font-size: 26px;
    }
  }
</style>

<style scoped lang="less">
  .my-number-box{
    width: 100%;
    margin-top: 18px;
  }
  .my-number-input{
    border: 1px solid #AFAFAF;
    border-radius: 8px;
    user-select: auto;
    outline: none; // 去除默认选中状态边框
    background-color: rgba(0, 0, 0, 0);// 透明背景
    text-align: left;
    font-size: 32px;
    width: 100%;
    height: 72px;
    opacity: 1;
    padding-left: 24px;
    &.no-border{
      border: none;
      margin-top: 0;
    }
    &.no-right{
      border-right: none;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
</style>
