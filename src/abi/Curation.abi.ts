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
        "name": "NotAssetPublisher",
        "inputs": [
            {
                "type": "address",
                "name": "account"
            }
        ]
    },
    {
        "type": "error",
        "name": "NotHub",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotHubOwner",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotInitializing",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotManager",
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
        "name": "AssetApproved",
        "inputs": [
            {
                "type": "uint256",
                "name": "curationId",
                "indexed": false
            },
            {
                "type": "address",
                "name": "hub",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "assetId",
                "indexed": false
            },
            {
                "type": "uint8",
                "name": "status",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "expiry",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "AssetsAdded",
        "inputs": [
            {
                "type": "uint256",
                "name": "curationId",
                "indexed": true
            },
            {
                "type": "tuple[]",
                "name": "assets",
                "components": [
                    {
                        "type": "address",
                        "name": "hub"
                    },
                    {
                        "type": "uint256",
                        "name": "assetId"
                    }
                ]
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "AssetsRemoved",
        "inputs": [
            {
                "type": "uint256",
                "name": "curationId",
                "indexed": true
            },
            {
                "type": "address[]",
                "name": "hubs"
            },
            {
                "type": "uint256[]",
                "name": "assetIds"
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "CurationCreated",
        "inputs": [
            {
                "type": "address",
                "name": "publisher",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "curationId",
                "indexed": true
            },
            {
                "type": "string",
                "name": "curationURI",
                "indexed": false
            },
            {
                "type": "uint8",
                "name": "status",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "expiry",
                "indexed": false
            },
            {
                "type": "tuple[]",
                "name": "assets",
                "components": [
                    {
                        "type": "address",
                        "name": "hub"
                    },
                    {
                        "type": "uint256",
                        "name": "assetId"
                    }
                ]
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "CurationUpdated",
        "inputs": [
            {
                "type": "uint256",
                "name": "curationId",
                "indexed": true
            },
            {
                "type": "string",
                "name": "curationURI",
                "indexed": false
            },
            {
                "type": "uint8",
                "name": "status",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "expiry",
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
        "name": "addAssets",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "curationId"
            },
            {
                "type": "tuple[]",
                "name": "assets",
                "components": [
                    {
                        "type": "address",
                        "name": "hub"
                    },
                    {
                        "type": "uint256",
                        "name": "assetId"
                    }
                ]
            }
        ],
        "outputs": []
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
        "name": "approveAsset",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "id"
            },
            {
                "type": "address",
                "name": "hub"
            },
            {
                "type": "uint256",
                "name": "assetId"
            },
            {
                "type": "uint8",
                "name": "status"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "approveAssetBatch",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "id"
            },
            {
                "type": "address[]",
                "name": "hubs"
            },
            {
                "type": "uint256[]",
                "name": "assetIds"
            },
            {
                "type": "uint8[]",
                "name": "status"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "assetsStatus",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "curationId"
            },
            {
                "type": "address[]",
                "name": "hubs"
            },
            {
                "type": "uint256[]",
                "name": "assetIds"
            }
        ],
        "outputs": [
            {
                "type": "uint8[]",
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
        "name": "create",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "string",
                "name": "curationURI"
            },
            {
                "type": "uint8",
                "name": "status"
            },
            {
                "type": "uint256",
                "name": "expiry"
            },
            {
                "type": "tuple[]",
                "name": "assets",
                "components": [
                    {
                        "type": "address",
                        "name": "hub"
                    },
                    {
                        "type": "uint256",
                        "name": "assetId"
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
        "name": "curationData",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "curationId"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "",
                "components": [
                    {
                        "type": "tuple[]",
                        "name": "assets",
                        "components": [
                            {
                                "type": "address",
                                "name": "hub"
                            },
                            {
                                "type": "uint256",
                                "name": "assetId"
                            },
                            {
                                "type": "uint256",
                                "name": "expiry"
                            },
                            {
                                "type": "uint8",
                                "name": "status"
                            }
                        ]
                    },
                    {
                        "type": "string",
                        "name": "tokenURI"
                    },
                    {
                        "type": "uint8",
                        "name": "status"
                    },
                    {
                        "type": "uint256",
                        "name": "expiry"
                    }
                ]
            }
        ]
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
                "name": "manager"
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
        "name": "removeAssets",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "curationId"
            },
            {
                "type": "address[]",
                "name": "hubs"
            },
            {
                "type": "uint256[]",
                "name": "assetIds"
            }
        ],
        "outputs": []
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
        "name": "setCurationURI",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "curationId"
            },
            {
                "type": "string",
                "name": "curationURI"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setExpiry",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "curationId"
            },
            {
                "type": "uint64",
                "name": "expiry"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setStatus",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "curationId"
            },
            {
                "type": "uint8",
                "name": "status"
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
    }
]
