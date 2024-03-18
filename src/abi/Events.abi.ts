export const ABI_JSON = [
    {
        "type": "event",
        "anonymous": false,
        "name": "AssetCreated",
        "inputs": [
            {
                "type": "address",
                "name": "publisher",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "assetId",
                "indexed": true
            },
            {
                "type": "string",
                "name": "contentURI",
                "indexed": false
            },
            {
                "type": "address",
                "name": "collectNFT",
                "indexed": false
            },
            {
                "type": "address",
                "name": "collectModule",
                "indexed": false
            },
            {
                "type": "address",
                "name": "gatedModule",
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
        "name": "AssetMetadataUpdate",
        "inputs": [
            {
                "type": "uint256",
                "name": "assetId",
                "indexed": true
            },
            {
                "type": "string",
                "name": "contentURI",
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
                        "type": "address",
                        "name": "gatedModule"
                    }
                ]
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
    }
]
