let that

export default {
  data () {
    return {
      account: '',
      nftTokenAddress: '',
      tokenStandardIndex: 0,
      tokenStandardList: [
        {
          key: 'ERC721',
          value: 'ERC721'
        },
        {
          key: 'ERC1155',
          value: 'ERC1155'
        }
      ],
      step: ['Step 1 ：Enter Token Address', 'Step 2：Review'],
      stepIndex: 0,
      visible: false
    }
  },
  components: {
  },
  computed: {
  },
  watch: {
    // 获取用户信息
    '$store.state.accounts': function (val) {
      this.setAccount(val)
    },
    '$store.state.lang': function (val) {
    }
  },
  created () {
  },
  mounted () {
    this.initPage()
  },
  methods: {
    // 钱包地址获取到之后加载页面数据
    setAccount () {
      this.initPage()
    },
    initPage () {
      that = this
      that.account = that.$account
      if (that.account) {
      }
    },
    selectTokenStandard (v, i) {
      this.tokenStandardIndex = i
    },
    selectTokenId (v, i) {
      this.tokenIdIndex = i
    },
    nextStep () {
      this.stepIndex = 1
    },
    onCopyError () {
      console.log('copy error')
    },
    onCopy () {
      alert('复制成功')
    }
  }
}
