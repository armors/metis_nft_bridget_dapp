import Vue from 'vue'
import mixins from '~/plugins/mixins'
import yLloading from '../../components/yLloading'
import { mapState, mapGetters } from 'vuex'
import dialogConfirm from '../../components/dialogConfirm'
import { useTokenContract } from '../../utils/web3/web3Utils'
import COIN_ABI from '../../utils/web3/coinABI'
Vue.mixin(mixins)
export default {
  data () {
    return {
      visible: true,
      showLangs: false,
      account: null,
      all_transaction: [],
      tab: 0,
      connectList: [
        {
          name: 'Connect by Polis',
          type: 'Polis',
          icon_img: require('../../assets/image/logo.png')
        },
        {
          name: 'Connect by MetaMask',
          type: 'MetaMask',
          icon_img: require('../../assets/image/metamask.svg')
        }
      ]
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.isLoading
    }),
    'store.state.accounts': function () {
      return this.$store.state.accounts
    }
  },
  watch: {
    // 获取用户信息
    '$store.state.accounts': function (val) {
      console.log('获取用户信息', val)
      this.setAccount(val)
    },
    '$store.state.lang': function (val) {
    }
  },
  components: {
    dialogConfirm,
    yLloading
  },
  created () {
  },
  async mounted () {
    // this.$message.error('This is a success message', 4)
    // this.$message.success('This is a success message', 3)
    // this.$message.warning('This is a success message', 2)
    // this.$message.info('We are processing the transfer.please wait for confirmation!', 5)
    // if (this.$accounts === undefined || (this.$accounts && this.$accounts.length < 1)) {
    //   const init_wab3 = await this.initWeb3()
    //   console.log(init_wab3)
    // }
    // this.loginMetis()
    // const oauth2Client = new Oauth2Client()
    // console.log(oauth2Client)
    // oauth2Client.startOauth2(process.env.APP_ID, process.env.NEXT_PUBLIC_URL, 'newWindow', 'switchAccount')
    // this.$get(`https://polis.metis.io/api/v1/oauth2/access_token?app_id=${process.env.APP_ID}&app_key=${process.env.APP_SECRET}&code=`, {}, res => {
    //   console.log(res)
    // }, err => {
    //   console.log(err)
    // })
    const connectWalletType = localStorage.getItem('connectWalletType')
    if (connectWalletType) {
      if (connectWalletType === 'Polis') {
        this.loginMetis()
        // console.log(this.$store.state.accounts)
      } else if (connectWalletType === 'MetaMask') {
        const init_wab3 = await this.initWeb3()
      }
    }
    this.initNetWork()
    for (let i = 0; i < this.langInfo.tabList.length; i++) {
      if (('/' + this.langInfo.tabList[i].path) === this.$route.path) {
        this.tab = i
        break
      }
    }
  },
  methods: {
    changeNetWorkFun (e) {
      console.log(e)
      console.log(e.key)
      const network = this.$store.state.netWorkList.filter(item => item.chainId === e.key)
      // if (this.$store.state.connectType === 'Polis') {
      //   this.$store.dispatch('updateNetWork', network[0])
      // } else if (this.$store.state.connectType === 'MetaMask') {
      this.$web3_http && window.ethereum &&
        window.ethereum
          .request({
            method: 'wallet_switchEthereumChain',
            params: [
              {
                chainId: this.$web3_http.utils.numberToHex(e.key)
              }
            ]
          })
          .then(() => {
            this.$store.dispatch('updateNetWork', network[0])
            this.initNetWork()
            // this.$message.success('Change NetWork Success, Current NetWork Is ', 3)
          })
          .catch((e) => {
            if (e?.code && e.code === 4902) {
              window.ethereum &&
              window.ethereum
                .request({
                  method: 'wallet_addEthereumChain',
                  params: [
                    {
                      chainId: this.$web3_http.utils.numberToHex(network[0].chainId),
                      chainName: network[0].chainName,
                      nativeCurrency: {
                        name: 'Metis',
                        symbol: 'Metis',
                        decimals: 18
                      },
                      rpcUrls: ['https://polis.metis.io/'],
                      blockExplorerUrls: ['https://stardust-explorer.metis.io/']
                    }
                  ]
                })
                .then(() => {
                  console.log('网络切换成功')
                })
                .catch((e) => {
                  console.log(e)
                })
            }
          })
      // }
    },
    changeAccountBtn () {
      this.closeDialogAccount()
      this.openWalletType()
    },
    goAccountDialog () {
      this.closeWalletType()
      this.openAccount()
    },
    changeConnectType (v) {
      this.$store.dispatch('updateConnectType', v.type)
      this.closeWalletType()
      if (v.type === 'MetaMask') {
        this.connectAccountFunc()
      } else if (v.type === 'Polis') {
        this.loginMetis()
      }
    },
    closeWalletType () {
      this.$store.dispatch('updateDialogConnectType', false)
    },
    openWalletType () {
      this.$store.dispatch('updateDialogConnectType', true)
    },
    openAccount () {
      this.$store.dispatch('updateDialogAccount', true)
    },
    closeDialogAccount () {
      this.$store.dispatch('updateDialogAccount', false)
    },
    connectAccountFunc () {
      this.connectAccount()
    },
    clickMenu (index, item) {
      console.log(index)
      this.$store.dispatch('onChangeLang', item)
    },
    selectTab (v, i) {
      this.tab = i
      this.$router.push({
        path: '/' + v.path
      })
    },
    setAccount (val) {
      console.log(val)
      if (val.length > 0) this.account = this.$store.state.accounts[0]
      console.log(this.account)
    },
    getTransactionStatus (v) {
      return v?.confirmedTime ? (v?.receipt?.status ? 'confirmed' : 'error') : 'pending'
    },
    clearAll () {
      this.$store.dispatch('clearAllTransactions')
    }

  }
}
