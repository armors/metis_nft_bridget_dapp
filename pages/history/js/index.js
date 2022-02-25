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
        that.getLogs()
      }
    },
    async getLogs () {
      // const account = this.account.toLowerCase().split('0x')
      const account = ['', '0x5d6576ca71d1911310d841a0fbb1018211bb0e54']
      console.log(account)
      const lastBlock = await this.$web3_http.eth.getBlock('latest')
      console.log(lastBlock)
      const logs = await this.$web3.eth.getPastLogs({
        topics: [
          '0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d'
        ],
        address: '0x9D8c817513482F4e3F8E1a5f37f4ceAeDCb67b48'
      })
      console.log(logs)
    }
  }
}
