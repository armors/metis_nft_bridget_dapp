import {
  networkRinkeby,
  networkStardust,
  networkEthereum,
  networkAndromeda
} from './network'

export default () => ({
  isLoading: false,
  dialogConnectType: false,
  dialogAccount: false,
  connectType: '',
  authPolisParams: null,
  authUserInfo: null,
  netWork: {
    chainName: networkRinkeby.chainName,
    chainId: networkRinkeby.chainId,

    chainName0: networkRinkeby.chainName,
    chainId0: networkRinkeby.chainId,
    chainNameAdd0: networkRinkeby.chainNameAdd,
    nativeCurrency0: networkRinkeby.nativeCurrency,
    rpcUrls0: networkRinkeby.rpcUrls,
    blockExplorerUrls0: networkRinkeby.blockExplorerUrls,
    bridgeFactory0: networkRinkeby.bridgeFactory,
    bridge0: networkRinkeby.bridge,
    domainInfo0: networkRinkeby.domainInfo,
    oracleContract0: networkRinkeby.oracleContract,
    oracleAbi0: networkRinkeby.oracleAbi,

    chainName1: networkStardust.chainName,
    chainId1: networkStardust.chainId,
    chainNameAdd1: networkStardust.chainName,
    nativeCurrency1: networkStardust.nativeCurrency,
    rpcUrls1: networkStardust.rpcUrls,
    blockExplorerUrls1: networkStardust.blockExplorerUrls,
    bridgeFactory1: networkStardust.bridgeFactory,
    bridge1: networkStardust.bridge,
    domainInfo1: networkStardust.domainInfo,
    oracleContract1: networkStardust.oracleContract,
    oracleAbi1: networkStardust.oracleAbi
  },
  netWorkList: [
    {
      chainName: networkEthereum.chainName,
      chainId: networkEthereum.chainId,

      chainName0: networkEthereum.chainName,
      chainId0: networkEthereum.chainId,
      chainNameAdd0: networkEthereum.chainNameAdd,
      nativeCurrency0: networkEthereum.nativeCurrency,
      rpcUrls0: networkEthereum.rpcUrls,
      blockExplorerUrls0: networkEthereum.blockExplorerUrls,
      bridgeFactory0: networkEthereum.bridgeFactory,
      bridge0: networkEthereum.bridge,
      domainInfo0: networkEthereum.domainInfo,
      oracleContract0: networkEthereum.oracleContract,
      oracleAbi0: networkEthereum.oracleAbi,

      chainName1: networkAndromeda.chainName,
      chainId1: networkAndromeda.chainId,
      chainNameAdd1: networkAndromeda.chainName,
      nativeCurrency1: networkAndromeda.nativeCurrency,
      rpcUrls1: networkAndromeda.rpcUrls,
      blockExplorerUrls1: networkAndromeda.blockExplorerUrls,
      bridgeFactory1: networkAndromeda.bridgeFactory,
      bridge1: networkAndromeda.bridge,
      domainInfo1: networkAndromeda.domainInfo,
      oracleContract1: networkAndromeda.oracleContract,
      oracleAbi1: networkAndromeda.oracleAbi
    },
    {
      chainName: networkAndromeda.chainName,
      chainId: networkAndromeda.chainId,

      chainName1: networkEthereum.chainName,
      chainId1: networkEthereum.chainId,
      chainNameAdd1: networkEthereum.chainName,
      nativeCurrency1: networkEthereum.nativeCurrency,
      rpcUrls1: networkEthereum.rpcUrls,
      blockExplorerUrls1: networkEthereum.blockExplorerUrls,
      bridgeFactory1: networkEthereum.bridgeFactory,
      bridge1: networkEthereum.bridge,
      domainInfo1: networkEthereum.domainInfo,
      oracleContract1: networkEthereum.oracleContract,
      oracleAbi1: networkEthereum.oracleAbi,

      chainName0: networkAndromeda.chainName,
      chainId0: networkAndromeda.chainId,
      chainNameAdd0: networkAndromeda.chainName,
      nativeCurrency0: networkAndromeda.nativeCurrency,
      rpcUrls0: networkAndromeda.rpcUrls,
      blockExplorerUrls0: networkAndromeda.blockExplorerUrls,
      bridgeFactory0: networkAndromeda.bridgeFactory,
      bridge0: networkAndromeda.bridge,
      domainInfo0: networkAndromeda.domainInfo,
      oracleContract0: networkAndromeda.oracleContract,
      oracleAbi0: networkAndromeda.oracleAbi
    },
    {
      chainName: networkRinkeby.chainName,
      chainId: networkRinkeby.chainId,

      chainName0: networkRinkeby.chainName,
      chainId0: networkRinkeby.chainId,
      chainNameAdd0: networkRinkeby.chainNameAdd,
      nativeCurrency0: networkRinkeby.nativeCurrency,
      rpcUrls0: networkRinkeby.rpcUrls,
      blockExplorerUrls0: networkRinkeby.blockExplorerUrls,
      bridgeFactory0: networkRinkeby.bridgeFactory,
      bridge0: networkRinkeby.bridge,
      domainInfo0: networkRinkeby.domainInfo,
      oracleContract0: networkRinkeby.oracleContract,
      oracleAbi0: networkRinkeby.oracleAbi,

      chainName1: networkStardust.chainName,
      chainId1: networkStardust.chainId,
      chainNameAdd1: networkStardust.chainName,
      nativeCurrency1: networkStardust.nativeCurrency,
      rpcUrls1: networkStardust.rpcUrls,
      blockExplorerUrls1: networkStardust.blockExplorerUrls,
      bridgeFactory1: networkStardust.bridgeFactory,
      bridge1: networkStardust.bridge,
      domainInfo1: networkStardust.domainInfo,
      oracleContract1: networkStardust.oracleContract,
      oracleAbi1: networkStardust.oracleAbi
    },
    {
      chainName: networkStardust.chainName,
      chainId: networkStardust.chainId,

      chainName1: networkRinkeby.chainName,
      chainId1: networkRinkeby.chainId,
      chainNameAdd1: networkRinkeby.chainName,
      nativeCurrency1: networkRinkeby.nativeCurrency,
      rpcUrls1: networkRinkeby.rpcUrls,
      blockExplorerUrls1: networkRinkeby.blockExplorerUrls,
      bridgeFactory1: networkRinkeby.bridgeFactory,
      bridge1: networkRinkeby.bridge,
      domainInfo1: networkRinkeby.domainInfo,
      oracleContract1: networkRinkeby.oracleContract,
      oracleAbi1: networkRinkeby.oracleAbi,

      chainName0: networkStardust.chainName,
      chainId0: networkStardust.chainId,
      chainNameAdd0: networkStardust.chainName,
      nativeCurrency0: networkStardust.nativeCurrency,
      rpcUrls0: networkStardust.rpcUrls,
      blockExplorerUrls0: networkStardust.blockExplorerUrls,
      bridgeFactory0: networkStardust.bridgeFactory,
      bridge0: networkStardust.bridge,
      domainInfo0: networkStardust.domainInfo,
      oracleContract0: networkStardust.oracleContract,
      oracleAbi0: networkStardust.oracleAbi
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
