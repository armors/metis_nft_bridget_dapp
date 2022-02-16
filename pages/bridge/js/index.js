import { useTokenContract } from '../../../utils/web3/web3Utils'
import COIN_ABI from '../../../utils/web3/coinABI'
import { useContractMethods } from '../../../utils/web3/contractEvent'
import { approveToken } from '../../../utils/web3/approveToken'

let that

export default {
  data () {
    return {
      visible: false,
      account: '',
      nftTokenAddress: '0x6Cb8d3575258f9b729d5D9F8585F4fa71cB32AB5', // 0xd8058efe0198ae9dd7d563e1b4938dcbc86a1f81
      receiverAddress: '',
      tokenId: '1',
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
      ],
      fromNet: null,
      iconLoading: false,
      toNet: null
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
      if (!val || this.stepIndex === 1) {
        return
      }
      this.initNetData(val)
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
      that.initNetData(this.$store.state.netWork)
      that.account = that.$account
      if (that.account) {
        that.receiverAddress = that.account
      }
    },
    exchangeNet () {
      if (this.stepIndex === 1) {
        return
      }
      console.log(that.toNet)
      this.switchNetWork(that.toNet, () => {
        // const toNet = that.toNet
        // that.toNet = that.fromNet
        // that.fromNet = toNet
      })
    },
    initNetData (val) {
      if (val.chainId0 !== '1') {
        this.fromNet = {
          chainId: val.chainId0,
          chainName: val.chainName0,
          chainNameAdd: val.chainNameAdd0,
          nativeCurrency: val.nativeCurrency0,
          rpcUrls: val.rpcUrls0,
          blockExplorerUrls: val.blockExplorerUrls0,
          bridgeFactory: val.bridgeFactory0
        }
      } else {
        this.fromNet = {
          chainId: val.chainId0,
          chainName: val.chainName0,
          bridgeFactory: val.bridgeFactory0
        }
      }
      this.toNet = {
        chainId: val.chainId1,
        chainName: val.chainName1,
        chainNameAdd: val.chainNameAdd1,
        nativeCurrency: val.nativeCurrency1,
        rpcUrls: val.rpcUrls1,
        blockExplorerUrls: val.blockExplorerUrls1,
        bridgeFactory: val.bridgeFactory1
      }
    },
    selectTokenStandard (v, i) {
      // this.tokenStandardIndex = i
    },
    selectTokenId (v, i) {
      this.tokenIdIndex = i
    },
    async nftTokenBlur () {
      this.iconLoading = true
      const that = this
      console.log(this.$web3_http)
      try {
        const tokenContract = useTokenContract(this.nftTokenAddress, COIN_ABI.erc721)
        if (tokenContract?.code && tokenContract.code === 500) {
          this.iconLoading = false
          return that.$message.error(tokenContract.error.message, 3)
        }
        const symbol = await tokenContract.symbol()
        const name = await tokenContract.name()
        const baseUrl = await tokenContract.baseUri()
        console.log(symbol, name, baseUrl)
        this.tokenStandardIndex = 0
      } catch (e) {
        console.log(e.toString())
        if (e.toString().indexOf('-32000') > -1) {
          try {
            const tokenContract = useTokenContract(this.nftTokenAddress, COIN_ABI.erc1155)
            if (tokenContract?.code && tokenContract.code === 500) {
              this.iconLoading = false
              return that.$message.error(tokenContract.error.message, 3)
            }
            const baseUrl = await tokenContract.uri(this.nftTokenAddress)
            console.log(baseUrl)
            this.tokenStandardIndex = 1
          } catch (err) {
            console.log(err)
            that.$message.error(err?.data?.message || err?.message ? err.message : 'wrap nft error', 3)
          }
        } else if (e.toString().indexOf('call revert exception (method')) {
          that.$message.error('contract address and Network mismatch ', 3)
        } else {
          that.$message.error(e?.data?.message || e?.message ? e.message : 'wrap nft error', 3)
        }
      }
      this.iconLoading = false
    },
    async approveFun () {
      const tokenContract = useTokenContract(this.nftTokenAddress, COIN_ABI.erc721)
      const spender = await this.isApprove(this.tokenId, tokenContract)
      if (spender !== process.env.bridgeFactoryL1) {
        console.log(1123123)
        await approveToken(process.env.bridgeFactoryL1, this.tokenId, tokenContract, res => {
          console.log(res)
        }, err => {
          console.log(err)
        })
      }
    }
  }
}
