let that

export default {
  data () {
    return {
      account: '',
      tableList: [
        {
          nftTokenAddress: '0xd5…864ed0',
          receiverAddress: '0xd5…8286ed0',
          sourceChain: 'Andromeda',
          destinationChain: 'Ethereum',
          tokenId: '113',
          NFTTokenStandard: 'ERC721',
          approvalTime: 'Nov.12,2022 11:55:12 (UTC)',
          arrivalTime: 'Estimated time of arrival is before Nov 20, 2022',
          status: 'Finish'
        },
        {
          nftTokenAddress: '0xd5…864ed0',
          receiverAddress: '0xd5…8286ed0',
          sourceChain: 'Andromeda',
          destinationChain: 'Ethereum',
          tokenId: '113',
          NFTTokenStandard: 'ERC721',
          approvalTime: 'Nov.12,2022 11:55:12 (UTC)',
          arrivalTime: 'Estimated time of arrival is before Nov 20, 2022',
          status: 'Pending'
        },
        {
          nftTokenAddress: '0xd5…864ed0',
          receiverAddress: '0xd5…8286ed0',
          sourceChain: 'Andromeda',
          destinationChain: 'Ethereum',
          tokenId: '113',
          NFTTokenStandard: 'ERC721',
          approvalTime: 'Nov.12,2022 11:55:12 (UTC)',
          arrivalTime: 'Estimated time of arrival is before Nov 20, 2022',
          status: 'Finish'
        },
        {
          nftTokenAddress: '0xd5…864ed0',
          receiverAddress: '0xd5…8286ed0',
          sourceChain: 'Andromeda',
          destinationChain: 'Ethereum',
          tokenId: '113',
          NFTTokenStandard: 'ERC721',
          approvalTime: 'Nov.12,2022 11:55:12 (UTC)',
          arrivalTime: 'Estimated time of arrival is before Nov 20, 2022',
          status: 'Finish'
        },
        {
          nftTokenAddress: '0xd5…864ed0',
          receiverAddress: '0xd5…8286ed0',
          sourceChain: 'Andromeda',
          destinationChain: 'Ethereum',
          tokenId: '113',
          NFTTokenStandard: 'ERC721',
          approvalTime: 'Nov.12,2022 11:55:12 (UTC)',
          arrivalTime: 'Estimated time of arrival is before Nov 20, 2022',
          status: 'Finish'
        },
        {
          nftTokenAddress: '0xd5…864ed0',
          receiverAddress: '0xd5…8286ed0',
          sourceChain: 'Andromeda',
          destinationChain: 'Ethereum',
          tokenId: '113',
          NFTTokenStandard: 'ERC721',
          approvalTime: 'Nov.12,2022 11:55:12 (UTC)',
          arrivalTime: 'Estimated time of arrival is before Nov 20, 2022',
          status: 'Finish'
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
    }
  }
}
