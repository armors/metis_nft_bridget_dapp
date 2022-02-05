export default {
  getLangInfo (state) {
    return state.langInfo
  },
  getLang (state) {
    return state.lang
  },
  connectType (state) {
    return state.connectType
  },
  dialogAccount (state) {
    return state.dialogAccount
  },
  getLoading (state) {
    return state.isLoading
  },
  dialogNetwork (state) {
    return state.dialogNetwork
  },
  getAccounts (state) {
    return state.accounts
  },
  getTransactions (state) {
    return state.transactions
  }
}
