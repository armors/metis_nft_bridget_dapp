export default () => ({
  isLoading: false,
  dialogConnectType: false,
  dialogAccount: false,
  connectType: '',
  authPolisParams: null,
  authUserInfo: null,
  netWork: {
    chainName: 'Rinkeby',
    chainId: '4',

    chainName0: 'Rinkeby',
    chainId0: '4',
    chainNameAdd0: 'Rinkeby',
    nativeCurrency0: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18
    },
    rpcUrls0: ['https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
    blockExplorerUrls0: ['https://rinkeby.etherscan.io/'],
    bridgeFactory0: '0x4076654b188345A61Ad93143F7E64c4427B4531f',
    bridge0: '0x5126F650ca04bc6cB0C47ea2654e997ae5670120',
    bridgeDomain0: 'bridge9545',
    oracleContract0: '0xa9BdA5A0881e59587B119685027a601Cae1Cc83d',
    oracleAbi0: 'iMVM_DiscountOracle',

    chainName1: 'Stardust',
    chainId1: '588',
    chainNameAdd1: 'Stardust',
    nativeCurrency1: {
      name: 'METIS',
      symbol: 'METIS',
      decimals: 18
    },
    rpcUrls1: ['https://stardust.metis.io/?owner=588'],
    blockExplorerUrls1: ['https://stardust-explorer.metis.io'],
    bridgeFactory1: '0x631c6A5f50666f68F4C1A1E8e4c868b04935dD87',
    bridge1: '0x831844F04c26241a62eCb074Cc27075bA1686DE9',
    bridgeDomain1: 'bridge9545',
    oracleContract1: '0x420000000000000000000000000000000000000F',
    oracleAbi1: 'iOVM_GasPriceOracle'
  },
  netWorkList: [
    // {
    //   chainName: 'Mainnet',
    //   chainId: '1',
    //   chainName0: 'Ethereum',
    //   chainId0: '1',
    //   chainName1: 'Andromeda',
    //   chainId1: '1088',
    //   chainNameAdd1: 'Andromeda',
    //   nativeCurrency1: {
    //     name: 'METIS',
    //     symbol: 'METIS',
    //     decimals: 18
    //   },
    //   rpcUrls1: ['https://andromeda.metis.io/?owner=1088'],
    //   blockExplorerUrls1: ['https://andromeda-explorer.metis.io']
    // },
    // {
    //   chainName: 'Andromeda',
    //   chainId: '1088',
    //   chainName1: 'Ethereum',
    //   chainId1: '1',
    //   chainName0: 'Andromeda',
    //   chainId0: '1088',
    //   chainNameAdd0: 'Andromeda',
    //   nativeCurrency0: {
    //     name: 'METIS',
    //     symbol: 'METIS',
    //     decimals: 18
    //   },
    //   rpcUrls0: ['https://andromeda.metis.io/?owner=1088'],
    //   blockExplorerUrls0: ['https://andromeda-explorer.metis.io']
    // },
    {
      chainName: 'Rinkeby',
      chainId: '4',

      chainName0: 'Rinkeby',
      chainId0: '4',
      chainNameAdd0: 'Rinkeby',
      nativeCurrency0: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18
      },
      rpcUrls0: ['https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
      blockExplorerUrls0: ['https://rinkeby.etherscan.io/'],
      bridgeFactory0: '0x4076654b188345A61Ad93143F7E64c4427B4531f',
      bridge0: '0x5126F650ca04bc6cB0C47ea2654e997ae5670120',
      bridgeDomain0: 'bridge9545',
      oracleContract0: '0xa9BdA5A0881e59587B119685027a601Cae1Cc83d',
      oracleAbi0: 'iMVM_DiscountOracle',

      chainName1: 'Stardust',
      chainId1: '588',
      chainNameAdd1: 'Stardust',
      nativeCurrency1: {
        name: 'METIS',
        symbol: 'METIS',
        decimals: 18
      },
      rpcUrls1: ['https://stardust.metis.io/?owner=588'],
      blockExplorerUrls1: ['https://stardust-explorer.metis.io'],
      bridgeFactory1: '0x631c6A5f50666f68F4C1A1E8e4c868b04935dD87',
      bridge1: '0x831844F04c26241a62eCb074Cc27075bA1686DE9',
      bridgeDomain1: 'bridge9545',
      oracleContract1: '0x420000000000000000000000000000000000000F',
      oracleAbi1: 'iOVM_GasPriceOracle'
    },
    {
      chainName: 'Stardust',
      chainId: '588',

      chainName1: 'Rinkeby',
      chainId1: '4',
      chainNameAdd1: 'Rinkeby',
      nativeCurrency1: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18
      },
      rpcUrls1: ['https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
      blockExplorerUrls1: ['https://rinkeby.etherscan.io/'],
      bridgeFactory1: '0x4076654b188345A61Ad93143F7E64c4427B4531f',
      bridge1: '0x5126F650ca04bc6cB0C47ea2654e997ae5670120',
      bridgeDomain1: 'bridge9545',
      oracleContract1: '0xa9BdA5A0881e59587B119685027a601Cae1Cc83d',
      oracleAbi1: 'iMVM_DiscountOracle',

      chainName0: 'Stardust',
      chainId0: '588',
      chainNameAdd0: 'Stardust',
      nativeCurrency0: {
        name: 'METIS',
        symbol: 'METIS',
        decimals: 18
      },
      rpcUrls0: ['https://stardust.metis.io/?owner=588'],
      blockExplorerUrls0: ['https://stardust-explorer.metis.io'],
      bridgeFactory0: '0x631c6A5f50666f68F4C1A1E8e4c868b04935dD87',
      bridge0: '0x831844F04c26241a62eCb074Cc27075bA1686DE9',
      bridgeDomain0: 'bridge9545',
      oracleContract0: '0x420000000000000000000000000000000000000F',
      oracleAbi0: 'iOVM_GasPriceOracle'
    }
    // {
    //   chainName: '9545',
    //   chainId: '31337',
    //
    //   chainName0: '9545',
    //   chainId0: '31337',
    //   chainNameAdd0: '9545',
    //   nativeCurrency0: {
    //     name: 'ETH',
    //     symbol: 'ETH',
    //     decimals: 18
    //   },
    //   rpcUrls0: ['http://localhost:9545?owner=31337'],
    //   blockExplorerUrls0: ['http://localhost:9545'],
    //   bridgeFactory0: '0xcbEAF3BDe82155F56486Fb5a1072cb8baAf547cc',
    //   bridge0: '0x1429859428C0aBc9C2C47C8Ee9FBaf82cFA0F20f',
    //   bridgeDomain0: 'bridge9545',
    //   oracleContract0: '0xa9BdA5A0881e59587B119685027a601Cae1Cc83d',
    //   oracleAbi0: 'iMVM_DiscountOracle',
    //
    //   chainName1: '8545',
    //   chainId1: '1088',
    //   chainNameAdd1: '8545',
    //   nativeCurrency1: {
    //     name: 'METIS',
    //     symbol: 'METIS',
    //     decimals: 18
    //   },
    //   rpcUrls1: ['http://localhost:8545/?owner=1088'],
    //   blockExplorerUrls1: ['http://localhost:8545'],
    //   bridgeFactory1: '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9',
    //   bridge1: '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9',
    //   bridgeDomain1: 'bridge8545',
    //   oracleContract1: '0x420000000000000000000000000000000000000F',
    //   oracleAbi1: 'iOVM_GasPriceOracle'
    // },
    // {
    //   chainName: '8545',
    //   chainId: '1088',
    //
    //   chainName1: '9545',
    //   chainId1: '31337',
    //   chainNameAdd1: '9545',
    //   nativeCurrency1: {
    //     name: 'ETH',
    //     symbol: 'ETH',
    //     decimals: 18
    //   },
    //   rpcUrls1: ['http://localhost:9545?owner=31337'],
    //   blockExplorerUrls1: ['http://localhost:9545'],
    //   bridgeFactory1: '0xcbEAF3BDe82155F56486Fb5a1072cb8baAf547cc',
    //   bridge1: '0x1429859428C0aBc9C2C47C8Ee9FBaf82cFA0F20f',
    //   bridgeDomain1: 'bridge9545',
    //   oracleContract1: '0xa9BdA5A0881e59587B119685027a601Cae1Cc83d',
    //   oracleAbi1: 'iMVM_DiscountOracle',
    //
    //   chainName0: '8545',
    //   chainId0: '1088',
    //   chainNameAdd0: '8545',
    //   nativeCurrency0: {
    //     name: 'METIS',
    //     symbol: 'METIS',
    //     decimals: 18
    //   },
    //   rpcUrls0: ['http://localhost:8545/?owner=1088'],
    //   blockExplorerUrls0: ['http://localhost:8545'],
    //   bridgeFactory0: '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9',
    //   bridge0: '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9',
    //   bridgeDomain0: 'bridge8545',
    //   oracleContract0: '0x420000000000000000000000000000000000000F',
    //   oracleAbi0: 'iOVM_GasPriceOracle'
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
  ]
})
