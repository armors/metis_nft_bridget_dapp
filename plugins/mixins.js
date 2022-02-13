import Vue from 'vue'
import { mapGetters } from 'vuex'
import { getWeb3 } from '../utils/web3/getWeb3'
import { Oauth2Client, HttpClient } from '@metis.io/middleware-client'
import axios from 'axios'
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
      const that = this
      window.ethereum.on('accountsChanged', function (accounts) {
        window.location.reload()
      })
      window.ethereum.on('networkChanged', function (accounts) {
        that.initNetWork()
        // window.location.reload()
      })
      window.ethereum.on('chainIdChanged', function (accounts) {
        that.initNetWork()
        // window.location.reload()
      })
    }
  },
  methods: {
    getChainName (network) {
      return network !== null ? network.chainName : '--'
    },
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
    loginMetis () {
      const authPolisParams = { accessToken: '93c6d73260c44cd8aa17c22da4db3bcf', refreshToken: '14a0264776214959adb9fa0845cae3fa', expiresIn: 43200, expireAt: 1644767979332 }
      const authUserInfo = { balance: '', display_name: 'Test1_nft', email: 'liupeng@yasite.net', eth_address: '0x5d6576ca71D1911310d841a0fBb1018211bb0E54', last_login_time: 1644724776263, username: 'Test1_nft' }
      this.$store.dispatch('updatePolisInfo', {
        authPolisParams,
        authUserInfo
      })
      this.$store.dispatch('updateConnectType', 'Polis')
      this.$store.dispatch('updateAccounts', [authUserInfo.eth_address])
      return
      const oauth2Client = new Oauth2Client()
      oauth2Client.startOauth2(
        process.env.NEXT_PUBLIC_APP_ID || '',
        `${process.env.NEXT_PUBLIC_URL}`,
        true,
        true
      )
      console.log(oauth2Client)
    },
    async fetchData () {
      let accessToken
      let refreshToken
      let expiresIn
      const query = {
        code: 13132131313
      }
      try {
        if (!query.code) {
          console.log('error code')
          return
        }
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_URL}/api/metis?code=${query.code}`
        )
        console.log(res)
        if (res.status === 200 && res.data && res.data.code === 200) {
          accessToken = res.data.data.access_token
          refreshToken = res.data.data.refresh_token
          expiresIn = res.data.data.expires_in
          const httpClient = new HttpClient(
            process.env.NEXT_PUBLIC_APP_ID || '',
            accessToken,
            refreshToken,
            expiresIn
          )
          console.log(httpClient)
          const oauth2Client = new Oauth2Client()
          console.log(await oauth2Client.getUserInfoAsync(accessToken))
        } else if (res.status === 200 && res.data) {
          console.log(res.data.msg)
        } else {
          console.log('code error')
          console.log(res)
        }
      } catch (error) {
        console.error(error)
      }
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
      const networkVersion = parseInt(window.ethereum.networkVersion)
      console.log(networkVersion)
      console.log(window.ethereum.networkVersion)
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
        let accounts = []
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
        this.$store.dispatch('updateConnectType', 'MetaMask')
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
    async initNetWork () {
      if (this.$store?.state && this.$store.state.connectType === 'MetaMask') {
        await this.initWeb3()
        const networkVersion = window.ethereum.networkVersion
        console.log(networkVersion)
        const network = this.$store.state.netWorkList.filter(item => item.chainId === networkVersion)
        if (network.length > 0) {
          this.$store.dispatch('updateNetWork', network[0])
        }
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
        this.$store.dispatch('updateConnectType', 'MetaMask')
        this.initNetWork()
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
