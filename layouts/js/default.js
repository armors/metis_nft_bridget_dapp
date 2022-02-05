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
    if (this.$accounts === undefined || (this.$accounts && this.$accounts.length < 1)) {
      const init_wab3 = await this.initWeb3()
      console.log(init_wab3)
    }
    for (let i = 0; i < this.langInfo.tabList.length; i++) {
      if (('/' + this.langInfo.tabList[i].path) === this.$route.path) {
        this.tab = i
        break
      }
    }
  },
  methods: {
    changeConnectType (v) {
      this.$store.dispatch('updateConnectType', v.type)
    },
    closeDialogNetwork () {
      this.$store.dispatch('updateDialogNetwork', false)
    },
    openNetWork () {
      this.$store.dispatch('updateDialogNetwork', true)
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
      this.account = this.$store.state.accounts[0]
    },
    getTransactionStatus (v) {
      return v?.confirmedTime ? (v?.receipt?.status ? 'confirmed' : 'error') : 'pending'
    },
    clearAll () {
      this.$store.dispatch('clearAllTransactions')
    }

  }
}
