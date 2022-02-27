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
      ]
    }
  },
  components: {
  },
  computed: {
    // 是否需要等待8天
    isNeedHold: function () {
      return this.fromNet && (this.fromNet.chainId === '1088' || this.fromNet.chainId === '588')
    }
  },
  watch: {
    // 获取用户信息
    // '$store.state.accounts': function (val) {
    //   console.log('获取用户信息')
    //   this.setAccount(val)
    // },
    '$store.state.lang': function (val) {
    }
    // 切换网络
    // '$store.state.netWork': function (val) {
    //   this.initPage()
    // }
  },
  created () {
  },
  mounted () {
    this.initPage('mounted')
  },
  methods: {
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
    async getLogs (type) {
      console.log(type)
      const abi = this.isNeedHold ? COIN_ABI.bridgeL2 : COIN_ABI.bridgeL1
      const $web3_http = new Web3(new Web3.providers.HttpProvider(this.$store.state.netWork.rpcUrls0[0]))
      const myContractInstance = new $web3_http.eth.Contract(abi, this.$store.state.netWork.bridge0, {
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
        this.tableList = []
        for (let i = 0; i < res.length; i++) {
          const item = res[i]
          try {
            const hashResult = await this.$web3_http.eth.getTransactionReceipt(item.transactionHash)
            console.log(hashResult)
            const blockData = await this.$web3_http.eth.getBlock(item.blockNumber)
            const time = new Date(blockData.timestamp * 1000)
            const timeArr = time.toString().split(' ')
            console.log(item.transactionHash)
            const findHash = this.tableList.find(item => item.transactionHash)
            const abi = item.returnValues.nftStandard === '0' ? COIN_ABI.erc721 : COIN_ABI.erc1155
            const bridgeContract = useContractByRpc(this.$store.state.netWork.bridge1, COIN_ABI.bridgeL1, this.$store.state.netWork.rpcUrls1[0])

            const pair = await bridgeContract.methods.clone(item.returnValues._nft).call()
            console.log(pair)
            const myContractInstance = useContractByRpc(pair, abi, this.$store.state.netWork.rpcUrls0[0])
            const resApproval = await myContractInstance.getPastEvents('Approval', {
              filter: {
                from: item.returnValues._from
              },
              fromBlock: 0,
              toBlock: 'latest'
            })
            console.log(resApproval)
            const approve = resApproval.find(item1 => {
              return item1.returnValues.approved.toLowerCase() === this.$store.state.netWork.bridge0.toLowerCase() &&
                (item1.returnValues.owner + '').toLowerCase() === item.returnValues._from.toLowerCase() &&
                item1.returnValues.tokenId === item.returnValues._tokenID
            })
            console.log(findHash)
            if (!findHash || findHash.transactionHash !== item.transactionHash) {
              let approvalTime
              console.log(approve)
              if (approve) {
                const blockData1 = await this.$web3_http.eth.getBlock(item.blockNumber)
                console.log(blockData1.timestamp)
                const time = this.isNeedHold ? (blockData1.timestamp * 1000 + 8 * 24 * 60 * 60 * 1000) : blockData1.timestamp * 1000
                const time1 = new Date(time)
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
      })
    }
  }
}
