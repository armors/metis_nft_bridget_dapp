const COIN_ABI = {
  bridgeFactory: [
    {
      type: 'constructor',
      stateMutability: 'nonpayable',
      inputs: [{
        type: 'address',
        name: '_bridge',
        internalType: 'address'
      }]
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newOwner',
          type: 'address'
        }
      ],
      name: 'OwnershipTransferred',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'tokenSrc',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'tokenTag',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'opt',
          type: 'address'
        }
      ],
      name: 'TokenTargetCreated',
      type: 'event'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_tokenSrc',
          type: 'address'
        },
        {
          internalType: 'address',
          name: '_tokenTag',
          type: 'address'
        }
      ],
      name: 'bindAddress',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [],
      name: 'bridge',
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
          name: '_tokenSrc',
          type: 'address'
        },
        {
          internalType: 'string',
          name: '_baseURI',
          type: 'string'
        }
      ],
      name: 'create1155Pair',
      outputs: [
        {
          internalType: 'contract ERC1155Mock',
          name: 'tokenTag',
          type: 'address'
        }
      ],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_tokenSrc',
          type: 'address'
        },
        {
          internalType: 'string',
          name: '_name',
          type: 'string'
        },
        {
          internalType: 'string',
          name: '_symbol',
          type: 'string'
        },
        {
          internalType: 'string',
          name: '_baseURI',
          type: 'string'
        }
      ],
      name: 'create721Pair',
      outputs: [
        {
          internalType: 'contract ERC721Mock',
          name: 'tokenTag',
          type: 'address'
        }
      ],
      stateMutability: 'nonpayable',
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
      name: 'getPair',
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
    },
    {
      inputs: [],
      name: 'renounceOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'localNFT',
          type: 'address'
        },
        {
          internalType: 'address',
          name: 'destNFT',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: 'originNFTChainId',
          type: 'uint256'
        },
        {
          internalType: 'uint32',
          name: 'destGasLimit',
          type: 'uint32'
        }
      ],
      name: 'setNft',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_tokenSrc',
          type: 'address'
        },
        {
          internalType: 'address',
          name: '_tokenTag',
          type: 'address'
        }
      ],
      name: 'setPair',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_bridge',
          type: 'address'
        }
      ],
      name: 'setbridge',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newOwner',
          type: 'address'
        }
      ],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }
  ],
  erc721: [
    {
      inputs: [{
        internalType: 'string',
        name: '_name',
        type: 'string'
      }, {
        internalType: 'string',
        name: '_symbol',
        type: 'string'
      }, {
        internalType: 'string',
        name: '_baseUri',
        type: 'string'
      }, {
        internalType: 'address',
        name: 'owner',
        type: 'address'
      }, {
        internalType: 'address',
        name: 'minter',
        type: 'address'
      }],
      stateMutability: 'nonpayable',
      type: 'constructor'
    }, {
      anonymous: false,
      inputs: [{
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address'
      }, {
        indexed: true,
        internalType: 'address',
        name: 'approved',
        type: 'address'
      }, {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }],
      name: 'Approval',
      type: 'event'
    }, {
      anonymous: false,
      inputs: [{
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address'
      }, {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address'
      }, {
        indexed: false,
        internalType: 'bool',
        name: 'approved',
        type: 'bool'
      }],
      name: 'ApprovalForAll',
      type: 'event'
    }, {
      anonymous: false,
      inputs: [{
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      }, {
        indexed: true,
        internalType: 'bytes32',
        name: 'previousAdminRole',
        type: 'bytes32'
      }, {
        indexed: true,
        internalType: 'bytes32',
        name: 'newAdminRole',
        type: 'bytes32'
      }],
      name: 'RoleAdminChanged',
      type: 'event'
    }, {
      anonymous: false,
      inputs: [{
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      }, {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address'
      }, {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address'
      }],
      name: 'RoleGranted',
      type: 'event'
    }, {
      anonymous: false,
      inputs: [{
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      }, {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address'
      }, {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address'
      }],
      name: 'RoleRevoked',
      type: 'event'
    }, {
      anonymous: false,
      inputs: [{
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address'
      }, {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address'
      }, {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }],
      name: 'Transfer',
      type: 'event'
    }, {
      inputs: [],
      name: 'BURNER_ROLE',
      outputs: [{
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }],
      stateMutability: 'view',
      type: 'function'
    }, {
      inputs: [],
      name: 'DEFAULT_ADMIN_ROLE',
      outputs: [{
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }],
      stateMutability: 'view',
      type: 'function'
    }, {
      inputs: [],
      name: 'MINTER_ROLE',
      outputs: [{
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }],
      stateMutability: 'view',
      type: 'function'
    }, {
      inputs: [{
        internalType: 'address',
        name: 'to',
        type: 'address'
      }, {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }],
      name: 'approve',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      inputs: [{
        internalType: 'address',
        name: 'owner',
        type: 'address'
      }],
      name: 'balanceOf',
      outputs: [{
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }],
      stateMutability: 'view',
      type: 'function'
    }, {
      inputs: [],
      name: 'baseUri',
      outputs: [{
        internalType: 'string',
        name: '',
        type: 'string'
      }],
      stateMutability: 'view',
      type: 'function'
    }, {
      inputs: [{
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }],
      name: 'getApproved',
      outputs: [{
        internalType: 'address',
        name: '',
        type: 'address'
      }],
      stateMutability: 'view',
      type: 'function'
    }, {
      inputs: [{
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      }],
      name: 'getRoleAdmin',
      outputs: [{
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }],
      stateMutability: 'view',
      type: 'function'
    }, {
      inputs: [{
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      }, {
        internalType: 'address',
        name: 'account',
        type: 'address'
      }],
      name: 'grantRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      inputs: [{
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      }, {
        internalType: 'address',
        name: 'account',
        type: 'address'
      }],
      name: 'hasRole',
      outputs: [{
        internalType: 'bool',
        name: '',
        type: 'bool'
      }],
      stateMutability: 'view',
      type: 'function'
    }, {
      inputs: [{
        internalType: 'address',
        name: 'owner',
        type: 'address'
      }, {
        internalType: 'address',
        name: 'operator',
        type: 'address'
      }],
      name: 'isApprovedForAll',
      outputs: [{
        internalType: 'bool',
        name: '',
        type: 'bool'
      }],
      stateMutability: 'view',
      type: 'function'
    }, {
      inputs: [{
        internalType: 'address',
        name: '_to',
        type: 'address'
      }, {
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256'
      }],
      name: 'mint',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      inputs: [],
      name: 'name',
      outputs: [{
        internalType: 'string',
        name: '',
        type: 'string'
      }],
      stateMutability: 'view',
      type: 'function'
    }, {
      inputs: [{
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }],
      name: 'ownerOf',
      outputs: [{
        internalType: 'address',
        name: '',
        type: 'address'
      }],
      stateMutability: 'view',
      type: 'function'
    }, {
      inputs: [{
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      }, {
        internalType: 'address',
        name: 'account',
        type: 'address'
      }],
      name: 'renounceRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      inputs: [{
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      }, {
        internalType: 'address',
        name: 'account',
        type: 'address'
      }],
      name: 'revokeRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      inputs: [{
        internalType: 'address',
        name: 'from',
        type: 'address'
      }, {
        internalType: 'address',
        name: 'to',
        type: 'address'
      }, {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }],
      name: 'safeTransferFrom',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      inputs: [{
        internalType: 'address',
        name: 'from',
        type: 'address'
      }, {
        internalType: 'address',
        name: 'to',
        type: 'address'
      }, {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }, {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes'
      }],
      name: 'safeTransferFrom',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      inputs: [{
        internalType: 'address',
        name: 'operator',
        type: 'address'
      }, {
        internalType: 'bool',
        name: 'approved',
        type: 'bool'
      }],
      name: 'setApprovalForAll',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      inputs: [{
        internalType: 'string',
        name: '_baseURIString',
        type: 'string'
      }],
      name: 'setBaseURI',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      inputs: [{
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4'
      }],
      name: 'supportsInterface',
      outputs: [{
        internalType: 'bool',
        name: '',
        type: 'bool'
      }],
      stateMutability: 'view',
      type: 'function'
    }, {
      inputs: [],
      name: 'symbol',
      outputs: [{
        internalType: 'string',
        name: '',
        type: 'string'
      }],
      stateMutability: 'view',
      type: 'function'
    }, {
      inputs: [{
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }],
      name: 'tokenURI',
      outputs: [{
        internalType: 'string',
        name: '',
        type: 'string'
      }],
      stateMutability: 'view',
      type: 'function'
    }, {
      inputs: [{
        internalType: 'address',
        name: 'from',
        type: 'address'
      }, {
        internalType: 'address',
        name: 'to',
        type: 'address'
      }, {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256'
      }],
      name: 'transferFrom',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }
  ],
  erc1155: [
    {
      inputs: [{
        internalType: 'string',
        name: '_baseUri',
        type: 'string'
      }, {
        internalType: 'address',
        name: 'owner',
        type: 'address'
      }, {
        internalType: 'address',
        name: 'minter',
        type: 'address'
      }],
      stateMutability: 'nonpayable',
      type: 'constructor'
    }, {
      anonymous: false,
      inputs: [{
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address'
      }, {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address'
      }, {
        indexed: false,
        internalType: 'bool',
        name: 'approved',
        type: 'bool'
      }],
      name: 'ApprovalForAll',
      type: 'event'
    }, {
      anonymous: false,
      inputs: [{
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      }, {
        indexed: true,
        internalType: 'bytes32',
        name: 'previousAdminRole',
        type: 'bytes32'
      }, {
        indexed: true,
        internalType: 'bytes32',
        name: 'newAdminRole',
        type: 'bytes32'
      }],
      name: 'RoleAdminChanged',
      type: 'event'
    }, {
      anonymous: false,
      inputs: [{
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      }, {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address'
      }, {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address'
      }],
      name: 'RoleGranted',
      type: 'event'
    }, {
      anonymous: false,
      inputs: [{
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      }, {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address'
      }, {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address'
      }],
      name: 'RoleRevoked',
      type: 'event'
    }, {
      anonymous: false,
      inputs: [{
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address'
      }, {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address'
      }, {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address'
      }, {
        indexed: false,
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]'
      }, {
        indexed: false,
        internalType: 'uint256[]',
        name: 'values',
        type: 'uint256[]'
      }],
      name: 'TransferBatch',
      type: 'event'
    }, {
      anonymous: false,
      inputs: [{
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address'
      }, {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address'
      }, {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address'
      }, {
        indexed: false,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256'
      }, {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256'
      }],
      name: 'TransferSingle',
      type: 'event'
    }, {
      anonymous: false,
      inputs: [{
        indexed: false,
        internalType: 'string',
        name: 'value',
        type: 'string'
      }, {
        indexed: true,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256'
      }],
      name: 'URI',
      type: 'event'
    }, {
      inputs: [],
      name: 'DEFAULT_ADMIN_ROLE',
      outputs: [{
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }],
      stateMutability: 'view',
      type: 'function'
    }, {
      inputs: [],
      name: 'MINTER_ROLE',
      outputs: [{
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }],
      stateMutability: 'view',
      type: 'function'
    }, {
      inputs: [],
      name: 'URI_SETTER_ROLE',
      outputs: [{
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }],
      stateMutability: 'view',
      type: 'function'
    }, {
      inputs: [{
        internalType: 'address',
        name: 'account',
        type: 'address'
      }, {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256'
      }],
      name: 'balanceOf',
      outputs: [{
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }],
      stateMutability: 'view',
      type: 'function'
    }, {
      inputs: [{
        internalType: 'address[]',
        name: 'accounts',
        type: 'address[]'
      }, {
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]'
      }],
      name: 'balanceOfBatch',
      outputs: [{
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]'
      }],
      stateMutability: 'view',
      type: 'function'
    }, {
      inputs: [{
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      }],
      name: 'getRoleAdmin',
      outputs: [{
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }],
      stateMutability: 'view',
      type: 'function'
    }, {
      inputs: [{
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      }, {
        internalType: 'address',
        name: 'account',
        type: 'address'
      }],
      name: 'grantRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      inputs: [{
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      }, {
        internalType: 'address',
        name: 'account',
        type: 'address'
      }],
      name: 'hasRole',
      outputs: [{
        internalType: 'bool',
        name: '',
        type: 'bool'
      }],
      stateMutability: 'view',
      type: 'function'
    }, {
      inputs: [{
        internalType: 'address',
        name: 'account',
        type: 'address'
      }, {
        internalType: 'address',
        name: 'operator',
        type: 'address'
      }],
      name: 'isApprovedForAll',
      outputs: [{
        internalType: 'bool',
        name: '',
        type: 'bool'
      }],
      stateMutability: 'view',
      type: 'function'
    }, {
      inputs: [{
        internalType: 'address',
        name: 'account',
        type: 'address'
      }, {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256'
      }, {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }, {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes'
      }],
      name: 'mint',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      inputs: [{
        internalType: 'address',
        name: 'to',
        type: 'address'
      }, {
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]'
      }, {
        internalType: 'uint256[]',
        name: 'amounts',
        type: 'uint256[]'
      }, {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes'
      }],
      name: 'mintBatch',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      inputs: [{
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      }, {
        internalType: 'address',
        name: 'account',
        type: 'address'
      }],
      name: 'renounceRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      inputs: [{
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32'
      }, {
        internalType: 'address',
        name: 'account',
        type: 'address'
      }],
      name: 'revokeRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      inputs: [{
        internalType: 'address',
        name: 'from',
        type: 'address'
      }, {
        internalType: 'address',
        name: 'to',
        type: 'address'
      }, {
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]'
      }, {
        internalType: 'uint256[]',
        name: 'amounts',
        type: 'uint256[]'
      }, {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes'
      }],
      name: 'safeBatchTransferFrom',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      inputs: [{
        internalType: 'address',
        name: 'from',
        type: 'address'
      }, {
        internalType: 'address',
        name: 'to',
        type: 'address'
      }, {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256'
      }, {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }, {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes'
      }],
      name: 'safeTransferFrom',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      inputs: [{
        internalType: 'address',
        name: 'operator',
        type: 'address'
      }, {
        internalType: 'bool',
        name: 'approved',
        type: 'bool'
      }],
      name: 'setApprovalForAll',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      inputs: [{
        internalType: 'string',
        name: '_baseUri',
        type: 'string'
      }],
      name: 'setURI',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }, {
      inputs: [{
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4'
      }],
      name: 'supportsInterface',
      outputs: [{
        internalType: 'bool',
        name: '',
        type: 'bool'
      }],
      stateMutability: 'view',
      type: 'function'
    }, {
      inputs: [{
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }],
      name: 'uri',
      outputs: [{
        internalType: 'string',
        name: '',
        type: 'string'
      }],
      stateMutability: 'view',
      type: 'function'
    }
  ],
  bridgeL1: [
    {
      inputs: [
        {
          internalType: 'address',
          name: '_owner',
          type: 'address'
        },
        {
          internalType: 'address',
          name: '_nftFactory',
          type: 'address'
        },
        {
          internalType: 'address',
          name: '_rollback',
          type: 'address'
        },
        {
          internalType: 'address',
          name: '_addressManager',
          type: 'address'
        },
        {
          internalType: 'address',
          name: '_localMessenger',
          type: 'address'
        }
      ],
      stateMutability: 'nonpayable',
      type: 'constructor'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: '_localNFT',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'address',
          name: '_destNFT',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: '_chainID',
          type: 'uint256'
        }
      ],
      name: 'CONFIT_NFT',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: '_nft',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'address',
          name: '_from',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'address',
          name: '_to',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: '_tokenID',
          type: 'uint256'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: '_amount',
          type: 'uint256'
        },
        {
          indexed: false,
          internalType: 'uint8',
          name: 'nftStandard',
          type: 'uint8'
        }
      ],
      name: 'DEPOSIT_FAILED',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: '_nft',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'address',
          name: '_from',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'address',
          name: '_to',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: '_tokenID',
          type: 'uint256'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: '_amount',
          type: 'uint256'
        },
        {
          indexed: false,
          internalType: 'uint8',
          name: 'nftStandard',
          type: 'uint8'
        }
      ],
      name: 'DEPOSIT_TO',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: '_deposit',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'address',
          name: '_bridge',
          type: 'address'
        }
      ],
      name: 'EVENT_SET',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: '_nft',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'address',
          name: '_from',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'address',
          name: '_to',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: '_tokenID',
          type: 'uint256'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: '_amount',
          type: 'uint256'
        },
        {
          indexed: false,
          internalType: 'uint8',
          name: 'nftStandard',
          type: 'uint8'
        }
      ],
      name: 'FINALIZE_DEPOSIT',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32'
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'previousAdminRole',
          type: 'bytes32'
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'newAdminRole',
          type: 'bytes32'
        }
      ],
      name: 'RoleAdminChanged',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address'
        }
      ],
      name: 'RoleGranted',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address'
        }
      ],
      name: 'RoleRevoked',
      type: 'event'
    },
    {
      inputs: [],
      name: 'DEFAULT_ADMIN_ROLE',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'DEST_CHAINID',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'NFT_FACTORY_ROLE',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'ROLLBACK_ROLE',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'addressManager',
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
          name: '',
          type: 'address'
        }
      ],
      name: 'clone',
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
          name: 'localNFT',
          type: 'address'
        },
        {
          internalType: 'address',
          name: 'destNFT',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: 'originNFTChainId',
          type: 'uint256'
        },
        {
          internalType: 'uint32',
          name: 'destGasLimit',
          type: 'uint32'
        }
      ],
      name: 'configNFT',
      outputs: [],
      stateMutability: 'payable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'localNFT',
          type: 'address'
        },
        {
          internalType: 'address',
          name: 'destTo',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: 'id',
          type: 'uint256'
        },
        {
          internalType: 'enum L1NFTBridge.nftenum',
          name: 'nftStandard',
          type: 'uint8'
        },
        {
          internalType: 'uint32',
          name: 'destGasLimit',
          type: 'uint32'
        }
      ],
      name: 'depositTo',
      outputs: [],
      stateMutability: 'payable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      name: 'depositUser',
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
      inputs: [],
      name: 'destNFTBridge',
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
          name: '_localNFT',
          type: 'address'
        },
        {
          internalType: 'address',
          name: '_destFrom',
          type: 'address'
        },
        {
          internalType: 'address',
          name: '_localTo',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: 'id',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: '_amount',
          type: 'uint256'
        },
        {
          internalType: 'enum L1NFTBridge.nftenum',
          name: 'nftStandard',
          type: 'uint8'
        }
      ],
      name: 'finalizeDeposit',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32'
        }
      ],
      name: 'getRoleAdmin',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32'
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address'
        }
      ],
      name: 'grantRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32'
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address'
        }
      ],
      name: 'hasRole',
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
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      name: 'isDeposit',
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
      name: 'isOrigin',
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
      name: 'localNFTDeposit',
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
      inputs: [],
      name: 'messenger',
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
      inputs: [],
      name: 'oracle',
      outputs: [
        {
          internalType: 'contract iMVM_DiscountOracle',
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
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32'
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address'
        }
      ],
      name: 'renounceRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32'
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address'
        }
      ],
      name: 'revokeRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'enum L1NFTBridge.nftenum',
          name: 'nftStandard',
          type: 'uint8'
        },
        {
          internalType: 'address',
          name: '_localNFT',
          type: 'address'
        },
        {
          internalType: 'uint256[]',
          name: 'ids',
          type: 'uint256[]'
        }
      ],
      name: 'rollback',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_localNFTDeposit',
          type: 'address'
        },
        {
          internalType: 'address',
          name: '_destNFTBridge',
          type: 'address'
        }
      ],
      name: 'set',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'bytes4',
          name: 'interfaceId',
          type: 'bytes4'
        }
      ],
      name: 'supportsInterface',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    }
  ],
  bridgeL2: [
    {
      inputs: [
        {
          internalType: 'address',
          name: '_owner',
          type: 'address'
        },
        {
          internalType: 'address',
          name: '_rollback',
          type: 'address'
        },
        {
          internalType: 'address',
          name: '_localMessenger',
          type: 'address'
        }
      ],
      stateMutability: 'nonpayable',
      type: 'constructor'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: '_localNFT',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'address',
          name: '_destNFT',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: '_chainID',
          type: 'uint256'
        }
      ],
      name: 'CONFIT_NFT',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: '_nft',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'address',
          name: '_from',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'address',
          name: '_to',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: '_tokenID',
          type: 'uint256'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: '_amount',
          type: 'uint256'
        },
        {
          indexed: false,
          internalType: 'uint8',
          name: 'nftStandard',
          type: 'uint8'
        }
      ],
      name: 'DEPOSIT_FAILED',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: '_nft',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'address',
          name: '_from',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'address',
          name: '_to',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: '_tokenID',
          type: 'uint256'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: '_amount',
          type: 'uint256'
        },
        {
          indexed: false,
          internalType: 'uint8',
          name: 'nftStandard',
          type: 'uint8'
        }
      ],
      name: 'DEPOSIT_TO',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: '_deposit',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'address',
          name: '_bridge',
          type: 'address'
        }
      ],
      name: 'EVENT_SET',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: '_nft',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'address',
          name: '_from',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'address',
          name: '_to',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: '_tokenID',
          type: 'uint256'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: '_amount',
          type: 'uint256'
        },
        {
          indexed: false,
          internalType: 'uint8',
          name: 'nftStandard',
          type: 'uint8'
        }
      ],
      name: 'FINALIZE_DEPOSIT',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32'
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'previousAdminRole',
          type: 'bytes32'
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'newAdminRole',
          type: 'bytes32'
        }
      ],
      name: 'RoleAdminChanged',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address'
        }
      ],
      name: 'RoleGranted',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address'
        }
      ],
      name: 'RoleRevoked',
      type: 'event'
    },
    {
      inputs: [],
      name: 'DEFAULT_ADMIN_ROLE',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'ROLLBACK_ROLE',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32'
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
      name: 'clone',
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
          name: 'destNFT',
          type: 'address'
        },
        {
          internalType: 'address',
          name: 'localNFT',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: 'originNFTChainId',
          type: 'uint256'
        }
      ],
      name: 'configNFT',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'localNFT',
          type: 'address'
        },
        {
          internalType: 'address',
          name: 'destTo',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: 'id',
          type: 'uint256'
        },
        {
          internalType: 'enum L2NFTBridge.nftenum',
          name: 'nftStandard',
          type: 'uint8'
        },
        {
          internalType: 'uint32',
          name: 'destGas',
          type: 'uint32'
        }
      ],
      name: 'depositTo',
      outputs: [],
      stateMutability: 'payable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      name: 'depositUser',
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
      inputs: [],
      name: 'destNFTBridge',
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
          name: '_localNFT',
          type: 'address'
        },
        {
          internalType: 'address',
          name: '_destFrom',
          type: 'address'
        },
        {
          internalType: 'address',
          name: '_localTo',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: 'id',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: '_amount',
          type: 'uint256'
        },
        {
          internalType: 'enum L2NFTBridge.nftenum',
          name: 'nftStandard',
          type: 'uint8'
        }
      ],
      name: 'finalizeDeposit',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32'
        }
      ],
      name: 'getRoleAdmin',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32'
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address'
        }
      ],
      name: 'grantRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32'
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address'
        }
      ],
      name: 'hasRole',
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
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      name: 'isDeposit',
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
      name: 'isOrigin',
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
      name: 'localNFTDeposit',
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
      inputs: [],
      name: 'messenger',
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
      inputs: [],
      name: 'minL1Gas',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32'
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address'
        }
      ],
      name: 'renounceRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32'
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address'
        }
      ],
      name: 'revokeRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'enum L2NFTBridge.nftenum',
          name: 'nftStandard',
          type: 'uint8'
        },
        {
          internalType: 'address',
          name: '_localNFT',
          type: 'address'
        },
        {
          internalType: 'uint256[]',
          name: 'ids',
          type: 'uint256[]'
        }
      ],
      name: 'rollback',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_localNFTDeposit',
          type: 'address'
        },
        {
          internalType: 'address',
          name: '_destNFTBridge',
          type: 'address'
        }
      ],
      name: 'set',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_minL1Gas',
          type: 'uint256'
        }
      ],
      name: 'setMinL1Gas',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'bytes4',
          name: 'interfaceId',
          type: 'bytes4'
        }
      ],
      name: 'supportsInterface',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    }
  ],
  iMVM_DiscountOracle: [
    {
      inputs: [],
      name: 'getDiscount',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'getMinL2Gas',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_sender',
          type: 'address'
        }
      ],
      name: 'isXDomainSenderAllowed',
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
          name: 'sender',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: '_chainId',
          type: 'uint256'
        }
      ],
      name: 'processL2SeqGas',
      outputs: [],
      stateMutability: 'payable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'bool',
          name: '_allowAllXDomainSenders',
          type: 'bool'
        }
      ],
      name: 'setAllowAllXDomainSenders',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_discount',
          type: 'uint256'
        }
      ],
      name: 'setDiscount',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_minL2Gas',
          type: 'uint256'
        }
      ],
      name: 'setMinL2Gas',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_sender',
          type: 'address'
        },
        {
          internalType: 'bool',
          name: '_isWhitelisted',
          type: 'bool'
        }
      ],
      name: 'setWhitelistedXDomainSender',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }
  ],
  iOVM_GasPriceOracle: [
    {
      inputs: [],
      name: 'minErc20BridgeCost',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    }
  ]
}
export default COIN_ABI
