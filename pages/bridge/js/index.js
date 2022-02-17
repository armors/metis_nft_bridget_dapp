import { useTokenContract, useTokenContractWeb3 } from '../../../utils/web3/web3Utils'
import COIN_ABI from '../../../utils/web3/coinABI'
import { useContractMethods, sendTransactionEvent } from '../../../utils/web3/contractEvent'
import { approveToken } from '../../../utils/web3/approveToken'

let that

export default {
  data () {
    return {
      visible: false,
      isShowTop: false,
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
          value: 0
        },
        {
          key: 'ERC1155',
          value: 1
        }
      ],
      fromNet: null,
      iconLoading: false,
      toNet: null,
      isApprove: false
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
    // 初始化页面
    initPage () {
      that = this
      that.initNetData(this.$store.state.netWork)
      that.account = that.$account
      if (that.account) {
        that.receiverAddress = that.account
      }
    },
    // 交换网络
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
    // network信息获取
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
    // 无用
    selectTokenStandard (v, i) {
      // this.tokenStandardIndex = i
    },
    // 无用
    selectTokenId (v, i) {
      this.tokenIdIndex = i
    },
    // nft token address 鼠标移除事件判断是否授权
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
        await this.getApprove()
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
            await this.getApprove()
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
    // 判断是否授权
    async getApprove () {
      if (!this.nftTokenAddress || !this.tokenId) {
        return
      }
      try {
        if (this.tokenStandardIndex === 0) { // 721
          const tokenContract = useTokenContract(this.nftTokenAddress, COIN_ABI.erc721)
          const spender = await tokenContract.getApproved(this.tokenId)
          console.log(spender)
          this.isApprove = spender === process.env.bridgeL1
        } else if (this.tokenStandardIndex === 1) { // 1155
          const tokenContract = useTokenContract(this.nftTokenAddress, COIN_ABI.erc1155)
          const isApprovedForAll = await tokenContract.isApprovedForAll(this.tokenId, tokenContract)
          console.log(isApprovedForAll)
          this.isApprove = isApprovedForAll
        }
      } catch (e) {
        console.log(e)
      }
    },
    // 打开二次确认授权
    async approveDialog () {
      await this.getApprove()
      this.visible = !this.isApprove
    },
    // 授权操作
    approveFun () {
      if (this.tokenStandardIndex === 0) {
        this.approve721()
      } else if (this.tokenStandardIndex === 1) {
        this.approve1155()
      }
    },
    // 721授权
    async approve721 () {
      const tokenContract = useTokenContract(this.nftTokenAddress, COIN_ABI.erc721)
      const spender = await tokenContract.getApproved(this.tokenId)
      if (spender !== process.env.bridgeL1) {
        console.log(1123123)
        await approveToken(process.env.bridgeL1, this.tokenId, tokenContract, res => {
          console.log(res)
          this.getApprove()
        }, err => {
          console.log(err)
          this.$message.error(err?.data ? err.data.message : (err?.message ? err.message : 'approve nft error'), 3)
        })
      }
    },
    // 1155授权
    async approve1155 () {

    },
    // 打开二次确认弹框
    confirmDialog () {
      this.visible = true
    },
    // deposit 操作
    async confirmFun () {
      that.iconLoading = true
      let tokenContract = null
      if (this.isNeedHold) { // L2->L1
        console.log(process.env.bridgeL2)
        tokenContract = useTokenContract(process.env.bridgeL2, COIN_ABI.bridgeL2)
        // tokenContract = useTokenContractWeb3(COIN_ABI.bridgeL2, process.env.bridgeL2)
      } else { // L1->L2
        console.log(process.env.bridgeL1)
        tokenContract = useTokenContract(process.env.bridgeL1, COIN_ABI.bridgeL1)
        // tokenContract = useTokenContractWeb3(COIN_ABI.bridgeL1, process.env.bridgeL1)
      }
      await useContractMethods({
        contract: tokenContract,
        methodName: 'depositTo',
        parameters: [
          this.nftTokenAddress,
          this.receiverAddress,
          parseInt(this.tokenId),
          this.tokenStandardList[this.tokenStandardIndex].value,
          3200000000
        ]
      }, (res) => {
        console.log(res)
        that.iconLoading = false
        that.$message.success('depositTo nft success', 3)
        this.visible = false
      }, (err) => {
        console.log(err)
        that.iconLoading = false
        that.$message.error(err?.data ? err.data.message : (err?.message ? err.message : 'depositTo nft error'), 3)
      })
    }
  }
}
