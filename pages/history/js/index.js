import Web3 from 'web3'
import COIN_ABI from '../../../utils/web3/coinABI'

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
    // 是否需要等待8天
    isNeedHold: function () {
      return this.fromNet && (this.fromNet.chainId === '1088' || this.fromNet.chainId === '558')
    }
  },
  watch: {
    // 获取用户信息
    '$store.state.accounts': function (val) {
      this.setAccount(val)
    },
    '$store.state.lang': function (val) {
    },
    // 切换网络
    '$store.state.netWork': function (val) {
      this.initPage()
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
      console.log(this.$store.state.netWork)
      const web3 = new Web3(window.ethereum)
      // let abi
      // if (this.isNeedHold) { // L2->L1
      //   abi = COIN_ABI.bridgeL2
      // } else { // L1->L2
      //   abi = COIN_ABI.bridgeL1
      // }
      const $web3_http = new Web3(new Web3.providers.HttpProvider(this.$store.state.netWork.rpcUrls0[0]))
      const myContractInstance = new $web3_http.eth.Contract(COIN_ABI.bridgeFactory, '0x9D8c817513482F4e3F8E1a5f37f4ceAeDCb67b48', {
        from: this.account
      })
      console.log(myContractInstance)
      myContractInstance.getPastEvents('TokenTargetCreated', {
        filter: {
          from: this.account
        },

        fromBlock: 0,
        toBlock: 'latest'
      }).then((res) => {
        console.log(res)
      })

      // myContractInstance.getPastEvents('create1155Pair', { filter: {}, fromBlock: 0, toBlock: 'latest' }).then((res) => {
      //   console.log(res)
      // })
      // const account = this.account.toLowerCase().split('0x')
      // const account = ['', '0x5d6576ca71d1911310d841a0fbb1018211bb0e54']
      // console.log(account)
      // const lastBlock = await this.$web3_http.eth.getBlock('latest')
      // console.log(lastBlock)
      //
      // const logs = await this.$web3_http.eth.getPastLogs({
      //   // address: '0x5d6576ca71d1911310d841a0fbb1018211bb0e54',
      //   // topics: ['0x920dc5b4bb411b3541670934b7375191b5f86f69020854896e21b9aa4407c2d2']
      // }).then(res => {
      //   console.log(res)
      // })
      // console.log(logs)
    }
  }
}
