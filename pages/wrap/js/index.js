import { useTokenContract } from '../../../utils/web3/web3Utils'
import COIN_ABI from '../../../utils/web3/coinABI'
import { useContractMethods } from '../../../utils/web3/contractEvent'

let that

export default {
  data () {
    return {
      iconLoading: false,
      account: '',
      // nftTokenAddress: '0x8A63cDc1e8599079Ad07C76F122fF29EE8C7eC21',
      // nftTokenAddress: '0x9480B751Da5a48074aeD1C1dE2a5EB248f6F59c6',
      nftTokenAddress: '0xb8DcFdEbd5f78C4c285BcF16De4aBeec6E48F90b', // 1155
      // nftTokenAddress: '0x5F08758b1c768c9CA2ED2159DCf55ED04F33B1BB',
      // nftTokenAddress: '0x3608DDd6150ecF54b0e7AC40DfE720f8cbb1a2c6',
      // nftTokenAddress: '0xD8eEaB40CfA4B2c75e12cC5E2fb7c88142d894fA',
      tokenStandardIndex: 0,
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
      baseUrl: ''
    }
  },
  components: {},
  computed: {},
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
    changeStep (v, i) {
      if (i === 0 && this.stepIndex === 1) {
        this.stepIndex = 0
        this.name = ''
        this.symbol = ''
        this.baseUrl = ''
      }
    },
    closeWrapSuccess () {
      this.visible = false
      this.stepIndex = 0
      this.nftTokenAddress = ''
    },
    // 钱包地址获取到之后加载页面数据
    setAccount () {
      this.initPage()
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
    initPage () {
      that = this
      that.initNetData(this.$store.state.netWork)
      that.account = that.$account
      if (that.account) {
      }
    },
    initNetData (val) {
      if (val.chainId0 !== '1') {
        this.fromNet = {
          chainId: val.chainId0,
          chainName: val.chainName0,
          chainNameAdd: val.chainNameAdd0,
          nativeCurrency: val.nativeCurrency0,
          rpcUrls: val.rpcUrls0,
          blockExplorerUrls: val.blockExplorerUrls0
        }
      } else {
        this.fromNet = {
          chainId: val.chainId0,
          chainName: val.chainName0
        }
      }
      this.toNet = {
        chainId: val.chainId1,
        chainName: val.chainName1,
        chainNameAdd: val.chainNameAdd1,
        nativeCurrency: val.nativeCurrency1,
        rpcUrls: val.rpcUrls1,
        blockExplorerUrls: val.blockExplorerUrls1
      }
    },
    selectTokenStandard (v, i) {
      // this.tokenStandardIndex = i
    },
    selectTokenId (v, i) {
      this.tokenIdIndex = i
    },
    nextStep () {
      if (!this.nftTokenAddress) {
        return this.$message.error('NFT Token Address not empty', 2)
      }
      this.metaMaskNextStep()
      // if (localStorage.getItem('connectWalletType') === 'MetaMask') {
      //   this.metaMaskNextStep()
      // } else if (localStorage.getItem('connectWalletType') === 'Polis') {
      //   this.polisNextStep()
      // }
    },
    async polisNextStep () {
      this.iconLoading = true
      console.log('polisNextStep')
      try {
        const symbolResult = await this.$httpClient.sendTxAsync(
          'ecr721',
          parseInt(this.$store.state.netWork.chainId),
          'symbol',
          [],
          true
        )
        const nameResult = await this.$httpClient.sendTxAsync(
          'ecr721',
          parseInt(this.$store.state.netWork.chainId),
          'name',
          [],
          true
        )
        const baseUriResult = await this.$httpClient.sendTxAsync(
          'ecr721',
          parseInt(this.$store.state.netWork.chainId),
          'baseUri',
          [],
          true
        )
        this.name = nameResult.result
        this.symbol = symbolResult.result
        this.baseUrl = baseUriResult.result
        this.stepIndex = 1
        this.tokenStandardIndex = 0
        this.iconLoading = false
      } catch (e) {
        console.log(e)
        try {
          const baseUriResult = await this.$httpClient.sendTxAsync(
            'ecr1155',
            parseInt(this.$store.state.netWork.chainId),
            'baseUri',
            [],
            true
          )
          this.baseUrl = baseUriResult.result
          this.stepIndex = 1
          this.tokenStandardIndex = 1
          this.iconLoading = false
        } catch (e) {
          this.iconLoading = false
          this.$message.error(e.message, 3)
          console.log(e)
        }
      }
    },
    async metaMaskNextStep () {
      this.iconLoading = true
      const that = this
      console.log(this.$web3_http)
      try {
        this.tokenStandardIndex = 0
        const tokenContract = useTokenContract(this.nftTokenAddress, COIN_ABI.erc721)
        if (tokenContract?.code && tokenContract.code === 500) {
          this.iconLoading = false
          return that.$message.error(tokenContract.error.message, 3)
        }
        const symbol = await tokenContract.symbol()
        const name = await tokenContract.name()
        const baseUrl = await tokenContract.baseUri()
        this.name = name
        this.symbol = symbol
        this.baseUrl = baseUrl
        this.stepIndex = 1
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
            this.baseUrl = baseUrl
            this.tokenStandardIndex = 1
            this.stepIndex = 1
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
    confirmWrap () {
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
    async confirmWrapPolis (method, args) {
      const that = this
      this.iconLoading = true
      try {
        this.$httpClient.sendTxAsync(
          'factory',
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
          this.$message.error(reject.message.message, 3)
          that.iconLoading = false
          // console.log('reject', reject, JSON.stringify(reject))
        }).catch(err => {
          this.$message.error(err.message, 3)
          that.iconLoading = false
          console.log('err', err, JSON.stringify(err))
        })
      } catch (e) {
        that.iconLoading = false
        that.$message.error(e.message.message || 'wrap nft error', 3)
      }
    },
    async createPair (method, args) {
      await this.initNetWork()
      const tokenContract = useTokenContract(process.env.factory, COIN_ABI.bridgeFactory)
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
          that.iconLoading = false
          that.$message.error(err?.data?.message || err?.message ? err.message : 'wrap nft error', 3)
        })
      } catch (e) {
        that.iconLoading = false
        console.log(e)
        that.$message.error(e?.data?.message || e?.message ? e.message : 'wrap nft error', 3)
      }
    },
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
    onCopy () {
      that.$message.success('copy success', 3)
    }
  }
}
