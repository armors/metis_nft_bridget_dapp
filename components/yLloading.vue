<template lang="html">
  <div class="loading-box" v-show="$store.state.isLoading">
    <div class="loading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  data () {
    return {
      is_loading: false
    }
  },
  methods: {
    closeLoading () {
      this.is_loading = false
    },
    openLoading () {
      this.is_loading = true
    }
  }
}
</script>

<style scoped lang="less">
 @import "css/loading.less";
</style>
