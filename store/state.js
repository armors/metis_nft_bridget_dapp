export default () => ({
  isLoading: false,
  dialogConnectType: false,
  dialogAccount: false,
  connectType: 'MetaMask',
  accounts: [],
  transactions: [],
  pending_transactions: [],
  confirm_transactions: [],
  lang: {
    name: 'English',
    cur_lang: 'en'
  },
  // langInfo: require('../lang/cn.json'),
  langInfo: require('../lang/en.js').langInfoData(),
  langList: [
    {
      name: '中文',
      cur_lang: 'cn'
    },
    {
      name: 'English',
      cur_lang: 'en'
    }
    // {
    //   name: 'Việt Nam',
    //   cur_lang: 'vn'
    // },
    // {
    //   name: 'Indo',
    //   cur_lang: 'indonesia'
    // },
    // {
    //   name: 'Melayu',
    //   cur_lang: 'malaysia'
    // }
  ]
})
