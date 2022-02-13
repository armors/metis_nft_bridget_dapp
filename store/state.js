export default () => ({
  isLoading: false,
  dialogConnectType: false,
  dialogAccount: false,
  connectType: '',
  authPolisParams: null,
  authUserInfo: null,
  netWork: {
    chainName: 'Mainnet',
    chainId: '1',
    chainName0: 'Ethereum',
    chainId0: '1',
    chainName1: 'Stardust',
    chainId1: '588'
  },
  netWorkList: [
    {
      chainName: 'Mainnet',
      chainId: '1',
      chainName0: 'Ethereum',
      chainId0: '1',
      chainName1: 'Stardust',
      chainId1: '588'
    },
    {
      chainName: 'Testnet',
      chainId: '4',
      chainName0: 'Rinkeby',
      chainId0: '4',
      chainName1: 'Andromeda',
      chainId1: '1088'
    }
    // {
    //   chainName: 'Stardust',
    //   chainId: '588'
    // },
    // {
    //   chainName: 'Andromeda',
    //   chainId: '1088'
    // }
  ],
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
