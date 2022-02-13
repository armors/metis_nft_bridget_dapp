let that

export default {
  data () {
    return {
      visible: false,
      account: '',
      tokenIdList: [
        {
          key: 123,
          value: 123
        },
        {
          key: 123,
          value: 123
        },
        {
          key: 123,
          value: 123
        },
        {
          key: 123,
          value: 123
        },
        {
          key: 123,
          value: 123
        },
        {
          key: 123,
          value: 123
        },
        {
          key: 123,
          value: 123
        },
        {
          key: 123,
          value: 123
        }
      ],
      tokenIdIndex: 0,
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
      ]
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
    },
    '$store.state.netWork': function (val) {
      console.log(val)
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
    }
  }
}
