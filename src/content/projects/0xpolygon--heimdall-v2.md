---
repo: "0xPolygon/heimdall-v2"
name: "heimdall-v2"
description: "Official consensus client of the Polygon blockchain."
readmeQualityOk: true
url: "https://github.com/0xPolygon/heimdall-v2"
homepage: "https://polygon.technology/"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["comet", "cometbft", "consensus", "cosmos", "cosmos-sdk", "ethereum", "polygon"]
stars: 41
forks: 42
openIssues: 3
closedIssues: 67
watchers: 7
contributors: 33
recentReleases: 0
createdAt: "2023-11-02T16:59:35Z"
lastCommitAt: "2026-11-13T11:24:12Z"
lastReleaseAt: "2025-03-18T15:15:37Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 68
maintainers: ["marcello33", "pratikspatil024", "kamuikatsurgi"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f6881d6c631a79d8b9cebe7a9de3a9d2808573a42a68ef23e42141bfa4fdd33/0xPolygon/heimdall-v2"
---

# heimdall-v2

Consensus client of the Polygon PoS chain,
using forks of [cometBFT](https://github.com/0xPolygon/cometBFT) and [cosmos-sdk](https://github.com/0xPolygon/cosmos-sdk).

## Pre-requisites

Make sure you have go1.26+ already installed.

## Build
```bash 
$ make build
```
This will produce the binary `heimdalld` in the `build` directory.

## Initialize heimdall
```bash 
$ heimdalld init <MONIKER_NAME> --chain-id=<NETWORK_NAME>
```
You can skip `--chain-id` flag if you want to run this locally (it will default to `heimdall-local`).
Otherwise, use `heimdallv2-80002` for `amoy`, or `heimdallv2-137` for `mainnet`.
`<MONIKER_NAME>` is the name of your node, which can be any string you like.

This command will generate some folders and files in the heimdall home directory (default /var/lib/heimdall).

## Run heimdall
```bash 
$ heimdalld start
```

## How to use the keyring

Instructions on how to import your validator private key into the keyring and use it to sign transactions.

Get your `base64` encoded private key from:  
`/var/lib/heimdall/config/priv_validator_key.json`

Convert the `base64` encoded key to the hex encoded key:  
`echo "<PRIVATE_KEY_BASE64_ENCODED>" |…
