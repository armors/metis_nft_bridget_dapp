import { useContractByRpc, useTokenContract, useTokenContractWeb3 } from '../../../utils/web3/web3Utils'
import COIN_ABI from '../../../utils/web3/coinABI'
import { sendTransactionEvent, useContractMethods } from '../../../utils/web3/contractEvent'

let that
export default {
  data () {
    return {
      iconLoading: false,
      account: '',
      // nftTokenAddress: '0x5bd76e2e08322ee76b475cdc0205633424ae6430', // 0x5efefb1b9e59c6fe3f0ad1f35de5e5c7538eddcc
      // nftTokenAddress: '0x107f5e08FD78Ca7Adca006f92e9B1F9FC17FADE7', // 0x193f243bd27c84cac320896691e18ea0c1d4fa2d
      // nftTokenAddress: '0x592593dc780b54ad70A6d24c18C40665a3B2F9E4', // 0xbc56b6f84bcffd3a4e24f806ac8f5f97e38839ec
      nftTokenAddress: '', // 0xbc56b6f84bcffd3a4e24f806ac8f5f97e38839ec
      // nftTokenAddress: '0xF40Bdc6719b9C3A2c123Da86f6f0494051C8b732', // 0xbc56b6f84bcffd3a4e24f806ac8f5f97e38839ec
      tokenStandardIndex: -1,
      // tokenTag: '0x5efefb1b9e59c6fe3f0ad1f35de5e5c7538eddcc',
      // tokenTag: '0x3faec2ae9e76149343ca5fa3ef42480195a00fb6',
      tokenTag: '',
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
      visible: false,
      fromNet: null,
      toNet: null,
      name: '',
      symbol: '',
      baseUrl: '',
      originChainId: ''
    }
  },
  components: {},
  computed: {
    // 是否需要等待8天
    isNeedHold: function () {
      return this.fromNet && (this.fromNet.chainId === '1088' || this.fromNet.chainId === '588')
    }
  },
  watch: {
    // 获取用户信息
    '$store.state.accounts': function (val) {
      this.setAccount(val)
    },
    '$store.state.lang': function (val) {
    },
    // 监听网络变化
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
    // 返回第一步清空数据
    changeStep (v, i) {
      if (i === 0 && this.stepIndex === 1) {
        this.stepIndex = 0
        this.name = ''
        this.symbol = ''
        this.baseUrl = ''
      }
    },
    // 调用过setNFT方法建立关系
    setNftEvent () {
      if (localStorage.getItem('connectWalletType') === 'MetaMask') {
        this.setNftMetaMask()
      } else if (localStorage.getItem('connectWalletType') === 'Polis') {
        this.serNftPolis()
      }
    },
    wrapRequest () {
      window.open('https://github.com/MetisProtocol/nftbridge/issues/new?assignees=&labels=&template=wrap-request.md&title=Wrap+NFT+request')
    },
    setNftMetaMask () {
      console.log(this.isNeedHold)
      console.log(that.toNet)
      console.log(that.fromNet)
      if (!this.isNeedHold) {
        this.switchNetWork(that.fromNet, () => {
          this.setNftMetaMaskFun(this.nftTokenAddress, this.tokenTag)
        })
      } else {
        this.initNetData(this.$store.state.netWork)
        this.setNftMetaMaskFun(this.tokenTag, this.nftTokenAddress)
      }
    },
    async setNftMetaMaskFun (nftTokenAddress, tokenTag) {
      await this.initNetWork()
      console.log(that.fromNet, that.toNet, this.currentChainId)
      that.iconLoading = true
      const tokenContract = useTokenContractWeb3(COIN_ABI.bridgeFactory, that.fromNet.bridgeFactory)
      const oracleContract = useContractByRpc(that.fromNet.oracleContract, COIN_ABI[that.fromNet.oracleAbi], that.fromNet.rpcUrls[0])
      /* L1 预言机 oracle = iMVM_DiscountOracle.sol  接口合约
       * L1 验证 传入的 destGasLimit 最小为： oracle.getMinL2Gas();
       * 支付的gas 需要 >= destGasLimit * oracle.getDiscount();
       * L2 预言机 oracle = iOVM_GasPriceOracle 接口合约 地址：
       * 支付的gas 需要 >= oracle.minErc20BridgeCost();
       */
      const methods = that.fromNet.oracleAbi === 'iMVM_DiscountOracle' ? 'getMinL2Gas' : 'minErc20BridgeCost'
      let gasLimitBig = 0
      let gasLimit = 0
      try {
        gasLimitBig = await oracleContract.methods[methods]().call()
        gasLimit = parseInt(gasLimitBig.toString())
        const getDiscount = await oracleContract.methods.getDiscount().call()
        console.log(getDiscount.toString())
        console.log(gasLimit * getDiscount.toString())
        console.log(that.account, that.$account)
        console.log(
          nftTokenAddress,
          tokenTag,
          parseInt(this.originChainId),
          gasLimit
        )
        sendTransactionEvent(tokenContract.methods.setNft(
          nftTokenAddress,
          tokenTag,
          parseInt(this.originChainId),
          gasLimit
        ).send({
          from: that.account,
          value: 320000000
        }), {
          summary: `setNft ${that.tokenTag}`
        }, (res) => {
          console.log(res)
          that.iconLoading = false
          if (!res.status) {
            return that.$message.error('set nft error', 3)
          }
          that.$message.success('set nft success', 3)
          this.visible = false
          this.stepIndex = 0
          this.nftTokenAddress = ''
        }, e => {
          that.iconLoading = false
          console.log(e)
          that.$message.error(e?.data?.message || e?.message ? e.message : 'set nft error', 3)
        })
      } catch (e) {
      }
    },
    async serNftPolis () {
      const methods = that.fromNet.domainInfo.oracleAbi === 'imvm_discountoracle' ? 'getMinL2Gas' : 'minErc20BridgeCost'
      console.log(methods, this.fromNet.domainInfo.oracleAbi,
        parseInt(this.$store.state.netWork.chainId))
      try {
        const gasLimitBig = await this.$httpClient.sendTxAsync(
          this.fromNet.domainInfo.oracleAbi,
          parseInt(this.$store.state.netWork.chainId),
          methods,
          [],
          false
        )
        console.log(gasLimitBig)
        const gasLimit = parseInt(gasLimitBig.result.toString())
        this.$httpClient.sendTxAsync(
          this.fromNet.domainInfo.bridgeFactory,
          parseInt(this.$store.state.netWork.chainId),
          'setNft',
          [
            this.nftTokenAddress,
            this.tokenTag,
            parseInt(that.fromNet.chainId),
            gasLimit
          ],
          false,
          {
            from: that.account,
            value: 320000000
          }
        ).then(res => {
          console.log(res)
          that.iconLoading = false
          that.$message.success('set nft success', 3)
          this.visible = false
          this.stepIndex = 0
          this.nftTokenAddress = ''
        }, reject => {
          this.$message.error(reject.message.message, 8)
          that.iconLoading = false
        }).catch(err => {
          console.log(err)
          that.iconLoading = false
          this.$message.error(err.message.message, 8)
        })
      } catch (e) {
        console.log(e)
      }
    },
    // 钱包地址获取到之后加载页面数据
    setAccount () {
      this.initPage()
    },
    // 交换网络
    exchangeNet () {
      if (this.stepIndex === 1) return
      if (localStorage.getItem('connectWalletType') === 'MetaMask') {
        this.switchNetWork(that.toNet, () => {})
      } else if (localStorage.getItem('connectWalletType') === 'Polis') {
        const network = this.$store.state.netWorkList.filter(item => item.chainId === that.toNet.chainId + '')
        if (network.length > 0) {
          this.initNetData(network[0])
        }
      }
    },
    // 初始化页面
    initPage () {
      that = this
      that.initNetData(this.$store.state.netWork)
      that.account = that.$account
      if (that.account) {
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
          oracleContract: val.oracleContract0,
          oracleAbi: val.oracleAbi0,
          domainInfo: val.domainInfo0
        }
      } else {
        this.fromNet = {
          chainId: val.chainId0,
          chainName: val.chainName0,
          bridgeFactory: val.bridgeFactory0,
          oracleContract: val.oracleContract0,
          oracleAbi: val.oracleAbi0,
          domainInfo: val.domainInfo0
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
        oracleContract: val.oracleContract1,
        oracleAbi: val.oracleAbi1,
        domainInfo: val.domainInfo1
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
    // 下一步
    nextStep () {
      if (!this.nftTokenAddress) {
        return this.$message.error('NFT Token Address not empty', 8)
      }
      // this.metaMaskNextStep()
      if (localStorage.getItem('connectWalletType') === 'MetaMask') {
        this.metaMaskNextStep()
      } else if (localStorage.getItem('connectWalletType') === 'Polis') {
        this.polisNextStep()
      }
    },
    // polis链接方式下一步
    async polisNextStep () {
      this.iconLoading = true
      console.log('polisNextStep')
      this.tokenStandardIndex = 1
      if (this.tokenStandardIndex === 0) {
        try {
          const symbolResult = await this.$httpClient.sendTxAsync(
            this.fromNet.domainInfo.token721,
            parseInt(this.$store.state.netWork.chainId),
            'symbol',
            [],
            true
          )
          const nameResult = await this.$httpClient.sendTxAsync(
            this.fromNet.domainInfo.token721,
            parseInt(this.$store.state.netWork.chainId),
            'name',
            [],
            true
          )
          const baseUriResult = await this.$httpClient.sendTxAsync(
            this.fromNet.domainInfo.token721,
            parseInt(this.$store.state.netWork.chainId),
            'baseUri',
            [],
            true
          )
          console.log(nameResult)
          this.name = nameResult.result
          this.symbol = 'm.' + symbolResult.result
          this.baseUrl = baseUriResult.result
          this.stepIndex = 1
          this.tokenStandardIndex = 0
          this.iconLoading = false
        } catch (e) {
          that.$message.error(e.message.message, 3)
        }
      } else if (this.tokenStandardIndex === 1) {
        try {
          const baseUriResult = await this.$httpClient.sendTxAsync(
            this.fromNet.domainInfo.token1155,
            parseInt(this.$store.state.netWork.chainId),
            'uri',
            [0],
            false
          )
          this.baseUrl = baseUriResult.result
          this.stepIndex = 1
          this.tokenStandardIndex = 1
          this.iconLoading = false
        } catch (e) {
          this.iconLoading = false
          this.$message.error(e.message, 8)
          console.log(e)
        }
      }
    },
    // metamask链接方式下一步
    async metaMaskNextStep () {
      this.iconLoading = true
      const that = this
      this.originChainId = this.$store.state.netWork.chainId
      console.log(this.$web3_http)
      try {
        this.tokenStandardIndex = 0
        const tokenContract = useTokenContract(this.nftTokenAddress, COIN_ABI.erc721)
        if (tokenContract?.code && tokenContract.code === 500) {
          this.iconLoading = false
          return that.$message.error(tokenContract.error.message, 3)
        }
        this.symbol = 'm.' + await tokenContract.symbol()
        this.name = await tokenContract.name()
        try {
          this.baseUrl = await tokenContract.baseUri()
        } catch (e) {
          try {
            this.baseUrl = await tokenContract.baseURI()
          } catch (e) {
            this.baseUrl = ''
          }
        }
        this.stepIndex = 1
      } catch (e) {
        console.log(e)
        console.log(JSON.stringify(e))
        console.log(e.toString())
        if (e.toString().indexOf('-32000') > -1 || JSON.stringify(e).indexOf('32603') > -1) {
          try {
            const tokenContract = useTokenContract(this.nftTokenAddress, COIN_ABI.erc1155)
            if (tokenContract?.code && tokenContract.code === 500) {
              this.iconLoading = false
              return that.$message.error(tokenContract.error.message, 3)
            }
            const baseUrl = await tokenContract.uri(1)
            console.log(baseUrl)
            this.baseUrl = baseUrl
            this.tokenStandardIndex = 1
            this.stepIndex = 1
          } catch (err) {
            this.baseUrl = ''
            this.tokenStandardIndex = -1
            this.stepIndex = 1
            // console.log(err)
            // that.$message.error(err?.data?.message || err?.message ? err.message : 'wrap nft error', 3)
          }
        } else if (e.toString().indexOf('call revert exception (method')) {
          that.$message.error('contract address and Network mismatch ', 3)
        } else {
          that.$message.error(e?.data?.message || e?.message ? e.message : 'get nft info error', 3)
        }
      }
      this.iconLoading = false
    },
    // 确认wrap操作
    async confirmWrap () {
      this.iconLoading = true
      let method = ''
      let args = []
      if (this.tokenStandardIndex === 0) {
        method = 'create721Pair'
        args = [
          that.nftTokenAddress,
          that.name,
          that.symbol,
          that.baseUrl
        ]
      } else if (this.tokenStandardIndex === 1) {
        method = 'create1155Pair'
        args = [
          that.nftTokenAddress,
          that.baseUrl
        ]
      } else {
        this.iconLoading = false
        return
      }
      if (localStorage.getItem('connectWalletType') === 'MetaMask') {
        this.switchNetWork(this.toNet, () => {
          this.createPair(method, args)
        }, () => {
          this.iconLoading = false
        })
      } else if (localStorage.getItem('connectWalletType') === 'Polis') {
        this.confirmWrapPolis(method, args)
      }
    },
    // polis连接方式wrap操作
    async confirmWrapPolis (method, args) {
      const that = this
      this.iconLoading = true
      console.log(this.fromNet.domainInfo.bridgeFactory, parseInt(this.toNet.chainId))
      console.log(method, args)
      try {
        this.$httpClient.sendTxAsync(
          this.toNet.domainInfo.bridgeFactory,
          parseInt(this.toNet.chainId),
          method,
          args,
          true,
          null
        ).then(res => {
          console.log('sendTxAsync', res)
          that.iconLoading = false
          this.decodeLog(res.tx)
        }, reject => {
          console.log(reject)
          this.$message.error(reject.message.message, 8)
          that.iconLoading = false
        }).catch(err => {
          console.log(err)
          this.$message.error(err.message, 8)
          that.iconLoading = false
          console.log('err', err, JSON.stringify(err))
        })
      } catch (e) {
        that.iconLoading = false
        that.$message.error(e.message.message || 'wrap nft error', 3)
      }
    },
    // metamask连接方式wrap操作
    async createPair (method, args) {
      await this.initNetWork()
      const tokenContract = useTokenContract(this.toNet.bridgeFactory, COIN_ABI.bridgeFactory)
      console.log(this.nftTokenAddress)
      console.log(await tokenContract.getPair(this.nftTokenAddress))
      try {
        await useContractMethods({
          contract: tokenContract,
          methodName: method,
          parameters: args
        }, (res) => {
          console.log(res)
          console.log(JSON.stringify(res))
          that.iconLoading = false
          that.$message.success('wrap nft success', 3)
          that.decodeLog(res.transactionHash)
        }, (err) => {
          console.log(err)
          that.iconLoading = false
          that.$message.error(err?.data ? err.data.message : (err?.message ? err.message : 'wrap nft error'), 3)
        })
      } catch (err) {
        that.iconLoading = false
        console.log(err)
        that.$message.error(err?.data ? err.data.message : (err?.message ? err.message : 'wrap nft error'), 3)
      }
    },
    // 交易成功解析log获取tokenTag
    async decodeLog (transactionHash) {
      // transactionResult = {
      //   to: '0x9D8c817513482F4e3F8E1a5f37f4ceAeDCb67b48',
      //   from: '0xb55AdD32e4608Eb7965eC234E6C0b3f009c3d9D6',
      //   contractAddress: null,
      //   transactionIndex: 0,
      //   gasUsed: {
      //     type: 'BigNumber',
      //     hex: '0x2234b3'
      //   },
      //   logsBloom: '0x00000004000000000000000000000000800000000000000100000000000000000000004000000000000000000000004000000000000000000000000000000000000008000000000000000000000000000000000000200000001000000100000000400000020000000200000000000800000000000000000010001000005000000000000000000000000000000000000000000000000000000000000000000002000000000000000000100000100000000000000000000001001008000000000000000000000001000000000001000000001000000000000300000000001020000000000000000000000000400000000020000000000000000000000000000000',
      //   blockHash: '0x8423370b560361c66311351f037f5ef1480f7b88635deb6721e2515bbf5a0145',
      //   transactionHash: '0xac022a994cb475dffe133f30628c532cfb6b87901fb21967feaf911372252e5a',
      //   logs: [
      //     {
      //       transactionIndex: 0,
      //       blockNumber: 3296808,
      //       transactionHash: '0xac022a994cb475dffe133f30628c532cfb6b87901fb21967feaf911372252e5a',
      //       address: '0xb527929e091DdB9F0f7a7E6C4640fBc9c09b25e2',
      //       topics: ['0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d', '0x0000000000000000000000000000000000000000000000000000000000000000', '0x000000000000000000000000b55add32e4608eb7965ec234e6c0b3f009c3d9d6', '0x0000000000000000000000009d8c817513482f4e3f8e1a5f37f4ceaedcb67b48'],
      //       data: '0x',
      //       logIndex: 0,
      //       blockHash: '0x8423370b560361c66311351f037f5ef1480f7b88635deb6721e2515bbf5a0145'
      //     }, {
      //       transactionIndex: 0,
      //       blockNumber: 3296808,
      //       transactionHash: '0xac022a994cb475dffe133f30628c532cfb6b87901fb21967feaf911372252e5a',
      //       address: '0xb527929e091DdB9F0f7a7E6C4640fBc9c09b25e2',
      //       topics: ['0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d', '0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6', '0x0000000000000000000000005d6576ca71d1911310d841a0fbb1018211bb0e54', '0x0000000000000000000000009d8c817513482f4e3f8e1a5f37f4ceaedcb67b48'],
      //       data: '0x',
      //       logIndex: 1,
      //       blockHash: '0x8423370b560361c66311351f037f5ef1480f7b88635deb6721e2515bbf5a0145'
      //     }, {
      //       transactionIndex: 0,
      //       blockNumber: 3296808,
      //       transactionHash: '0xac022a994cb475dffe133f30628c532cfb6b87901fb21967feaf911372252e5a',
      //       address: '0x9D8c817513482F4e3F8E1a5f37f4ceAeDCb67b48',
      //       topics: ['0x920dc5b4bb411b3541670934b7375191b5f86f69020854896e21b9aa4407c2d2', '0x0000000000000000000000009480b751da5a48074aed1c1de2a5eb248f6f59c6', '0x000000000000000000000000b527929e091ddb9f0f7a7e6c4640fbc9c09b25e2'],
      //       data: '0x000000000000000000000000b55add32e4608eb7965ec234e6c0b3f009c3d9d6',
      //       logIndex: 2,
      //       blockHash: '0x8423370b560361c66311351f037f5ef1480f7b88635deb6721e2515bbf5a0145'
      //     }
      //   ],
      //   blockNumber: 3296808,
      //   confirmations: 6,
      //   cumulativeGasUsed: {
      //     type: 'BigNumber',
      //     hex: '0x2234b3'
      //   },
      //   status: 1,
      //   type: 0,
      //   byzantium: true,
      //   events: [
      //     {
      //       transactionIndex: 0,
      //       blockNumber: 3296808,
      //       transactionHash: '0xac022a994cb475dffe133f30628c532cfb6b87901fb21967feaf911372252e5a',
      //       address: '0xb527929e091DdB9F0f7a7E6C4640fBc9c09b25e2',
      //       topics: ['0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d', '0x0000000000000000000000000000000000000000000000000000000000000000', '0x000000000000000000000000b55add32e4608eb7965ec234e6c0b3f009c3d9d6', '0x0000000000000000000000009d8c817513482f4e3f8e1a5f37f4ceaedcb67b48'],
      //       data: '0x',
      //       logIndex: 0,
      //       blockHash: '0x8423370b560361c66311351f037f5ef1480f7b88635deb6721e2515bbf5a0145'
      //     }, {
      //       transactionIndex: 0,
      //       blockNumber: 3296808,
      //       transactionHash: '0xac022a994cb475dffe133f30628c532cfb6b87901fb21967feaf911372252e5a',
      //       address: '0xb527929e091DdB9F0f7a7E6C4640fBc9c09b25e2',
      //       topics: ['0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d', '0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6', '0x0000000000000000000000005d6576ca71d1911310d841a0fbb1018211bb0e54', '0x0000000000000000000000009d8c817513482f4e3f8e1a5f37f4ceaedcb67b48'],
      //       data: '0x',
      //       logIndex: 1,
      //       blockHash: '0x8423370b560361c66311351f037f5ef1480f7b88635deb6721e2515bbf5a0145'
      //     }, {
      //       transactionIndex: 0,
      //       blockNumber: 3296808,
      //       transactionHash: '0xac022a994cb475dffe133f30628c532cfb6b87901fb21967feaf911372252e5a',
      //       address: '0x9D8c817513482F4e3F8E1a5f37f4ceAeDCb67b48',
      //       topics: ['0x920dc5b4bb411b3541670934b7375191b5f86f69020854896e21b9aa4407c2d2', '0x0000000000000000000000009480b751da5a48074aed1c1de2a5eb248f6f59c6', '0x000000000000000000000000b527929e091ddb9f0f7a7e6c4640fbc9c09b25e2'],
      //       data: '0x000000000000000000000000b55add32e4608eb7965ec234e6c0b3f009c3d9d6',
      //       logIndex: 2,
      //       blockHash: '0x8423370b560361c66311351f037f5ef1480f7b88635deb6721e2515bbf5a0145',
      //       args: ['0x9480B751Da5a48074aeD1C1dE2a5EB248f6F59c6', '0xb527929e091DdB9F0f7a7E6C4640fBc9c09b25e2', '0xb55AdD32e4608Eb7965eC234E6C0b3f009c3d9D6'],
      //       event: 'TokenTargetCreated',
      //       eventSignature: 'TokenTargetCreated(address,address,address)'
      //     }
      //   ]
      // }
      let topics = []
      if (localStorage.getItem('connectWalletType') === 'Polis') {
        const logs = await this.$httpClient.getTxLogsAsync({
          chainid: parseInt(this.toNet.chainId),
          txhash: transactionHash
        })
        topics = logs[logs.length - 1].topics
      } else {
        const result = await this.$web3_http.eth.getTransactionReceipt(transactionHash)
        topics = result.logs[result.logs.length - 1].topics
      }
      const data = topics[topics.length - 1]
      this.tokenTag = '0x' + data.substring(26, data.length)
      this.visible = true
      // const input = await this.$web3_http.eth.abi.decodeLog(
      //   [
      //     {
      //       internalType: 'address',
      //       name: '_tokenSrc',
      //       type: 'address'
      //     },
      //     {
      //       internalType: 'string',
      //       name: '_name',
      //       type: 'string'
      //     },
      //     {
      //       internalType: 'string',
      //       name: '_symbol',
      //       type: 'string'
      //     },
      //     {
      //       internalType: 'string',
      //       name: '_baseURI',
      //       type: 'string'
      //     }
      //   ],
      //   result.logs[result.logs.length - 1].data,
      //   result.logs[result.logs.length - 1].topics
      // )
      // console.log(input)
    },
    onCopyError () {
      that.$message.error('copy error', 3)
    },
    // 复制成功
    onCopy () {
      that.$message.success('copy success', 3)
    }
  }
}
