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
  oracleContract: '0xa9BdA5A0881e59587B119685027a601Cae1Cc83d',
  oracleAbi: 'iMVM_DiscountOracle',
  domainInfo: {
    bridgeDomain: 'bridge1domain',
    bridgeFactory: 'bridgefactory1',
    oracleAbi: 'imvm_discountoracle',
    token721: 'erc721_1',
    token1155: 'erc1155_1'
  }
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
  blockExplorerUrls: ['https://stardust-explorer.metis.io/'],
  bridgeFactory: '0x631c6A5f50666f68F4C1A1E8e4c868b04935dD87',
  bridge: '0x831844F04c26241a62eCb074Cc27075bA1686DE9',
  oracleContract: '0x420000000000000000000000000000000000000F',
  oracleAbi: 'iOVM_GasPriceOracle',
  domainInfo: {
    bridgeDomain: 'bridge2domain',
    bridgeFactory: 'bridgefactory2',
    oracleAbi: 'iovm_gaspriceoracle',
    token721: 'erc721_2',
    token1155: 'erc1155_2'
  }
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
  bridgeFactory: '0xc6c9efe77E8De46452DDfFcE8718a8186c661380',
  bridge: '0x5EA23Cb3D609F4522a21ADcC9Ca366e76C23c40f',
  oracleContract: '0xC8953ca384b4AdC8B1b11B030Afe2F05471664b0',
  oracleAbi: 'iMVM_DiscountOracle',
  domainInfo: {
    bridgeDomain: 'bridge1domain',
    bridgeFactory: 'bridgefactory1',
    oracleAbi: 'imvm_discountoracle',
    token721: 'erc721_1',
    token1155: 'erc1155_1'
  }
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
  blockExplorerUrls: ['https://andromeda-explorer.metis.io/'],
  bridgeFactory: '0xDb3439640a0C8273E9c81bB2D9D4fa34fa180e17',
  bridge: '0xB64585Bd0d686EaeD47eE986190eA8abE610ae33',
  oracleContract: '0x420000000000000000000000000000000000000F',
  oracleAbi: 'iOVM_GasPriceOracle',
  domainInfo: {
    bridgeDomain: 'bridge2domain',
    bridgeFactory: 'bridgefactory2',
    oracleAbi: 'iovm_gaspriceoracle',
    token721: 'erc721_1',
    token1155: 'erc1155_1'
  }
}
