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
    const connectWalletType = localStorage.getItem('connectWalletType')
    this.initNetWork()
    if (connectWalletType) {
      this.$store.dispatch('updateConnectType', localStorage.getItem('connectWalletType'))
      if (connectWalletType === 'Polis') {
        this.loginMetis()
      } else if (connectWalletType === 'MetaMask') {
        await this.initWeb3()
      }
    }
    for (let i = 0; i < this.langInfo.tabList.length; i++) {
      if (('/' + this.langInfo.tabList[i].path) === this.$route.path) {
        this.tab = i
        break
      }
    }
  },
  methods: {
    // 选择网络
    changeNetWorkFun (e) {
      console.log(e)
      console.log(e.key)
      const network = this.$store.state.netWorkList.filter(item => item.chainId === e.key)
      console.log(network[0])
      this.switchNetWork(network[0], () => {
        this.$store.dispatch('updateNetWork', network[0])
        this.initNetWork()
      })
    },
    // 改变连接方式
    changeAccountBtn () {
      this.closeDialogAccount()
      this.openWalletType()
    },
    // 关闭选择连接方式弹窗打开连接信息弹窗
    goAccountDialog () {
      this.closeWalletType()
      this.openAccount()
    },
    // 选择链接方式
    changeConnectType (v) {
      this.$store.dispatch('updateConnectType', v.type)
      this.closeWalletType()
      if (v.type === 'MetaMask') {
        this.connectAccountFunc()
      } else if (v.type === 'Polis') {
        this.loginMetis()
      }
    },
    // 关闭选择连接方式弹窗
    closeWalletType () {
      this.$store.dispatch('updateDialogConnectType', false)
    },
    // 打开选择连接方式弹窗
    openWalletType () {
      this.$store.dispatch('updateDialogConnectType', true)
    },
    // 打开选择连接信息弹窗
    openAccount () {
      this.$store.dispatch('updateDialogAccount', true)
    },
    // 关闭选择连接信息弹窗
    closeDialogAccount () {
      this.$store.dispatch('updateDialogAccount', false)
    },
    clickMenu (index, item) {
      console.log(index)
      this.$store.dispatch('onChangeLang', item)
    },
    // 切换tab
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
