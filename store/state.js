export default () => ({
  isLoading: false,
  dialogAccount: false,
  dialogConfirm: true,
  accounts: [],
  transactions: [],
  currencyArray: ['UNI', 'WETH', 'BTC'],
  currencyPayArray: ['USDT'],
  formaterWei: {
    6: 'mwei',
    12: 'szabo',
    18: 'ether'
  },
  currencyList: [],
  currencyPayList: [],
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
