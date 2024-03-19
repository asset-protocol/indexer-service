export const ABI_JSON = [
    {
        "type": "error",
        "name": "AddressEmptyCode",
        "inputs": [
            {
                "type": "address",
                "name": "target"
            }
        ]
    },
    {
        "type": "error",
        "name": "AssetDoesNotExist",
        "inputs": []
    },
    {
        "type": "error",
        "name": "CallerNotCollectNFT",
        "inputs": []
    },
    {
        "type": "error",
        "name": "CollectModuleNotWhitelisted",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ERC1967InvalidImplementation",
        "inputs": [
            {
                "type": "address",
                "name": "implementation"
            }
        ]
    },
    {
        "type": "error",
        "name": "ERC1967NonPayable",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ERC721IncorrectOwner",
        "inputs": [
            {
                "type": "address",
                "name": "sender"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "address",
                "name": "owner"
            }
        ]
    },
    {
        "type": "error",
        "name": "ERC721InsufficientApproval",
        "inputs": [
            {
                "type": "address",
                "name": "operator"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ]
    },
    {
        "type": "error",
        "name": "ERC721InvalidApprover",
        "inputs": [
            {
                "type": "address",
                "name": "approver"
            }
        ]
    },
    {
        "type": "error",
        "name": "ERC721InvalidOperator",
        "inputs": [
            {
                "type": "address",
                "name": "operator"
            }
        ]
    },
    {
        "type": "error",
        "name": "ERC721InvalidOwner",
        "inputs": [
            {
                "type": "address",
                "name": "owner"
            }
        ]
    },
    {
        "type": "error",
        "name": "ERC721InvalidReceiver",
        "inputs": [
            {
                "type": "address",
                "name": "receiver"
            }
        ]
    },
    {
        "type": "error",
        "name": "ERC721InvalidSender",
        "inputs": [
            {
                "type": "address",
                "name": "sender"
            }
        ]
    },
    {
        "type": "error",
        "name": "ERC721NonexistentToken",
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ]
    },
    {
        "type": "error",
        "name": "EnforcedPause",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ExpectedPause",
        "inputs": []
    },
    {
        "type": "error",
        "name": "FailedInnerCall",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidCreateAssetModule",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidInitialization",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NoAssetPublisher",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotAssetPublisher",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotInitializing",
        "inputs": []
    },
    {
        "type": "error",
        "name": "OwnableInvalidOwner",
        "inputs": [
            {
                "type": "address",
                "name": "owner"
            }
        ]
    },
    {
        "type": "error",
        "name": "OwnableUnauthorizedAccount",
        "inputs": [
            {
                "type": "address",
                "name": "account"
            }
        ]
    },
    {
        "type": "error",
        "name": "UUPSUnauthorizedCallContext",
        "inputs": []
    },
    {
        "type": "error",
        "name": "UUPSUnsupportedProxiableUUID",
        "inputs": [
            {
                "type": "bytes32",
                "name": "slot"
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Approval",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "approved",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "tokenId",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ApprovalForAll",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "operator",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "approved",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "AssetUpdated",
        "inputs": [
            {
                "type": "uint256",
                "name": "assetId",
                "indexed": true
            },
            {
                "type": "tuple",
                "name": "data",
                "indexed": false,
                "components": [
                    {
                        "type": "address",
                        "name": "collectModule"
                    },
                    {
                        "type": "bytes",
                        "name": "collectModuleInitData"
                    },
                    {
                        "type": "address",
                        "name": "gatedModule"
                    },
                    {
                        "type": "bytes",
                        "name": "gatedModuleInitData"
                    },
                    {
                        "type": "string",
                        "name": "contentURI"
                    }
                ]
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "BatchMetadataUpdate",
        "inputs": [
            {
                "type": "uint256",
                "name": "_fromTokenId",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "_toTokenId",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "CollectModuleWhitelisted",
        "inputs": [
            {
                "type": "address",
                "name": "collectModule",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "whitelisted",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "CollectNFTTransfered",
        "inputs": [
            {
                "type": "address",
                "name": "publiser",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "assetId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "collectNFTTokenId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "from",
                "indexed": false
            },
            {
                "type": "address",
                "name": "to",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Initialized",
        "inputs": [
            {
                "type": "uint64",
                "name": "version",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "MetadataUpdate",
        "inputs": [
            {
                "type": "uint256",
                "name": "_tokenId",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "OwnershipTransferred",
        "inputs": [
            {
                "type": "address",
                "name": "previousOwner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "newOwner",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Paused",
        "inputs": [
            {
                "type": "address",
                "name": "account",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Transfer",
        "inputs": [
            {
                "type": "address",
                "name": "from",
                "indexed": true
            },
            {
                "type": "address",
                "name": "to",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "tokenId",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Unpaused",
        "inputs": [
            {
                "type": "address",
                "name": "account",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Upgraded",
        "inputs": [
            {
                "type": "address",
                "name": "implementation",
                "indexed": true
            }
        ]
    },
    {
        "type": "function",
        "name": "UPGRADE_INTERFACE_VERSION",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "approve",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "assetCollectCount",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "assetId"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "assetCollectNFT",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "assetId"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "assetGated",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "assetId"
            },
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "assetPublisher",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "assetId"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "balanceOf",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "owner"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "collect",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "assetId"
            },
            {
                "type": "bytes",
                "name": "collectModuleData"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "collectModuleWhitelist",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "collectModule"
            },
            {
                "type": "bool",
                "name": "whitelist"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "count",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "publisher"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "create",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "data",
                "components": [
                    {
                        "type": "address",
                        "name": "publisher"
                    },
                    {
                        "type": "string",
                        "name": "contentURI"
                    },
                    {
                        "type": "bytes",
                        "name": "assetCreateModuleData"
                    },
                    {
                        "type": "address",
                        "name": "collectModule"
                    },
                    {
                        "type": "bytes",
                        "name": "collectModuleInitData"
                    },
                    {
                        "type": "address",
                        "name": "gatedModule"
                    },
                    {
                        "type": "bytes",
                        "name": "gatedModuleInitData"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "emitCollectNFTTransferEvent",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "publiser"
            },
            {
                "type": "uint256",
                "name": "assetId"
            },
            {
                "type": "uint256",
                "name": "collectNFTId"
            },
            {
                "type": "address",
                "name": "from"
            },
            {
                "type": "address",
                "name": "to"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getApproved",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getCreateAssetModule",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "hubOwner",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "initialize",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "name"
            },
            {
                "type": "string",
                "name": "symbol"
            },
            {
                "type": "address",
                "name": "admin"
            },
            {
                "type": "address",
                "name": "collectNFT"
            },
            {
                "type": "address",
                "name": "createAssetModule"
            },
            {
                "type": "address",
                "name": "whitelistedCollectModule"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "isApprovedForAll",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "owner"
            },
            {
                "type": "address",
                "name": "operator"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "isCollectModuleWhitelisted",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "followModule"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "name",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "owner",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "ownerOf",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "paused",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "proxiableUUID",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "renounceOwnership",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "safeTransferFrom",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "from"
            },
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "safeTransferFrom",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "from"
            },
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "bytes",
                "name": "data"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setApprovalForAll",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "operator"
            },
            {
                "type": "bool",
                "name": "approved"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setCreateAssetModule",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "assetModule"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setTokenURI",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "assetId"
            },
            {
                "type": "string",
                "name": "contentURI"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "supportsInterface",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes4",
                "name": "interfaceId"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "symbol",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "tokenURI",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": [
            {
                "type": "string",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "transferFrom",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "from"
            },
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "transferOwnership",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "newOwner"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "update",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "assetId"
            },
            {
                "type": "tuple",
                "name": "data",
                "components": [
                    {
                        "type": "address",
                        "name": "collectModule"
                    },
                    {
                        "type": "bytes",
                        "name": "collectModuleInitData"
                    },
                    {
                        "type": "address",
                        "name": "gatedModule"
                    },
                    {
                        "type": "bytes",
                        "name": "gatedModuleInitData"
                    },
                    {
                        "type": "string",
                        "name": "contentURI"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "upgradeToAndCall",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "newImplementation"
            },
            {
                "type": "bytes",
                "name": "data"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "userCollectCount",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "assetId"
            },
            {
                "type": "address",
                "name": "collector"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "version",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string",
                "name": ""
            }
        ]
    }
]
