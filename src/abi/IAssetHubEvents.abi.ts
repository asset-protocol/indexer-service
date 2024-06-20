export const ABI_JSON = [
    {
        "type": "event",
        "anonymous": false,
        "name": "AdminChanged",
        "inputs": [
            {
                "type": "address",
                "name": "previousAdmin",
                "indexed": false
            },
            {
                "type": "address",
                "name": "newAdmin",
                "indexed": false
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
        "name": "AssetCreated",
        "inputs": [
            {
                "type": "uint256",
                "name": "assetId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "publisher",
                "indexed": true
            },
            {
                "type": "address",
                "name": "collectNFT",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "createModuleData",
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
        "name": "BeaconUpgraded",
        "inputs": [
            {
                "type": "address",
                "name": "beacon",
                "indexed": true
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
        "name": "Collected",
        "inputs": [
            {
                "type": "uint256",
                "name": "assetId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "collector",
                "indexed": true
            },
            {
                "type": "address",
                "name": "publisher",
                "indexed": true
            },
            {
                "type": "address",
                "name": "collectNFT",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "collectNFTTokenId",
                "indexed": false
            },
            {
                "type": "address",
                "name": "collectModule",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "collectModuleData",
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
        "name": "ContractURIUpdated",
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "InfoURIChanged",
        "inputs": [
            {
                "type": "string",
                "name": "uri",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "IsOpenChanged",
        "inputs": [
            {
                "type": "bool",
                "name": "isOpen",
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
                "name": "balance"
            }
        ]
    },
    {
        "type": "function",
        "name": "collect",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "uint256",
                "name": "assetId"
            },
            {
                "type": "bytes",
                "name": "data"
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
        "name": "contractURI",
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
        "name": "create",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
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
                "name": "tokenId"
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
                "name": "operator"
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
                "type": "address",
                "name": "manager"
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
                "type": "address[]",
                "name": "whitelistedCollectModules"
            },
            {
                "type": "string",
                "name": "contractURI"
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
                "name": "owner"
            }
        ]
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
    }
]
