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
  dialogConnectType (state) {
    return state.dialogConnectType
  },
  getAccounts (state) {
    return state.accounts
  },
  getTransactions (state) {
    return state.transactions
  }
}
