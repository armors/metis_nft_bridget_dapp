import {
  useContractByRpc,
  initRpc,
  useTokenContract, useTokenContractWeb3
} from '../../../utils/web3/web3Utils'
import COIN_ABI from '../../../utils/web3/coinABI'
import { sendTransactionEvent, useContractMethods } from '../../../utils/web3/contractEvent'
import { approveToken } from '../../../utils/web3/approveToken'

let that

export default {
  data () {
    return {
      visible: false,
      isShowTop: false,
      account: '',
      // nftTokenAddress: '0x5bd76e2e08322ee76b475cdc0205633424ae6430', // 0xd8058efe0198ae9dd7d563e1b4938dcbc86a1f81
      // nftTokenAddress: '0x107f5e08FD78Ca7Adca006f92e9B1F9FC17FADE7', // 0xd8058efe0198ae9dd7d563e1b4938dcbc86a1f81
      // nftTokenAddress: '0x592593dc780b54ad70A6d24c18C40665a3B2F9E4', // 0xbc56b6f84bcffd3a4e24f806ac8f5f97e38839ec
      // receiverAddress: '0x5d6576ca71D1911310d841a0fBb1018211bb0E54', // 0x5d6576ca71D1911310d841a0fBb1018211bb0E54
      nftTokenAddress: '', // 0xbc56b6f84bcffd3a4e24f806ac8f5f97e38839ec
      receiverAddress: '', // 0x5d6576ca71D1911310d841a0fBb1018211bb0E54
      tokenId: '',
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
      tokenStandardIndex: -1,
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
      isApprove: false,
      arrivalDate: ''
    }
  },
  components: {
  },
  computed: {
    // 是否需要等待8天
    isNeedHold: function () {
      const isWait = this.fromNet && (this.fromNet.chainId === '1088' || this.fromNet.chainId === '588')
      if (isWait) {
        const arrivalDate = new Date(new Date().getTime() + 8 * 24 * 60 * 60 * 1000)
        console.log(arrivalDate)
        const dateArr = arrivalDate.toGMTString().split(' ')
        console.log(dateArr)
        this.arrivalDate = dateArr[1] + ' ' + dateArr[2] + ' ' + dateArr[3]
      }
      return isWait
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
      if (!val) {
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
      console.log('initPage', this.$store.state.netWork)
      that.initNetData(this.$store.state.netWork)
      that.account = that.$account
      if (that.account) {
        // that.receiverAddress = that.account
      }
    },
    // 交换网络
    exchangeNet () {
      console.log(that.toNet)
      if (localStorage.getItem('connectWalletType') === 'MetaMask') {
        this.switchNetWork(that.toNet, () => {})
      } else if (localStorage.getItem('connectWalletType') === 'Polis') {
        const network = this.$store.state.netWorkList.filter(item => item.chainId === that.toNet.chainId + '')
        if (network.length > 0) {
          this.$store.dispatch('updateNetWork', network[0])
          this.initNetData(network[0])
        }
      }
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
          bridgeFactory: val.bridgeFactory0,
          bridge: val.bridge0,
          domainInfo: val.domainInfo0,
          oracleContract: val.oracleContract0,
          oracleAbi: val.oracleAbi0
        }
      } else {
        this.fromNet = {
          chainId: val.chainId0,
          chainName: val.chainName0,
          bridgeFactory: val.bridgeFactory0,
          bridge: val.bridge0,
          domainInfo: val.domainInfo0,
          oracleContract: val.oracleContract0,
          oracleAbi: val.oracleAbi0
        }
      }
      this.toNet = {
        chainId: val.chainId1,
        chainName: val.chainName1,
        chainNameAdd: val.chainNameAdd1,
        nativeCurrency: val.nativeCurrency1,
        rpcUrls: val.rpcUrls1,
        blockExplorerUrls: val.blockExplorerUrls1,
        bridgeFactory: val.bridgeFactory1,
        bridge: val.bridge1,
        domainInfo: val.domainInfo1,
        oracleContract: val.oracleContract1,
        oracleAbi: val.oracleAbi1
      }
    },
    // 无用
    selectTokenStandard (v, i) {
      this.tokenStandardIndex = i
    },
    // 无用
    selectTokenId (v, i) {
      this.tokenIdIndex = i
    },
    // nft token address 鼠标移除事件判断是否授权
    async nftTokenBlur () {
      if (!this.nftTokenAddress) {
        return
      }
      if (localStorage.getItem('connectWalletType') === 'MetaMask') {
        this.nftTokenBlurMetaMask()
      } else if (localStorage.getItem('connectWalletType') === 'Polis') {
        // this.tokenStandardIndex = 1
        // this.getApprovePolis()
        this.polisNextStepNew()
      }
    },
    async polisNextStepNew () {
      this.iconLoading = true
      const that = this
      this.originChainId = this.$store.state.netWork.chainId
      console.log(this.$web3_http)
      try {
        this.tokenStandardIndex = 0
        const tokenContract = useContractByRpc(this.nftTokenAddress, COIN_ABI.erc721, this.fromNet.rpcUrls[0])
        this.symbol = 'm.' + await tokenContract.methods.symbol().call()
        this.name = await tokenContract.methods.name().call()
        try {
          this.baseUrl = await tokenContract.methods.baseUri().call()
        } catch (e) {
          try {
            this.baseUrl = await tokenContract.methods.baseURI().call()
          } catch (e) {
            this.baseUrl = ''
          }
        }
        this.getApprovePolis()
      } catch (e) {
        console.log(e)
        console.log(JSON.stringify(e))
        console.log(e.toString())
        if (e.toString().indexOf('-32000') > -1 || JSON.stringify(e).indexOf('32603') > -1) {
          try {
            const tokenContract = useContractByRpc(this.nftTokenAddress, COIN_ABI.erc1155, this.fromNet.rpcUrls[0])
            const baseUrl = await tokenContract.methods.uri(1).call()
            console.log(baseUrl)
            this.baseUrl = baseUrl
            this.tokenStandardIndex = 1
          } catch (err) {
            this.baseUrl = ''
            this.tokenStandardIndex = -1
            // console.log(err)
            // that.$message.error(err?.data?.message || err?.message ? err.message : 'wrap nft error', 3)
          }
          this.getApprovePolis()
        } else if (e.toString().indexOf('call revert exception (method')) {
          that.$message.error('contract address and Network mismatch ', 3)
        } else {
          that.$message.error(e?.data?.message || e?.message ? e.message : 'get nft info error', 3)
        }
      }
      this.iconLoading = false
    },
    // async nftTokenBlurPolis () {
    //
    // },
    async nftTokenBlurMetaMask () {
      const that = this
      console.log(this.$web3_http)
      try {
        const tokenContract = useTokenContract(this.nftTokenAddress, COIN_ABI.erc721)
        console.log(tokenContract)
        if (tokenContract?.code && tokenContract.code === 500) {
          // this.iconLoading = false
          return that.$message.error(tokenContract.error.message, 3)
        }
        const symbol = await tokenContract.symbol()
        const name = await tokenContract.name()
        let baseUrl = ''
        try {
          baseUrl = await tokenContract.baseUri()
        } catch (e) {
        }
        console.log(symbol, name, baseUrl)
        this.tokenStandardIndex = 0
        await this.getApprove()
      } catch (e) {
        console.log(e.toString())
        if (e.toString().indexOf('-32000') > -1 || JSON.stringify(e).indexOf('32603') > -1) {
          try {
            const tokenContract = useTokenContract(this.nftTokenAddress, COIN_ABI.erc1155)
            if (tokenContract?.code && tokenContract.code === 500) {
              // this.iconLoading = false
              return that.$message.error(tokenContract.error.message, 3)
            }
            const baseUrl = await tokenContract.uri(this.nftTokenAddress)
            console.log(baseUrl)
            this.tokenStandardIndex = 1
            await this.getApprove()
          } catch (err) {
            // console.log(err)
            // that.$message.error(err?.data?.message || err?.message ? err.message : 'get nft info error', 3)
          }
        } else if (e.toString().indexOf('call revert exception (method')) {
          that.$message.error('contract address and Network mismatch ', 3)
        } else {
          that.$message.error(e?.data?.message || e?.message ? e.message : 'wrap nft error', 3)
        }
      }
    },
    tokenIdBlur () {
      if (localStorage.getItem('connectWalletType') === 'MetaMask') {
        this.getApprove()
      } else if (localStorage.getItem('connectWalletType') === 'Polis') {
        // this.tokenStandardIndex = 1
        this.getApprovePolis()
      }
    },
    getApprovePolis (isShow = false) {
      console.log(this.$store.state.netWork)
      console.log(this.nftTokenAddress, this.tokenId)
      if (!this.nftTokenAddress || !this.tokenId || !this.receiverAddress) {
        return
      }
      console.log(this.nftTokenAddress.toLocaleLowerCase(),
        parseInt(this.$store.state.netWork.chainId),
        'getApproved',
        [this.tokenId])
      try {
        if (this.tokenStandardIndex === 0) { // 721
          this.$httpClient.sendTxAsync(
            this.nftTokenAddress.toLocaleLowerCase(),
            parseInt(this.$store.state.netWork.chainId),
            'getApproved',
            [this.tokenId],
            false
          ).then(res => {
            console.log(res)
            this.isApprove = res.result === this.fromNet.bridge
            that.iconLoading = false
            if (isShow) this.visible = !this.isApprove
          }, reject => {
            this.$message.error(reject.message.message, 8)
            that.iconLoading = false
          }).catch(err => {
            console.log(err)
            that.iconLoading = false
            this.$message.error(err.message.message, 8)
          })
        } else if (this.tokenStandardIndex === 1) { // 1155
          this.$httpClient.sendTxAsync(
            this.nftTokenAddress.toLocaleLowerCase(),
            parseInt(this.$store.state.netWork.chainId),
            'isApprovedForAll',
            [
              this.receiverAddress,
              this.fromNet.bridge
            ],
            false
          ).then(res => {
            console.log(res)
            this.isApprove = res.result
            that.iconLoading = false
            if (isShow) this.visible = !this.isApprove
          }, reject => {
            this.$message.error(reject.message.message, 8)
            that.iconLoading = false
          }).catch(err => {
            console.log(err)
            that.iconLoading = false
            this.$message.error(err.message.message, 8)
          })
        }
      } catch (err) {
        if (isShow) this.iconLoading = false
        this.$message.error(err?.data ? err.data.message : (err?.message ? err.message : 'approve nft error'), 8)
      }
    },
    // 判断是否授权
    async getApprove (isShow = false) {
      console.log(isShow)
      if (!this.nftTokenAddress || !this.tokenId) {
        return
      }
      if (isShow) this.iconLoading = true
      try {
        if (this.tokenStandardIndex === 0) { // 721
          const tokenContract = useTokenContract(this.nftTokenAddress, COIN_ABI.erc721)
          const spender = await tokenContract.getApproved(this.tokenId)
          console.log(spender)
          this.isApprove = spender === this.fromNet.bridge
        } else if (this.tokenStandardIndex === 1) { // 1155
          const tokenContract = useTokenContract(this.nftTokenAddress, COIN_ABI.erc1155)
          const isApprovedForAll = await tokenContract.isApprovedForAll(this.receiverAddress, this.fromNet.bridge)
          console.log(isApprovedForAll)
          this.isApprove = isApprovedForAll
        }
        if (isShow) this.visible = !this.isApprove
        if (isShow) this.iconLoading = false
      } catch (err) {
        if (isShow) this.iconLoading = false
        this.$message.error(err?.data ? err.data.message : (err?.message ? err.message : 'approve nft error'), 8)
      }
    },
    // 打开二次确认授权
    async approveDialog () {
      if (localStorage.getItem('connectWalletType') === 'MetaMask') {
        await this.getApprove(true)
      } else if (localStorage.getItem('connectWalletType') === 'Polis') {
        this.getApprovePolis(true)
      }
    },
    // 授权操作
    approveFun () {
      if (localStorage.getItem('connectWalletType') === 'MetaMask') {
        if (this.tokenStandardIndex === 0) {
          this.approve721()
        } else if (this.tokenStandardIndex === 1) {
          this.approve1155()
        }
      } else if (localStorage.getItem('connectWalletType') === 'Polis') {
        that.iconLoading = true
        const domain = this.nftTokenAddress.toLocaleLowerCase()
        let methods = ''
        let args = []
        if (this.tokenStandardIndex === 0) {
          methods = 'approve'
          args = [this.fromNet.bridge, this.tokenId]
        } else if (this.tokenStandardIndex === 1) {
          methods = 'setApprovalForAll'
          args = [this.fromNet.bridge, true]
        }
        this.approvePolis(domain, methods, args)
      }
    },
    approvePolis (domain, methods, args) {
      console.log(domain, methods, args, that.account)
      this.$httpClient.sendTxAsync(
        domain,
        parseInt(this.$store.state.netWork.chainId),
        methods,
        args,
        false,
        null
      ).then(res => {
        console.log(res)
        that.iconLoading = false
        this.getApprovePolis()
      }, reject => {
        console.log(reject)
        this.$message.error(reject.message.message, 8)
        that.iconLoading = false
      }).catch(err => {
        console.log(err)
        that.iconLoading = false
        this.$message.error(err.message.message, 8)
      })
    },
    // 721授权
    async approve721 () {
      const tokenContract = useTokenContract(this.nftTokenAddress, COIN_ABI.erc721)
      const spender = await tokenContract.getApproved(this.tokenId)
      if (spender !== this.fromNet.bridge) {
        that.iconLoading = true
        console.log(this.fromNet)
        await approveToken(this.fromNet.bridge, this.tokenId, tokenContract, res => {
          console.log(res)
          that.iconLoading = false
          this.getApprove()
        }, err => {
          console.log(err)
          that.iconLoading = false
          this.$message.error(err?.data ? err.data.message : (err?.message ? err.message : 'approve nft error'), 8)
        })
      }
    },
    // 1155授权
    async approve1155 () {
      const tokenContract = useTokenContract(this.nftTokenAddress, COIN_ABI.erc1155)
      const isApprovedForAll = await tokenContract.isApprovedForAll(this.receiverAddress, this.fromNet.bridge)
      if (!isApprovedForAll) {
        that.iconLoading = true
        await useContractMethods({
          contract: tokenContract,
          methodName: 'setApprovalForAll',
          parameters: [
            this.fromNet.bridge,
            true
          ]
        }, (res) => {
          that.iconLoading = false
          this.getApprove()
        }, (err) => {
          console.log(err)
          that.iconLoading = false
          this.$message.error(err?.data ? err.data.message : (err?.message ? err.message : 'approve nft error'), 8)
        })
      }
    },
    // 打开二次确认弹框
    confirmDialog () {
      this.visible = true
    },
    // deposit 操作
    async confirmFun () {
      that.iconLoading = true
      if (localStorage.getItem('connectWalletType') === 'MetaMask') {
        this.confirmMetaMask()
      } else if (localStorage.getItem('connectWalletType') === 'Polis') {
        this.confirmPolis()
      }
    },
    async confirmMetaMask () {
      const tokenContract = useTokenContractWeb3(COIN_ABI.bridgeL1, this.fromNet.bridge)
      const oracleContract = useContractByRpc(that.fromNet.oracleContract, COIN_ABI[that.fromNet.oracleAbi], that.fromNet.rpcUrls[0])
      console.log(that.fromNet.oracleAbi)
      const methods = that.fromNet.oracleAbi === 'iMVM_DiscountOracle' ? 'getMinL2Gas' : 'minErc20BridgeCost'
      let gasCost = 0
      let gasLimit = 0
      let getDiscount = 0
      let value = 0
      try {
        gasCost = await oracleContract.methods[methods]().call()
        gasLimit = parseInt(gasCost.toString())
        console.log(methods, gasLimit)
        if (!this.isNeedHold) { // L1 到 L2
          getDiscount = await oracleContract.methods.getDiscount().call()
          console.log(getDiscount.toString())
          console.log(gasLimit * getDiscount.toString())
          value = gasLimit * getDiscount.toString()
        } else {
          console.log(that.toNet)
          const $web3_http = initRpc(that.toNet.rpcUrls[0])
          const block = await $web3_http.eth.getBlock('latest')
          console.log(block)
          gasLimit = block.gasLimit
          value = parseInt(gasCost.toString())
        }
        console.log(gasLimit, value)
        console.log(this.nftTokenAddress,
          this.receiverAddress,
          parseInt(this.tokenId),
          this.tokenStandardList[this.tokenStandardIndex].value,
          gasLimit
        )
        sendTransactionEvent(tokenContract.methods.depositTo(
          this.nftTokenAddress,
          this.receiverAddress,
          parseInt(this.tokenId),
          this.tokenStandardList[this.tokenStandardIndex].value,
          gasLimit
        ).send({
          from: that.account,
          // value: 320000000
          value: value
        }), {
          summary: `deposit ${that.receiverAddress}`
        }, (res) => {
          console.log(res)
          that.iconLoading = false
          that.$message.success('depositTo nft success', 3)
          this.visible = false
        }, err => {
          console.log(err)
          that.iconLoading = false
          that.$message.error(err?.data ? err.data.message : (err?.message ? err.message : 'depositTo nft error'), 3)
        })
      } catch (err) {
        that.iconLoading = false
        that.$message.error(err?.data ? err.data.message : (err?.message ? err.message : 'depositTo nft error'), 3)
      }
    },
    async confirmPolis () {
      // const methods = that.fromNet.domainInfo.oracleAbi === 'imvm_discountoracle' ? 'getMinL2Gas' : 'minErc20BridgeCost'
      try {
        // const gasLimitBig = await this.$httpClient.sendTxAsync(
        //   this.fromNet.domainInfo.oracleAbi,
        //   parseInt(this.$store.state.netWork.chainId),
        //   methods,
        //   [],
        //   false
        // )
        // console.log(gasLimitBig)
        // const gasLimit = parseInt(gasLimitBig.result.toString())

        const oracleContract = useContractByRpc(that.fromNet.oracleContract, COIN_ABI[that.fromNet.oracleAbi], that.fromNet.rpcUrls[0])
        console.log(that.fromNet.oracleAbi)
        const methods = that.fromNet.oracleAbi === 'iMVM_DiscountOracle' ? 'getMinL2Gas' : 'minErc20BridgeCost'
        let gasCost = 0
        let gasLimit = 0
        let getDiscount = 0
        let value = 0
        gasCost = await oracleContract.methods[methods]().call()
        gasLimit = parseInt(gasCost.toString())
        console.log(methods, gasLimit)
        if (!this.isNeedHold) { // L1 到 L2
          getDiscount = await oracleContract.methods.getDiscount().call()
          console.log(getDiscount.toString())
          console.log(gasLimit * getDiscount.toString())
          value = gasLimit * getDiscount.toString()
        } else {
          console.log(that.toNet)
          const $web3_http = initRpc(that.toNet.rpcUrls[0])
          const block = await $web3_http.eth.getBlock('latest')
          console.log(block)
          gasLimit = block.gasLimit
          value = parseInt(gasCost.toString())
        }
        this.$httpClient.sendTxAsync(
          this.fromNet.domainInfo.bridgeDomain,
          parseInt(this.$store.state.netWork.chainId),
          'depositTo',
          [
            this.nftTokenAddress,
            this.receiverAddress,
            parseInt(this.tokenId),
            this.tokenStandardList[this.tokenStandardIndex].value,
            gasLimit
          ],
          false,
          {
            from: that.account,
            value: value
          }
        ).then(res => {
          console.log(res)
          that.iconLoading = false
          that.$message.success('depositTo nft success', 3)
          this.visible = false
        }, reject => {
          this.$message.error(reject.message.message, 8)
          that.iconLoading = false
        }).catch(err => {
          console.log(err)
          that.iconLoading = false
          this.$message.error(err.message.message, 8)
        })
      } catch (e) {

      }
    }
  }
}
