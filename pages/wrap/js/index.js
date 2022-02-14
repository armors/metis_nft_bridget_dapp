import { isAddress, useTokenContract } from '../../../utils/web3/web3Utils'
import COIN_ABI from '../../../utils/web3/coinABI'
import { useContractMethods } from '../../../utils/web3/contractEvent'

let that

export default {
  data () {
    return {
      iconLoading: false,
      account: '',
      nftTokenAddress: '0x8A63cDc1e8599079Ad07C76F122fF29EE8C7eC21',
      // nftTokenAddress: '0x9480B751Da5a48074aeD1C1dE2a5EB248f6F59c6',
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
      visible: false,
      fromNet: null,
      toNet: null,
      name: '',
      symbol: '',
      baseUrl: ''
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
      if (!val) {
        return
      }
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
      console.log(this.toNet)
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
    exchangeNet () {
      const toNet = that.toNet
      that.toNet = that.fromNet
      that.fromNet = toNet
    },
    initPage () {
      that = this
      that.fromNet = {
        chainId: this.$store.state.netWork.chainId0,
        chainName: this.$store.state.netWork.chainName0
      }
      that.toNet = {
        chainId: this.$store.state.netWork.chainId1,
        chainName: this.$store.state.netWork.chainName1
      }
      that.account = that.$account
      if (that.account) {
      }
    },
    selectTokenStandard (v, i) {
      // this.tokenStandardIndex = i
    },
    selectTokenId (v, i) {
      this.tokenIdIndex = i
    },
    async nextStep () {
      if (!this.nftTokenAddress) {
        return this.$message.error('NFT Token Address not empty', 2)
      }
      // if (!isAddress()) {
      //   return this.$message.error('NFT Token Address is invalid', 2)
      // }
      this.iconLoading = true
      try {
        this.tokenStandardIndex = 0
        const tokenContract = useTokenContract(this.nftTokenAddress, COIN_ABI.erc721)
        console.log(tokenContract)
        const symbol = await tokenContract.symbol()
        const name = await tokenContract.name()
        const baseUrl = await tokenContract.baseUri()
        this.name = name
        this.symbol = symbol
        this.baseUrl = baseUrl
        console.log(name)
        console.log(symbol)
        console.log(baseUrl)
      } catch (e) {
        console.log(e.toString())
        if (e.toString().indexOf('-32000') > -1) {
          const tokenContract = useTokenContract(this.nftTokenAddress, COIN_ABI.erc1155)
          console.log(tokenContract)
          try {
            const baseUrl = await tokenContract.uri(this.nftTokenAddress)
            console.log(baseUrl)
            this.baseUrl = baseUrl
            this.tokenStandardIndex = 1
            this.stepIndex = 1
          } catch (err) {
            console.log(err)
            that.$message.error(err?.message ? err.message : 'wrap nft error', 3)
          }
        } else {
          that.$message.error(e?.message ? e.message : 'wrap nft error', 3)
        }
      }
      this.iconLoading = false
    },
    async confirmWrap () {
      this.iconLoading = true
      console.log(this.toNet)
      if (this.$store.state.connectType === 'Polis') {
        // this.$store.dispatch('updateNetWork', network[0])
      } else if (this.$store.state.connectType === 'MetaMask') {
        this.$web3_http && window.ethereum &&
        window.ethereum
          .request({
            method: 'wallet_switchEthereumChain',
            params: [
              {
                chainId: this.$web3_http.utils.numberToHex(this.toNet.chainId)
              }
            ]
          })
          .then(() => {
            console.log(window.ethereum.networkVersion)
            const that = this
            setTimeout(() => {
              console.log(window.ethereum.networkVersion)
              that.createPair()
            }, 4000)
          })
          .catch((e) => {
            console.log(e)
            if (e?.code && e.code === 4902) {
              this.addEthereumChain()
            } else {
              that.$message.error(e?.message ? e.message : 'wrap nft error', 3)
            }
          })
      }
    },
    addEthereumChain () {
      this.$web3_http && window.ethereum &&
      window.ethereum
        .request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: this.$web3_http.utils.numberToHex(this.toNet.chainId),
              chainName: this.toNet.chainNameAdd,
              nativeCurrency: this.toNet.nativeCurrency,
              rpcUrls: this.toNet.rpcUrls,
              blockExplorerUrls: this.toNet.blockExplorerUrls
            }
          ]
        })
        .then(() => {
          const that = this
          setTimeout(() => {
            that.createPair()
          }, 4000)
        })
        .catch((e) => {
          that.$message.error(e?.message ? e.message : 'wrap nft error', 3)
        })
    },
    async createPair () {
      try {
        await this.initWeb3()
        const tokenContract = useTokenContract(process.env.factory, COIN_ABI.bridgeFactory)
        if (that.tokenStandardIndex === 0) {
          await useContractMethods({
            contract: tokenContract,
            methodName: 'create721Pair',
            parameters: [
              that.nftTokenAddress,
              that.name,
              that.symbol,
              that.baseUrl
            ]
          }, (res) => {
            console.log(res)
            that.iconLoading = false
            that.visible = true
            that.$message.success('wrap nft success', 3)
          }, (err) => {
            that.iconLoading = false
            that.$message.error(err?.message ? err.message : 'wrap nft error', 3)
          })
        } else if (that.tokenStandardIndex === 1) {
          await useContractMethods({
            contract: tokenContract,
            methodName: 'create1155Pair',
            parameters: [
              that.nftTokenAddress,
              that.baseUrl
            ]
          }, (res) => {
            console.log(res)
            that.iconLoading = false
            that.visible = true
            that.$message.success('wrap nft success', 3)
          }, (err) => {
            that.iconLoading = false
            that.$message.error(err?.message ? err.message : 'wrap nft error', 3)
          })
        }
      } catch (e) {
        that.iconLoading = false
        console.log(e)
        that.$message.error(e?.message ? e.message : 'wrap nft error', 3)
      }
    },
    onCopyError () {
      console.log('copy error')
    },
    onCopy () {
      alert('复制成功')
    }
  }
}
