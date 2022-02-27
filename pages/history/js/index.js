import Web3 from 'web3'
import COIN_ABI from '../../../utils/web3/coinABI'
import { useContractByRpc, useTokenContract } from '../../../utils/web3/web3Utils'

let that

export default {
  data () {
    return {
      account: '',
      tableList: [
        // {
        //   nftTokenAddress: '0xd5…864ed0',
        //   receiverAddress: '0xd5…8286ed0',
        //   sourceChain: 'Andromeda',
        //   destinationChain: 'Ethereum',
        //   tokenId: '113',
        //   NFTTokenStandard: 'ERC721',
        //   approvalTime: 'Nov.12,2022 11:55:12 (UTC)',
        //   arrivalTime: 'Estimated time of arrival is before Nov 20, 2022',
        //   status: 'Finish'
        // },
        // {
        //   nftTokenAddress: '0xd5…864ed0',
        //   receiverAddress: '0xd5…8286ed0',
        //   sourceChain: 'Andromeda',
        //   destinationChain: 'Ethereum',
        //   tokenId: '113',
        //   NFTTokenStandard: 'ERC721',
        //   approvalTime: 'Nov.12,2022 11:55:12 (UTC)',
        //   arrivalTime: 'Estimated time of arrival is before Nov 20, 2022',
        //   status: 'Pending'
        // },
        // {
        //   nftTokenAddress: '0xd5…864ed0',
        //   receiverAddress: '0xd5…8286ed0',
        //   sourceChain: 'Andromeda',
        //   destinationChain: 'Ethereum',
        //   tokenId: '113',
        //   NFTTokenStandard: 'ERC721',
        //   approvalTime: 'Nov.12,2022 11:55:12 (UTC)',
        //   arrivalTime: 'Estimated time of arrival is before Nov 20, 2022',
        //   status: 'Finish'
        // },
        // {
        //   nftTokenAddress: '0xd5…864ed0',
        //   receiverAddress: '0xd5…8286ed0',
        //   sourceChain: 'Andromeda',
        //   destinationChain: 'Ethereum',
        //   tokenId: '113',
        //   NFTTokenStandard: 'ERC721',
        //   approvalTime: 'Nov.12,2022 11:55:12 (UTC)',
        //   arrivalTime: 'Estimated time of arrival is before Nov 20, 2022',
        //   status: 'Finish'
        // },
        // {
        //   nftTokenAddress: '0xd5…864ed0',
        //   receiverAddress: '0xd5…8286ed0',
        //   sourceChain: 'Andromeda',
        //   destinationChain: 'Ethereum',
        //   tokenId: '113',
        //   NFTTokenStandard: 'ERC721',
        //   approvalTime: 'Nov.12,2022 11:55:12 (UTC)',
        //   arrivalTime: 'Estimated time of arrival is before Nov 20, 2022',
        //   status: 'Finish'
        // },
        // {
        //   nftTokenAddress: '0xd5…864ed0',
        //   receiverAddress: '0xd5…8286ed0',
        //   sourceChain: 'Andromeda',
        //   destinationChain: 'Ethereum',
        //   tokenId: '113',
        //   NFTTokenStandard: 'ERC721',
        //   approvalTime: 'Nov.12,2022 11:55:12 (UTC)',
        //   arrivalTime: 'Estimated time of arrival is before Nov 20, 2022',
        //   status: 'Finish'
        // },
        // {
        //   nftTokenAddress: '0xd5…864ed0',
        //   receiverAddress: '0xd5…8286ed0',
        //   sourceChain: 'Andromeda',
        //   destinationChain: 'Ethereum',
        //   tokenId: '113',
        //   NFTTokenStandard: 'ERC721',
        //   approvalTime: 'Nov.12,2022 11:55:12 (UTC)',
        //   arrivalTime: 'Estimated time of arrival is before Nov 20, 2022',
        //   status: 'Finish'
        // },
        // {
        //   nftTokenAddress: '0xd5…864ed0',
        //   receiverAddress: '0xd5…8286ed0',
        //   sourceChain: 'Andromeda',
        //   destinationChain: 'Ethereum',
        //   tokenId: '113',
        //   NFTTokenStandard: 'ERC721',
        //   approvalTime: 'Nov.12,2022 11:55:12 (UTC)',
        //   arrivalTime: 'Estimated time of arrival is before Nov 20, 2022',
        //   status: 'Pending'
        // },
        // {
        //   nftTokenAddress: '0xd5…864ed0',
        //   receiverAddress: '0xd5…8286ed0',
        //   sourceChain: 'Andromeda',
        //   destinationChain: 'Ethereum',
        //   tokenId: '113',
        //   NFTTokenStandard: 'ERC721',
        //   approvalTime: 'Nov.12,2022 11:55:12 (UTC)',
        //   arrivalTime: 'Estimated time of arrival is before Nov 20, 2022',
        //   status: 'Finish'
        // },
        // {
        //   nftTokenAddress: '0xd5…864ed0',
        //   receiverAddress: '0xd5…8286ed0',
        //   sourceChain: 'Andromeda',
        //   destinationChain: 'Ethereum',
        //   tokenId: '113',
        //   NFTTokenStandard: 'ERC721',
        //   approvalTime: 'Nov.12,2022 11:55:12 (UTC)',
        //   arrivalTime: 'Estimated time of arrival is before Nov 20, 2022',
        //   status: 'Finish'
        // },
        // {
        //   nftTokenAddress: '0xd5…864ed0',
        //   receiverAddress: '0xd5…8286ed0',
        //   sourceChain: 'Andromeda',
        //   destinationChain: 'Ethereum',
        //   tokenId: '113',
        //   NFTTokenStandard: 'ERC721',
        //   approvalTime: 'Nov.12,2022 11:55:12 (UTC)',
        //   arrivalTime: 'Estimated time of arrival is before Nov 20, 2022',
        //   status: 'Finish'
        // },
        // {
        //   nftTokenAddress: '0xd5…864ed0',
        //   receiverAddress: '0xd5…8286ed0',
        //   sourceChain: 'Andromeda',
        //   destinationChain: 'Ethereum',
        //   tokenId: '113',
        //   NFTTokenStandard: 'ERC721',
        //   approvalTime: 'Nov.12,2022 11:55:12 (UTC)',
        //   arrivalTime: 'Estimated time of arrival is before Nov 20, 2022',
        //   status: 'Finish'
        // }
      ],
      fromNet: null,
      toNet: null,
      pageNum: 1,
      pageSize: 6,
      pageTotal: 1,
      isShowSelf: false,
      total: 1,
      tableData: [],
      loadingPage: false
    }
  },
  components: {
  },
  computed: {
    // 是否需要等待8天
    isNeedHold: function () {
      const isWait = this.fromNet && (this.fromNet.chainId === '1088' || this.fromNet.chainId === '588')
      console.log(isWait)
      return isWait
    }
  },
  watch: {
    // 获取用户信息
    // '$store.state.accounts': function (val) {
    //   console.log('获取用户信息')
    //   this.setAccount(val)
    // },
    '$store.state.lang': function (val) {
    },
    // 切换网络
    '$store.state.netWork': function (val) {
      this.initNetData(val)
    }
  },
  created () {
  },
  mounted () {
    this.initPage('mounted')
  },
  methods: {
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
          bridgeDomain: val.bridgeDomain0,
          oracleContract: val.oracleContract0,
          oracleAbi: val.oracleAbi0
        }
      } else {
        this.fromNet = {
          chainId: val.chainId0,
          chainName: val.chainName0,
          bridgeFactory: val.bridgeFactory0,
          bridge: val.bridge0,
          bridgeDomain: val.bridgeDomain0,
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
        bridgeDomain: val.bridgeDomain1,
        oracleContract: val.oracleContract1,
        oracleAbi: val.oracleAbi1
      }
      this.initPage()
    },
    // 钱包地址获取到之后加载页面数据
    setAccount () {
      this.initPage('account')
    },
    async initPage (type) {
      that = this
      that.account = that.$account
      if (that.account) {
        await that.getLogs(type)
      }
    },
    prePage () {
      if (this.pageNum > 1) {
        this.pageNum--
        this.changePage()
      }
    },
    nextPage () {
      if (this.pageNum < this.pageTotal) {
        this.pageNum++
        this.changePage()
      }
    },
    changeHistory () {
      this.isShowSelf = !this.isShowSelf
      this.getLogs()
    },
    async getLogs (type) {
      this.tableList = []
      this.pageNum = 1
      this.loadingPage = true
      console.log(type, this.isNeedHold)
      const $web3_http = new Web3(new Web3.providers.HttpProvider(this.$store.state.netWork.rpcUrls0[0]))
      const myContractInstance = new $web3_http.eth.Contract(COIN_ABI.bridgeL1, this.$store.state.netWork.bridge0, {
        from: this.account
      })
      myContractInstance.getPastEvents('DEPOSIT_TO', {
        filter: {
          from: this.account
        },
        fromBlock: 0,
        toBlock: 'latest'
      }).then(async (res) => {
        console.log(res)
        if (res.length < 1) {
          this.loadingPage = false
          return
        }
        let result = res
        if (this.isShowSelf) {
          console.log(this.account)
          result = res.filter(item => (item.returnValues._to + '').toLowerCase() === this.account.toLowerCase())
        }
        console.log(result)
        if (result.length < 1) {
          this.loadingPage = false
          return
        }
        this.total = result.length
        const newArr = []
        for (let i = 0; i < result.length; i += this.pageSize) {
          newArr.push(result.slice(i, i + this.pageSize))
        }
        this.tableData = newArr
        this.pageTotal = newArr.length
        this.changePage()
      }).catch(() => {
        this.loadingPage = false
      })
    },
    changePage () {
      this.loadingPage = true
      const res = this.tableData[this.pageNum - 1]
      this.getPageData(res)
    },
    async getPageData (res) {
      this.tableList = []
      for (let i = 0; i < res.length; i++) {
        const item = res[i]
        try {
          const hashResult = await this.$web3_http.eth.getTransactionReceipt(item.transactionHash)
          console.log(hashResult)
          const blockData = await this.$web3_http.eth.getBlock(item.blockNumber)
          const timetemp = this.isNeedHold ? (blockData.timestamp * 1000 + 8 * 24 * 60 * 60 * 1000) : blockData.timestamp * 1000
          const time = new Date(timetemp)
          const timeArr = time.toString().split(' ')
          console.log(item.transactionHash)
          const findHash = this.tableList.find(item => item.transactionHash)
          const abi = item.returnValues.nftStandard === '0' ? COIN_ABI.erc721 : COIN_ABI.erc1155
          const bridgeContract = useContractByRpc(this.$store.state.netWork.bridge1, COIN_ABI.bridgeL1, this.$store.state.netWork.rpcUrls1[0])

          const pair = await bridgeContract.methods.clone(item.returnValues._nft).call()
          console.log(pair)
          const myContractInstance = useContractByRpc(pair, abi, this.$store.state.netWork.rpcUrls0[0])
          const approveEventName = item.returnValues.nftStandard === '0' ? 'Approval' : 'ApprovalForAll'
          const resApproval = await myContractInstance.getPastEvents(approveEventName, {
            // filter: {
            //   from: item.returnValues._from
            // },
            fromBlock: 0,
            toBlock: 'latest'
          })
          console.log(resApproval)
          const approve = resApproval.find(item1 => {
            if (item.returnValues.nftStandard === '0') {
              return (item1.returnValues.approved + '').toLowerCase() === this.$store.state.netWork.bridge0.toLowerCase() &&
                (item1.returnValues.owner + '').toLowerCase() === item.returnValues._from.toLowerCase() &&
                item1.returnValues.tokenId === item.returnValues._tokenID
            } else {
              return item1.returnValues.operator.toLowerCase() === this.$store.state.netWork.bridge0.toLowerCase() &&
                (item1.returnValues.account + '').toLowerCase() === item.returnValues._from.toLowerCase()
            }
          })
          console.log(findHash)
          if (!findHash || findHash.transactionHash !== item.transactionHash) {
            let approvalTime
            console.log(approve)
            if (approve) {
              const blockData1 = await this.$web3_http.eth.getBlock(item.blockNumber)
              const time1 = new Date(blockData1.timestamp * 1000)
              approvalTime = time1.toGMTString()
            } else {
              approvalTime = '--'
            }
            console.log(1212312, hashResult)
            this.tableList.push({
              transactionHash: item.transactionHash,
              nftTokenAddress: `${item.returnValues._nft.substr(0, 4)}…${item.returnValues._nft.substr(item.returnValues._nft.length - 5, item.returnValues._nft.length)}`,
              receiverAddress: `${item.returnValues._to.substr(0, 4)}…${item.returnValues._to.substr(item.returnValues._to.length - 5, item.returnValues._to.length)}`,
              sourceChain: this.$store.state.netWork.chainName0,
              destinationChain: this.$store.state.netWork.chainName1,
              tokenId: item.returnValues._tokenID,
              NFTTokenStandard: item.returnValues.nftStandard === '0' ? 'ERC721' : 'ERC1155',
              // approvalTime: 'Nov.12,2022 11:55:12 (UTC)',
              arrivalTime: 'Estimated time of arrival is before ' + timeArr[1] + ' ' + timeArr[2] + ', ' + timeArr[3],
              approvalTime: approvalTime,
              // arrivalTime: '--',
              status: (hashResult && hashResult.status) ? 'Finish' : 'Pending'
            })
          }
        } catch (e) {
          console.log(e)
        }
      }
      this.loadingPage = false
    }
  }
}
