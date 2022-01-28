import Vue from 'vue'
import { mapGetters } from 'vuex'
import { getWeb3 } from '../utils/web3/getWeb3'
import { TRANSACTION_ACTIONS } from '../utils/web3/constants'
import { keepPoint, milliFormat, numDiv, numMulti } from '../utils/function'
export default {
  computed: {
    'store.state.accounts': function () {
      return this.$store.state.accounts
    },
    ...mapGetters({
      langInfo: 'getLangInfo'
    })
  },
  watch: {
    // 获取用户信息
    '$store.state.accounts': function (val) {
      this.setAccount(val)
    }
  },
  data () {
    return {
      resolve: '',
      reject: '',
      account: '',
      promise: '' // 保存promise对象
    }
  },
  mounted () {
    if (process.client) {
      window.ethereum.on('accountsChanged', function (accounts) {
        window.location.reload()
      })
      window.ethereum.on('networkChanged', function (accounts) {
        window.location.reload()
      })
      window.ethereum.on('chainIdChanged', function (accounts) {
        window.location.reload()
      })
    }
  },
  methods: {
    toWei8 (num) {
      // console.log(num.mul(100000000).toString())
      // console.log(numMulti(num, 100000000))
      return numMulti(num, 100000000)
    },
    fromWei8 (num) {
      // console.log(num.div(100000000).toString())
      console.log(numDiv(num, 100000000))
      return numDiv(num, 100000000)
    },
    async disConnectAccount () {
      console.log(this.$web3_http.currentProvider)
      // await this.$web3_http.currentProvider.disconnect()
      Vue.prototype.$account = ''
      Vue.prototype.$accounts = []
      this.account = ''
      this.$store.dispatch('updateAccounts', [])
    },
    async initWeb3 () {
      const that = this
      that.promise = new Promise((resolve, reject) => {
        that.reject = reject
        that.resolve = resolve
      })
      const { web3, web3_http, library } = await getWeb3()
      // const networkVersion = parseInt(window.ethereum.networkVersion)
      // if (networkVersion !== 4) {
      //   that.resolve({
      //     code: 403,
      //     message: 'please change BSC network!',
      //     data: []
      //   })
      //   return that.promise
      // }
      try {
        Vue.prototype.$web3_http = web3_http
        Vue.prototype.$web3 = web3
        Vue.prototype.$library = library
        let accounts
        if (typeof window.ethereum !== 'undefined') {
          // 请求账号授权
          try {
            accounts = await window.ethereum.enable()
          } catch (e) {
            accounts = await window.ethereum.request({ method: 'eth_accounts' })
          }
        } else {
          try {
            accounts = await web3_http.eth.getAccounts()
          } catch (e) {
          }
        }
        console.log(accounts)
        Vue.prototype.$account = accounts[0]
        Vue.prototype.$accounts = accounts
        that.account = accounts[0]
        await that.$store.dispatch('updateAccounts', accounts)
        that.initTransactions()
        if (!accounts) {
          setTimeout(function () {
            that.initWeb3()
          }, 500)
        } else {
          if (accounts.length < 1) {
            console.log('no accounts')
          }
          that.resolve({
            code: 200,
            message: 'success',
            data: accounts
          })
          return that.promise
        }
      } catch (err) {
        console.log(err)
        that.resolve(err)
        return that.promise
      }
    },
    async connectAccount () {
      if (!this.$web3_http) {
        return this.initWeb3()
      }
      const that = this
      try {
        let accounts
        if (typeof window.ethereum !== 'undefined') {
          // 请求账号授权
          try {
            accounts = await window.ethereum.enable()
          } catch (e) {
            accounts = await window.ethereum.request({ method: 'eth_accounts' })
          }
        } else {
          try {
            accounts = await this.$web3_http.eth.getAccounts()
          } catch (e) {
          }
        }
        console.log(accounts)
        Vue.prototype.$account = accounts[0]
        Vue.prototype.$accounts = accounts
        that.account = accounts[0]
        await that.$store.dispatch('updateAccounts', accounts)
      } catch (err) {
        console.log('这里有个error')
        console.log(err)
      }
    },
    milliFormat (num) {
      return milliFormat(num)
    },
    keepPoint (num, point, isRound) {
      return keepPoint(num, point, isRound)
    },
    initTransactions () {
      this.$store.dispatch('updateTransactions', {
        hash: null,
        type: TRANSACTION_ACTIONS.INIT
      })
    },
    setAccount (val) {
      this.account = val[0]
    },
    closeLoading () {
      this.$store.dispatch('updateLoading', false)
    },
    openLoading () {
      this.$store.dispatch('updateLoading', true)
    }
  }
}
