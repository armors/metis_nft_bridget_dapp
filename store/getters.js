export default {
  getLangInfo (state) {
    return state.langInfo
  },
  getLang (state) {
    return state.lang
  },
  getLoading (state) {
    return state.isLoading
  },
  getDialogAccount (state) {
    return state.dialogAccount
  },
  getAccounts (state) {
    return state.accounts
  },
  getTransactions (state) {
    return state.transactions
  },
  getDialogConfirm (state) {
    return state.dialogConfirm
  }
}
