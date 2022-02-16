import Vue from 'vue'
import { mapGetters } from 'vuex'
import { getWeb3 } from '../utils/web3/getWeb3'
import { Oauth2Client, HttpClient } from '@metis.io/middleware-client'
import axios from 'axios'
import { TRANSACTION_ACTIONS } from '../utils/web3/constants'
import { keepPoint, milliFormat } from '../utils/function'
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
    async isApprove (args, tokenContract) {
      return await tokenContract.getApproved(args)
    },
    switchNetWork (network, successCallback, errorCallback) {
      this.$web3_http && window.ethereum && window.ethereum
        .request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: this.$web3_http.utils.numberToHex(network.chainId) }]
        })
        .then(() => {
          setTimeout(() => {
            successCallback && successCallback()
          }, 3000)
        })
        .catch((e) => {
          if (e?.code && e.code === 4902) {
            this.$web3_http && window.ethereum && window.ethereum
              .request({
                method: 'wallet_addEthereumChain',
                params: [
                  {
                    chainId: this.$web3_http.utils.numberToHex(network.chainId),
                    chainName: network.chainNameAdd,
                    nativeCurrency: network.nativeCurrency,
                    rpcUrls: network.rpcUrls,
                    blockExplorerUrls: network.blockExplorerUrls
                  }
                ]
              })
              .then(() => {
                setTimeout(() => {
                  successCallback && successCallback()
                }, 3000)
              })
              .catch((e) => {
                // this.$message.error(e?.data?.message || e?.message ? e.message : 'wrap nft error', 3)
                errorCallback && errorCallback(e)
              })
          } else {
            // this.$message.error(e?.data?.message || e?.message ? e.message : 'wrap nft error', 3)
            errorCallback && errorCallback(e)
          }
        })
    },
    getChainName (network) {
      return network !== null ? network.chainName : '--'
    },
    async loginMetis () {
      await this.initEth()
      if (localStorage.getItem('auth-polis-params') && localStorage.getItem('auth-user-info')) {
        const authPolisParams = JSON.parse(localStorage.getItem('auth-polis-params'))
        const authUserInfo = JSON.parse(localStorage.getItem('auth-user-info'))
        if (new Date().getTime() > authPolisParams.expire_at) {
          localStorage.removeItem('connectWalletType')
          localStorage.removeItem('auth-polis-params')
          localStorage.removeItem('auth-user-info')
          this.$store.dispatch('updateConnectType', '')
        } else {
          const httpClient = new HttpClient(
            process.env.NEXT_PUBLIC_APP_ID || '',
            authPolisParams.access_token,
            authPolisParams.refresh_token,
            authPolisParams.expires_in
          )
          console.log(httpClient)
          Vue.prototype.$httpClient = httpClient
          this.$store.dispatch('updatePolisInfo', {
            authPolisParams,
            authUserInfo
          })
          Vue.prototype.$account = authUserInfo.eth_address
          Vue.prototype.$accounts = [authUserInfo.eth_address]
          this.account = authUserInfo.eth_address
          this.$store.dispatch('updateConnectType', 'Polis')
          this.$store.dispatch('updateAccounts', [authUserInfo.eth_address])
        }
      } else {
        this.getPolis()
      }
    },
    getPolis () {
      if (this.$route.query?.code) {
        this.fetchData()
      } else {
        const oauth2Client = new Oauth2Client()
        oauth2Client.startOauth2(
          process.env.NEXT_PUBLIC_APP_ID || '',
          `${process.env.NEXT_PUBLIC_URL}${this.$route.path}`,
          false,
          true
        )
        console.log(oauth2Client)
      }
    },
    async fetchData () {
      const query = this.$route.query
      try {
        if (!query.code) {
          console.log('error code')
          return
        }
        const res = await axios.get(
          `https://polis.metis.io/api/v1/oauth2/access_token?code=${query.code}&app_key=${process.env.APP_SECRET}&app_id=${process.env.NEXT_PUBLIC_APP_ID}`
        )
        console.log(res)
        if (res.status === 200 && res.data && res.data.code === 200) {
          // accessToken = res.data.data.access_token
          // refreshToken = res.data.data.refresh_token
          // expiresIn = res.data.data.expires_in
          const authPolisParams = {
            ...res.data.data,
            ...{
              expire_at: new Date().getTime() + res.data.data.expires_in * 100
            }
          }
          const httpClient = new HttpClient(
            process.env.NEXT_PUBLIC_APP_ID || '',
            authPolisParams.access_token,
            authPolisParams.refresh_token,
            authPolisParams.expires_in
          )
          console.log(httpClient)
          Vue.prototype.$httpClient = httpClient
          const oauth2Client = new Oauth2Client()
          const authUserInfo = await oauth2Client.getUserInfoAsync(authPolisParams.access_token)
          console.log(authUserInfo)
          this.$store.dispatch('updatePolisInfo', {
            authPolisParams,
            authUserInfo
          })
          Vue.prototype.$account = authUserInfo.eth_address
          Vue.prototype.$accounts = [authUserInfo.eth_address]
          this.account = authUserInfo.eth_address
          this.$store.dispatch('updateConnectType', 'Polis')
          this.$store.dispatch('updateAccounts', [authUserInfo.eth_address])
          this.$router.replace({ path: this.$route.path })
        } else if (res.status === 200 && res.data) {
          console.log(res.data.msg)
          this.$message.error(res.data.msg, 4)
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
    async initEth () {
      const { web3, web3_http, library } = await getWeb3()
      Vue.prototype.$web3_http = web3_http
      Vue.prototype.$web3 = web3
      Vue.prototype.$library = library
    },
    async initWeb3 () {
      const that = this
      that.promise = new Promise((resolve, reject) => {
        that.reject = reject
        that.resolve = resolve
      })
      await this.initEth()
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
      await this.initEth()
      if (this.$store?.state && window.ethereum.networkVersion) {
        const networkVersion = window.ethereum.networkVersion
        console.log(networkVersion)
        const network = this.$store.state.netWorkList.filter(item => item.chainId === networkVersion)
        console.log(network)
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
