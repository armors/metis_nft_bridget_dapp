export function langInfoData () {
  return {
    connectWallet: 'connect wallet',
    // projectName: 'Venus Investment Protocol',
    projectName: 'Metis NFT Bridge',
    tabList: [
      {
        // name: 'automatic',
        name: 'create',
        path: 'trade'
      },

      {
        name: 'records',
        path: 'record'
      }
    ],
    tradeTitle: 'automatic investment plan',
    payCurrency: 'payment token',
    getCurrency: 'return token',
    payPlaceholder: 'input your automatic investment amount',
    amountText: 'amount',
    tradeStatus: 'status',
    tradeStatusActive: 'in progress',
    endTime: 'end time',
    amountCycle: 'cycle',
    amountCycleNumber: 'counts',
    dingtou: 'start',
    cancelDingtou: 'cancel',
    noData: 'no records',
    tradeRecord: 'records',
    withdraw: 'withdraw',
    approve: 'approve',
    sureBtn: 'confirm',
    msgTitle: 'Reminder',
    totalBalance: 'total investment amount',
    currentNumber: 'total users',
    errorNoSame: 'payment token and target token can not be the same',
    errorNoAmount: 'please input amount',
    errorOnlyOne: 'currently only support one investment plan',
    successText: 'record successfully',
    cancelText: 'cancel successfully',
    changeNetwork: 'Please Change Rinkeby Network',
    tipImport: 'Venus Investment Protocol is a decentralized tool to help user to investment token periodically,  all the data and logic be saved and executed in smart contract, user\'s token in their wallet, it is probably there is vulnerabilities from  ethereum contract , pls. be aware and try on your own risk. ',
    tradeInfo: 'this protocol data saves on the  ethereum block chain，nobody can modify or remove it but yourself. you can view on record tab and cancel anytime.'
  }
}
