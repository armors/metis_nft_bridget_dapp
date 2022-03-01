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
    {
      chainName: 'Mainnet',
      chainId: '1',
      chainName0: 'Ethereum',
      chainId0: '1',
      chainNameAdd0: 'Ethereum',
      nativeCurrency0: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18
      },
      rpcUrls0: ['https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
      blockExplorerUrls0: ['https://etherscan.io/'],
      bridgeFactory0: '0x4076654b188345A61Ad93143F7E64c4427B4531f',
      bridge0: '0x5126F650ca04bc6cB0C47ea2654e997ae5670120',
      bridgeDomain0: 'bridge9545',
      oracleContract0: '0xa9BdA5A0881e59587B119685027a601Cae1Cc83d',
      oracleAbi0: 'iMVM_DiscountOracle',

      chainName1: 'Andromeda',
      chainId1: '1088',
      chainNameAdd1: 'Andromeda',
      nativeCurrency1: {
        name: 'METIS',
        symbol: 'METIS',
        decimals: 18
      },
      rpcUrls1: ['https://andromeda.metis.io/?owner=1088'],
      blockExplorerUrls1: ['https://andromeda-explorer.metis.io'],
      bridgeFactory1: '0x631c6A5f50666f68F4C1A1E8e4c868b04935dD87',
      bridge1: '0x831844F04c26241a62eCb074Cc27075bA1686DE9',
      bridgeDomain1: 'bridge9545',
      oracleContract1: '0x420000000000000000000000000000000000000F',
      oracleAbi1: 'iOVM_GasPriceOracle'
    },
    {
      chainName: 'Andromeda',
      chainId: '1088',

      chainName1: 'Ethereum',
      chainId1: '1',
      chainNameAdd1: 'Ethereum',
      nativeCurrency1: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18
      },
      rpcUrls1: ['https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
      blockExplorerUrls1: ['https://etherscan.io/'],
      bridgeFactory1: '0x4076654b188345A61Ad93143F7E64c4427B4531f',
      bridge1: '0x5126F650ca04bc6cB0C47ea2654e997ae5670120',
      bridgeDomain1: 'bridge9545',
      oracleContract1: '0xa9BdA5A0881e59587B119685027a601Cae1Cc83d',
      oracleAbi1: 'iMVM_DiscountOracle',

      chainName0: 'Andromeda',
      chainId0: '1088',
      chainNameAdd0: 'Andromeda',
      nativeCurrency0: {
        name: 'METIS',
        symbol: 'METIS',
        decimals: 18
      },
      rpcUrls0: ['https://andromeda.metis.io/?owner=1088'],
      blockExplorerUrls0: ['https://andromeda-explorer.metis.io'],
      bridgeFactory0: '0x631c6A5f50666f68F4C1A1E8e4c868b04935dD87',
      bridge0: '0x831844F04c26241a62eCb074Cc27075bA1686DE9',
      bridgeDomain0: 'bridge9545',
      oracleContract0: '0x420000000000000000000000000000000000000F',
      oracleAbi0: 'iOVM_GasPriceOracle'
    },
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
