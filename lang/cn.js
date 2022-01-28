export function langInfoData () {
  return {
    connectWallet: '连接钱包',
    // projectName: 'Venus Investment Protocol',
    projectName: 'VIP',
    tabList: [
      {
        name: '定投',
        path: 'trade'
      },
      {
        name: '定投记录',
        path: 'record'
      }
    ],
    tradeTitle: '定投计划',
    payCurrency: '支付币种',
    getCurrency: '获得币种',
    payPlaceholder: '请输入定投数量',
    amountText: '定投数量',
    tradeStatus: '定投状态',
    tradeStatusActive: '定投中',
    endTime: '结束时间',
    amountCycle: '定投周期',
    amountCycleNumber: '定投期数',
    dingtou: '开始定投',
    cancelDingtou: '取消定投',
    noData: '暂无记录',
    tradeRecord: '定投记录',
    withdraw: '取出',
    approve: '授权',
    sureBtn: '确定',
    msgTitle: '温馨提示',
    totalBalance: '累计定投额度',
    currentNumber: '当前定投人数',
    errorNoSame: '支付币种和兑换币种不能相同',
    errorNoAmount: '请输入定投数量',
    errorOnlyOne: '目前仅支持一种定投计划',
    successText: '定投计划已成功',
    cancelText: '定投计划已取消',
    changeNetwork: '请切换Rinkeby网络继续使用',
    tipImport: 'venus定投协议是一个去中心化的工具，可以帮助用户定期投资代币，所有数据和逻辑被保存和执行在智能合约中，可能存在来自以太坊合约漏洞，请注意并自行承担风险使用。',
    tradeInfo: '该协议数据保存在以太坊区块链上，除了您自己，没有人可以修改或删除它。您可以在记录选项卡中查看并随时取消。'
  }
}
