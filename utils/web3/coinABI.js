const COIN_ABI = {
  controller: [
    {
      inputs: [
        {
          internalType: 'address',
          name: '_owner',
          type: 'address'
        }
      ],
      stateMutability: 'nonpayable',
      type: 'constructor'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        }
      ],
      name: 'ManagerList',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        }
      ],
      name: 'MarketList',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: '_name',
          type: 'string'
        },
        {
          internalType: 'address',
          name: '_cAddr',
          type: 'address'
        }
      ],
      name: 'addAddress',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: '_name',
          type: 'string'
        },
        {
          internalType: 'address',
          name: '_contractAddr',
          type: 'address'
        }
      ],
      name: 'addContract',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_addrM',
          type: 'address'
        }
      ],
      name: 'addManager',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_addrM',
          type: 'address'
        }
      ],
      name: 'addMarket',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string'
        }
      ],
      name: 'addrList',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_owner',
          type: 'address'
        }
      ],
      name: 'changeOwner',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: '_name',
          type: 'string'
        }
      ],
      name: 'delContract',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_addrM',
          type: 'address'
        }
      ],
      name: 'delManager',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_addrM',
          type: 'address'
        }
      ],
      name: 'delMarket',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: '_name',
          type: 'string'
        }
      ],
      name: 'getAddr',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_mAddr',
          type: 'address'
        }
      ],
      name: 'isManager',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_mAddr',
          type: 'address'
        }
      ],
      name: 'isMarket',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    }
  ],
  market: [
    { inputs: [{ internalType: 'uint256', name: '_oid', type: 'uint256' }], name: 'cancelOrder', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'uint256', name: '_price', type: 'uint256' }, { internalType: 'address', name: '_tokenIn', type: 'address' }, { internalType: 'address', name: '_tokenOut', type: 'address' }, { internalType: 'uint256', name: '_cycle', type: 'uint256' }, { internalType: 'uint256', name: '_endTime', type: 'uint256' }], name: 'createOrder', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'contract VenusController', name: '_addrc', type: 'address' }], stateMutability: 'nonpayable', type: 'constructor' }, { anonymous: false, inputs: [{ indexed: false, internalType: 'uint256', name: '_oid', type: 'uint256' }], name: 'CancelOrder', type: 'event' }, { anonymous: false, inputs: [{ indexed: false, internalType: 'uint256', name: '_oid', type: 'uint256' }, { indexed: false, internalType: 'address', name: 'user', type: 'address' }, { indexed: false, internalType: 'uint256', name: '_price', type: 'uint256' }, { indexed: false, internalType: 'address', name: '_tokenIn', type: 'address' }, { indexed: false, internalType: 'address', name: '_tokenOut', type: 'address' }, { indexed: false, internalType: 'uint256', name: '_cycle', type: 'uint256' }, { indexed: false, internalType: 'uint256', name: '_endTime', type: 'uint256' }], name: 'CreateOrder', type: 'event' }, { anonymous: false, inputs: [{ indexed: false, internalType: 'address', name: '_user', type: 'address' }, { indexed: false, internalType: 'bool', name: '_canSell', type: 'bool' }], name: 'SetBlackUser', type: 'event' }, { inputs: [{ internalType: 'uint256', name: '_feeRate', type: 'uint256' }], name: 'setFeeRate', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ internalType: 'uint256', name: '_oid', type: 'uint256' }], name: 'trigOrder', outputs: [], stateMutability: 'nonpayable', type: 'function' }, { inputs: [], name: 'addrc', outputs: [{ internalType: 'contract VenusController', name: '', type: 'address' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'feeRate', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'getTradingSum', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'getUserCount', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'string', name: '_name', type: 'string' }], name: 'nameAddr', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'orderID', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'orders', outputs: [{ internalType: 'address', name: 'owner', type: 'address' }, { internalType: 'uint256', name: 'price', type: 'uint256' }, { internalType: 'address', name: 'tokenIn', type: 'address' }, { internalType: 'address', name: 'tokenOut', type: 'address' }, { internalType: 'uint256', name: 'stepTime', type: 'uint256' }, { internalType: 'uint256', name: 'endTime', type: 'uint256' }, { internalType: 'uint256', name: 'cycle', type: 'uint256' }, { internalType: 'bool', name: 'status', type: 'bool' }], stateMutability: 'view', type: 'function' }, { inputs: [], name: 'tradingSum', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }, { inputs: [{ internalType: 'address', name: '', type: 'address' }], name: 'userToOrder', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' }],
  USDT: [
    { inputs: [{ internalType: 'uint256', name: '_initialAmount', type: 'uint256' }, { internalType: 'string', name: '_tokenName', type: 'string' }, { internalType: 'uint8', name: '_decimalUnits', type: 'uint8' }, { internalType: 'string', name: '_tokenSymbol', type: 'string' }], payable: false, stateMutability: 'nonpayable', type: 'constructor' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'address', name: 'owner', type: 'address' }, { indexed: true, internalType: 'address', name: 'spender', type: 'address' }, { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }], name: 'Approval', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'address', name: 'from', type: 'address' }, { indexed: true, internalType: 'address', name: 'to', type: 'address' }, { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }], name: 'Transfer', type: 'event' }, { constant: false, inputs: [{ internalType: 'address', name: '_owner', type: 'address' }, { internalType: 'uint256', name: 'value', type: 'uint256' }], name: 'allocateTo', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: true, inputs: [{ internalType: 'address', name: '', type: 'address' }, { internalType: 'address', name: '', type: 'address' }], name: 'allowance', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [{ internalType: 'address', name: '_spender', type: 'address' }, { internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'approve', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: true, inputs: [{ internalType: 'address', name: '', type: 'address' }], name: 'balanceOf', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'decimals', outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'name', outputs: [{ internalType: 'string', name: '', type: 'string' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'symbol', outputs: [{ internalType: 'string', name: '', type: 'string' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'totalSupply', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [{ internalType: 'address', name: 'dst', type: 'address' }, { internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'transfer', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: false, inputs: [{ internalType: 'address', name: 'src', type: 'address' }, { internalType: 'address', name: 'dst', type: 'address' }, { internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'transferFrom', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function' }],
  UNI: [
    { inputs: [{ internalType: 'address', name: 'account', type: 'address' }, { internalType: 'address', name: 'minter_', type: 'address' }, { internalType: 'uint256', name: 'mintingAllowedAfter_', type: 'uint256' }], payable: false, stateMutability: 'nonpayable', type: 'constructor' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'address', name: 'owner', type: 'address' }, { indexed: true, internalType: 'address', name: 'spender', type: 'address' }, { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'Approval', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'address', name: 'delegator', type: 'address' }, { indexed: true, internalType: 'address', name: 'fromDelegate', type: 'address' }, { indexed: true, internalType: 'address', name: 'toDelegate', type: 'address' }], name: 'DelegateChanged', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'address', name: 'delegate', type: 'address' }, { indexed: false, internalType: 'uint256', name: 'previousBalance', type: 'uint256' }, { indexed: false, internalType: 'uint256', name: 'newBalance', type: 'uint256' }], name: 'DelegateVotesChanged', type: 'event' }, { anonymous: false, inputs: [{ indexed: false, internalType: 'address', name: 'minter', type: 'address' }, { indexed: false, internalType: 'address', name: 'newMinter', type: 'address' }], name: 'MinterChanged', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'address', name: 'from', type: 'address' }, { indexed: true, internalType: 'address', name: 'to', type: 'address' }, { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'Transfer', type: 'event' }, { constant: true, inputs: [], name: 'DELEGATION_TYPEHASH', outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'DOMAIN_TYPEHASH', outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'PERMIT_TYPEHASH', outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [{ internalType: 'address', name: 'account', type: 'address' }, { internalType: 'address', name: 'spender', type: 'address' }], name: 'allowance', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [{ internalType: 'address', name: 'spender', type: 'address' }, { internalType: 'uint256', name: 'rawAmount', type: 'uint256' }], name: 'approve', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: true, inputs: [{ internalType: 'address', name: 'account', type: 'address' }], name: 'balanceOf', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [{ internalType: 'address', name: '', type: 'address' }, { internalType: 'uint32', name: '', type: 'uint32' }], name: 'checkpoints', outputs: [{ internalType: 'uint32', name: 'fromBlock', type: 'uint32' }, { internalType: 'uint96', name: 'votes', type: 'uint96' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'decimals', outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [{ internalType: 'address', name: 'delegatee', type: 'address' }], name: 'delegate', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: false, inputs: [{ internalType: 'address', name: 'delegatee', type: 'address' }, { internalType: 'uint256', name: 'nonce', type: 'uint256' }, { internalType: 'uint256', name: 'expiry', type: 'uint256' }, { internalType: 'uint8', name: 'v', type: 'uint8' }, { internalType: 'bytes32', name: 'r', type: 'bytes32' }, { internalType: 'bytes32', name: 's', type: 'bytes32' }], name: 'delegateBySig', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: true, inputs: [{ internalType: 'address', name: '', type: 'address' }], name: 'delegates', outputs: [{ internalType: 'address', name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [{ internalType: 'address', name: 'account', type: 'address' }], name: 'getCurrentVotes', outputs: [{ internalType: 'uint96', name: '', type: 'uint96' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [{ internalType: 'address', name: 'account', type: 'address' }, { internalType: 'uint256', name: 'blockNumber', type: 'uint256' }], name: 'getPriorVotes', outputs: [{ internalType: 'uint96', name: '', type: 'uint96' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'minimumTimeBetweenMints', outputs: [{ internalType: 'uint32', name: '', type: 'uint32' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [{ internalType: 'address', name: 'dst', type: 'address' }, { internalType: 'uint256', name: 'rawAmount', type: 'uint256' }], name: 'mint', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: true, inputs: [], name: 'mintCap', outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'minter', outputs: [{ internalType: 'address', name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'mintingAllowedAfter', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'name', outputs: [{ internalType: 'string', name: '', type: 'string' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [{ internalType: 'address', name: '', type: 'address' }], name: 'nonces', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [{ internalType: 'address', name: '', type: 'address' }], name: 'numCheckpoints', outputs: [{ internalType: 'uint32', name: '', type: 'uint32' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [{ internalType: 'address', name: 'owner', type: 'address' }, { internalType: 'address', name: 'spender', type: 'address' }, { internalType: 'uint256', name: 'rawAmount', type: 'uint256' }, { internalType: 'uint256', name: 'deadline', type: 'uint256' }, { internalType: 'uint8', name: 'v', type: 'uint8' }, { internalType: 'bytes32', name: 'r', type: 'bytes32' }, { internalType: 'bytes32', name: 's', type: 'bytes32' }], name: 'permit', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: false, inputs: [{ internalType: 'address', name: 'minter_', type: 'address' }], name: 'setMinter', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: true, inputs: [], name: 'symbol', outputs: [{ internalType: 'string', name: '', type: 'string' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'totalSupply', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [{ internalType: 'address', name: 'dst', type: 'address' }, { internalType: 'uint256', name: 'rawAmount', type: 'uint256' }], name: 'transfer', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: false, inputs: [{ internalType: 'address', name: 'src', type: 'address' }, { internalType: 'address', name: 'dst', type: 'address' }, { internalType: 'uint256', name: 'rawAmount', type: 'uint256' }], name: 'transferFrom', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function' }],
  WETH: [
    { constant: true, inputs: [], name: 'name', outputs: [{ name: '', type: 'string' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [{ name: 'guy', type: 'address' }, { name: 'wad', type: 'uint256' }], name: 'approve', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: true, inputs: [], name: 'totalSupply', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [{ name: 'src', type: 'address' }, { name: 'dst', type: 'address' }, { name: 'wad', type: 'uint256' }], name: 'transferFrom', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: false, inputs: [{ name: 'wad', type: 'uint256' }], name: 'withdraw', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: true, inputs: [], name: 'decimals', outputs: [{ name: '', type: 'uint8' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [{ name: '', type: 'address' }], name: 'balanceOf', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'symbol', outputs: [{ name: '', type: 'string' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [{ name: 'dst', type: 'address' }, { name: 'wad', type: 'uint256' }], name: 'transfer', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: false, inputs: [], name: 'deposit', outputs: [], payable: true, stateMutability: 'payable', type: 'function' }, { constant: true, inputs: [{ name: '', type: 'address' }, { name: '', type: 'address' }], name: 'allowance', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { payable: true, stateMutability: 'payable', type: 'fallback' }, { anonymous: false, inputs: [{ indexed: true, name: 'src', type: 'address' }, { indexed: true, name: 'guy', type: 'address' }, { indexed: false, name: 'wad', type: 'uint256' }], name: 'Approval', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, name: 'src', type: 'address' }, { indexed: true, name: 'dst', type: 'address' }, { indexed: false, name: 'wad', type: 'uint256' }], name: 'Transfer', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, name: 'dst', type: 'address' }, { indexed: false, name: 'wad', type: 'uint256' }], name: 'Deposit', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, name: 'src', type: 'address' }, { indexed: false, name: 'wad', type: 'uint256' }], name: 'Withdrawal', type: 'event' }]
}
export default COIN_ABI
