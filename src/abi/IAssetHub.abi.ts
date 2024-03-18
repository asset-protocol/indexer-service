export const ABI_JSON = [
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
            }
        ],
        "outputs": []
    }
]
