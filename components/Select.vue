<template>
  <div class="m-select-wrap">
    <input
      :class="['u-select-input f16', color === 'blue' ? '' : 'white-color']"
      type="text"
      readonly
      @click="openSelect"
      @blur="onBlur"
      v-model="selectName" />
    <div :class="['triangle-down', { 'rotate': rotate }]" @click="openSelect"></div>
    <div :class="['m-options-panel f16', showOptions ? 'show': 'hidden']" :style="`height: ${selectData.length * 52 + 10}px;`">
      <p class="u-option" @mousedown="getValue(item.name, item.value, index)" v-for="(item, index) in selectData" :key="index">
        {{ item.name }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Select',
  props: {
    selectData: {
      type: Array,
      default: () => {
        return []
      }
    },
    selValue: { // 将该prop值作为selV的初始值
      type: [Number, String],
      default: null
    },
    color: {
      type: String,
      default: 'blue'
    }
  },
  computed: {
    selectName () {
      for (const item of this.selectData) {
        if (item.value === this.selectValue) {
          return item.name
        }
      }
      return ''
    }
  },
  data () {
    return {
      selectValue: this.selValue,
      rotate: false,
      showOptions: false
    }
  },
  methods: {
    openSelect () {
      this.showOptions = !this.showOptions
      this.rotate = !this.rotate
    },
    getValue (name, value, index) {
      this.selectValue = value
      this.$emit('getValue', name, value, index)
    },
    onBlur () {
      this.showOptions = false
      this.rotate = false
    }
  }
}
</script>
<style lang="less" scoped>
.m-select-wrap {
  width: 200px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid #65DACF;
  line-height: 40px;
  position: relative;
  .u-select-input {
    color: #65DACF;
    box-shadow: 0px 10px 20px 0px rgba(144, 119, 222, 0.2);
    line-height: 46px;
    padding: 0 15px;
    cursor: pointer;
    width: 198px;
    height: 46px;
    border-radius: 8px;
  }
  .white-color {
    background: #101726;
    color: #65DACF;
  }
  .triangle-down { // 下三角样式
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 10px solid #65DACF;
    position: absolute;
    top: 18px;
    right: 15px;
    transition: transform 0.3s ease-in-out;
  }
  .rotate {
    transform: rotate(180deg);
  }
  .m-options-panel {
    z-index: 999999;
    position: absolute;
    background: #FFFFFF;
    width: 198px;
    border: 1px solid #E3E3E3;
    top: 46px;
    left: 0;
    color: #706F94;
    border-radius: 5px;
    padding: 5px 0;
    .u-option {
      margin: 0;
      padding: 0 15px;
      cursor: pointer;
      height: 52px;
      line-height: 52px;
    }
    .u-option:hover {
      color: #3A79EE;
      background: #EEF1FA;
    }
  }
  .show {
    display: block;
  }
  .hidden {
    display: none;
  }
}
</style>
