import CheckTransactions from '../utils/web3/checkerTransactions'
import { localTransaction } from '../utils/local/vuexLocal'
export default {
  changeLang (state, langIndex) {
    console.log(langIndex)
    state.lang = langIndex
    state.langInfo = require(`../lang/${state.lang.cur_lang}.js`).langInfoData()
    sessionStorage.setItem('lang', JSON.stringify(state.lang))
  },
  changeNetWork (state, payload) {
    state.netWork = payload
  },
  changePolisInfo (state, payload) {
    state.authPolisParams = payload.authPolisParams
    state.authUserInfo = payload.authUserInfo
    localStorage.setItem('auth-polis-params', JSON.stringify(payload.authPolisParams))
    localStorage.setItem('auth-user-info', JSON.stringify(payload.authUserInfo))
  },
  changeLoading (state, payload) {
    state.isLoading = payload
  },
  changeDialogConnectType (state, payload) {
    state.dialogConnectType = payload
  },
  changeDialogAccount (state, payload) {
    state.dialogAccount = payload
  },
  updateShowTabStatus (state, payload) {
    state.showTabStatus = payload
  },
  changeConnectType (state, payload) {
    state.connectType = payload
    localStorage.setItem('connectWalletType', payload)
  },
  changeAccounts (state, payload) {
    state.accounts = payload
  },
  changeTransactions (state, payload) {
    let local_transaction = []
    if (localTransaction.get()) {
      local_transaction = localTransaction.get()
    }
    const transaction_len = local_transaction.length
    for (let i = 0; i < transaction_len; i++) {
      if (local_transaction[i].hash === payload.hash) {
        const new_transaction = {
          ...local_transaction[i],
          ...payload
        }
        local_transaction.splice(i, 1, new_transaction)
      }
    }
    state.transactions = [...local_transaction]
    state.confirm_transactions = state.transactions.filter(item => item.confirmedTime)
    state.pending_transactions = state.transactions.filter(item => !item.confirmedTime)
    localTransaction.set()
  },
  addTransactions (state, payload) {
    let local_transaction = []
    if (localTransaction.get()) {
      local_transaction = localTransaction.get()
    }
    const same_hash = local_transaction.filter(item => item.hash === payload.hash)
    if (same_hash.length > 0) {
      return console.warn('this transaction hash exiting!!!')
    }
    state.transactions = [
      ...local_transaction,
      ...[{ ...payload }]
    ]
    state.confirm_transactions = state.transactions.filter(item => item.confirmedTime)
    state.pending_transactions = state.transactions.filter(item => !item.confirmedTime)
    localTransaction.set()
  },
  clearTransactions (state) {
    state.transactions = []
    state.confirm_transactions = state.transactions.filter(item => item.confirmedTime)
    state.pending_transactions = state.transactions.filter(item => !item.confirmedTime)
    localTransaction.set()
  },
  initTransactions (state, payload) {
    state.transactions = payload
    state.confirm_transactions = state.transactions.filter(item => item.confirmedTime)
    state.pending_transactions = state.transactions.filter(item => !item.confirmedTime)
    localTransaction.set()
    const check_transactions = new CheckTransactions()
    check_transactions.setInterval()
  }
}
