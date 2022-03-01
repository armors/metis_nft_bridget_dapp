export const networkRinkeby = {
  chainName: 'Rinkeby',
  chainId: '4',
  chainNameAdd: 'Rinkeby',
  nativeCurrency: {
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18
  },
  rpcUrls: ['https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
  blockExplorerUrls: ['https://rinkeby.etherscan.io/'],
  bridgeFactory: '0x4076654b188345A61Ad93143F7E64c4427B4531f',
  bridge: '0x5126F650ca04bc6cB0C47ea2654e997ae5670120',
  bridgeDomain: 'bridge9545',
  oracleContract: '0xa9BdA5A0881e59587B119685027a601Cae1Cc83d',
  oracleAbi: 'iMVM_DiscountOracle'
}

export const networkStardust = {
  chainName: 'Stardust',
  chainId: '588',
  chainNameAdd: 'Stardust',
  nativeCurrency: {
    name: 'METIS',
    symbol: 'METIS',
    decimals: 18
  },
  rpcUrls: ['https://stardust.metis.io/?owner=588'],
  blockExplorerUrls: ['https://stardust-explorer.metis.io'],
  bridgeFactory: '0x631c6A5f50666f68F4C1A1E8e4c868b04935dD87',
  bridge: '0x831844F04c26241a62eCb074Cc27075bA1686DE9',
  bridgeDomain: 'bridge9545',
  oracleContract: '0x420000000000000000000000000000000000000F',
  oracleAbi: 'iOVM_GasPriceOracle'
}

export const networkEthereum = {
  chainName: 'Ethereum',
  chainId: '1',
  chainNameAdd: 'Ethereum',
  nativeCurrency: {
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18
  },
  rpcUrls: ['https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
  blockExplorerUrls: ['https://etherscan.io/'],
  bridgeFactory: '0x4076654b188345A61Ad93143F7E64c4427B4531f',
  bridge: '0x5126F650ca04bc6cB0C47ea2654e997ae5670120',
  bridgeDomain: 'bridge9545',
  oracleContract: '0xa9BdA5A0881e59587B119685027a601Cae1Cc83d',
  oracleAbi: 'iMVM_DiscountOracle'
}

export const networkAndromeda = {
  chainName: 'Andromeda',
  chainId: '1088',
  chainNameAdd: 'Andromeda',
  nativeCurrency: {
    name: 'METIS',
    symbol: 'METIS',
    decimals: 18
  },
  rpcUrls: ['https://andromeda.metis.io/?owner=1088'],
  blockExplorerUrls: ['https://andromeda-explorer.metis.io'],
  bridgeFactory: '0x631c6A5f50666f68F4C1A1E8e4c868b04935dD87',
  bridge: '0x831844F04c26241a62eCb074Cc27075bA1686DE9',
  bridgeDomain: 'bridge9545',
  oracleContract: '0x420000000000000000000000000000000000000F',
  oracleAbi: 'iOVM_GasPriceOracle'
}
