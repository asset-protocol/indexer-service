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
        "name": "AssetHubNotExisted",
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
        "name": "FailedInnerCall",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidInitialization",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NameHubExisted",
        "inputs": [
            {
                "type": "string",
                "name": "hubName"
            }
        ]
    },
    {
        "type": "error",
        "name": "NotInitializing",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotWhitelisted",
        "inputs": [
            {
                "type": "address",
                "name": "account"
            }
        ]
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
        "name": "AssetHubDeployed",
        "inputs": [
            {
                "type": "address",
                "name": "admin",
                "indexed": true
            },
            {
                "type": "string",
                "name": "name",
                "indexed": false
            },
            {
                "type": "address",
                "name": "assetHub",
                "indexed": false
            },
            {
                "type": "tuple",
                "name": "data",
                "indexed": false,
                "components": [
                    {
                        "type": "address",
                        "name": "collectNFT"
                    },
                    {
                        "type": "address",
                        "name": "nftGatedModule"
                    },
                    {
                        "type": "address",
                        "name": "assetCreateModule"
                    },
                    {
                        "type": "address",
                        "name": "tokenCollectModule"
                    },
                    {
                        "type": "address",
                        "name": "feeCollectModule"
                    }
                ]
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "GlobalModuleChanged",
        "inputs": [
            {
                "type": "address",
                "name": "globalModule",
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
        "name": "ManagerInitialized",
        "inputs": [
            {
                "type": "address",
                "name": "globalModule",
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
        "type": "event",
        "anonymous": false,
        "name": "Whitelisted",
        "inputs": [
            {
                "type": "address",
                "name": "account",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "isWhitelisted",
                "indexed": false
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
        "name": "assetHubInfo",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "hub"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "",
                "components": [
                    {
                        "type": "address",
                        "name": "collectNFT"
                    },
                    {
                        "type": "address",
                        "name": "nftGatedModule"
                    },
                    {
                        "type": "address",
                        "name": "assetCreateModule"
                    },
                    {
                        "type": "address",
                        "name": "tokenCollectModule"
                    },
                    {
                        "type": "address",
                        "name": "feeCollectModule"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "assetHubInfoByName",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "name"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "",
                "components": [
                    {
                        "type": "address",
                        "name": "collectNFT"
                    },
                    {
                        "type": "address",
                        "name": "nftGatedModule"
                    },
                    {
                        "type": "address",
                        "name": "assetCreateModule"
                    },
                    {
                        "type": "address",
                        "name": "tokenCollectModule"
                    },
                    {
                        "type": "address",
                        "name": "feeCollectModule"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "createFeeCollectModuleImpl",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "hub"
            },
            {
                "type": "bytes",
                "name": "initData"
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
        "name": "createHubImpl",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes",
                "name": "initData"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": "hubImpl"
            }
        ]
    },
    {
        "type": "function",
        "name": "createNftAssetGatedModuleImpl",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "hub"
            },
            {
                "type": "bytes",
                "name": "initData"
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
        "name": "createTokenAssetCreateModule",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "hub"
            },
            {
                "type": "bytes",
                "name": "initData"
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
        "name": "createTokenCollectModuleImpl",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "hub"
            },
            {
                "type": "bytes",
                "name": "initData"
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
        "name": "deploy",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "data",
                "components": [
                    {
                        "type": "address",
                        "name": "admin"
                    },
                    {
                        "type": "string",
                        "name": "name"
                    },
                    {
                        "type": "bool",
                        "name": "collectNft"
                    },
                    {
                        "type": "address",
                        "name": "assetCreateModule"
                    }
                ]
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
        "name": "exitsName",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "name"
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
        "name": "factories",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "tuple",
                "name": "",
                "components": [
                    {
                        "type": "address",
                        "name": "assetHubFactory"
                    },
                    {
                        "type": "address",
                        "name": "tokenCollectModuleFactory"
                    },
                    {
                        "type": "address",
                        "name": "nftGatedModuleFactory"
                    },
                    {
                        "type": "address",
                        "name": "tokenAssetCreateModuleFactory"
                    },
                    {
                        "type": "address",
                        "name": "collectNFTFactory"
                    },
                    {
                        "type": "address",
                        "name": "feeCollectModuleFactory"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "globalModule",
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
                "type": "tuple",
                "name": "data",
                "components": [
                    {
                        "type": "address",
                        "name": "assetHubFactory"
                    },
                    {
                        "type": "address",
                        "name": "tokenCollectModuleFactory"
                    },
                    {
                        "type": "address",
                        "name": "nftGatedModuleFactory"
                    },
                    {
                        "type": "address",
                        "name": "tokenAssetCreateModuleFactory"
                    },
                    {
                        "type": "address",
                        "name": "collectNFTFactory"
                    },
                    {
                        "type": "address",
                        "name": "feeCollectModuleFactory"
                    }
                ]
            },
            {
                "type": "address",
                "name": "globalModuleFactory"
            }
        ],
        "outputs": []
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
        "name": "setFactories",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "data",
                "components": [
                    {
                        "type": "address",
                        "name": "assetHubFactory"
                    },
                    {
                        "type": "address",
                        "name": "tokenCollectModuleFactory"
                    },
                    {
                        "type": "address",
                        "name": "nftGatedModuleFactory"
                    },
                    {
                        "type": "address",
                        "name": "tokenAssetCreateModuleFactory"
                    },
                    {
                        "type": "address",
                        "name": "collectNFTFactory"
                    },
                    {
                        "type": "address",
                        "name": "feeCollectModuleFactory"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setGolbalModule",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "gm"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setWhitelist",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "account"
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
    },
    {
        "type": "function",
        "name": "whitelisted",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
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
    }
]
