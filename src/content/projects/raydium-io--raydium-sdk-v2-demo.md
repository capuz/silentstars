---
repo: "raydium-io/raydium-sdk-V2-demo"
name: "raydium-sdk-V2-demo"
description: "Open-source Typescript SDK demos"
readmeQualityOk: true
url: "https://github.com/raydium-io/raydium-sdk-V2-demo"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 266
forks: 138
openIssues: 8
closedIssues: 132
watchers: 13
contributors: 6
recentReleases: 0
createdAt: "2024-05-07T02:47:26Z"
lastCommitAt: "2026-09-10T08:21:10Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 73
undervaluedScore: 27
maintainers: ["cruzshia", "rudy5348"]
openGraphImageUrl: "https://opengraph.githubassets.com/a89bac3e364453a6714fca03d52e5e9208960913360d2da043c78541812c9563/raydium-io/raydium-sdk-V2-demo"
---

# RAYDIUM SDK V2 demo

## About the project

This project is for [RAYDIUM SDK V2](https://github.com/raydium-io/raydium-sdk-V2) demonstration

## Getting Started

### Installation

`yarn install`

this will install the dependencies for running the demo script

### Prerequisites

Modify `config.ts.template` to fit your configuration, and rename it to `config.ts`

- `<YOUR_WALLET_SECRET_KEY>`: replace to your own one
- `<YOUR_RPC_URL>`: replace to your prefer one
- `<API_HOST>`: by default it's no needed to provide raydium api host, only provide it when test on devnet.

### Usage

- `yarn dev src/<FOLDER>/<SCRIPT_NAME>` run the specific demo script, e.g. yarn dev src/cpmm/deposit.ts. **Note: if you want to execute tx, remember to uncomment code in last line**
- `yarn clmm-market 8sLbNZoA1cfnvMJLPfp98ZLAnFSYCFApfJKMbiXNLwxj 10 20` run clmm market maker, arguments 0: poolId, 1: create position deviation, 2: close position deviation, remember to uncomment `close position` and `create new position` code part

### Sdk Methods

#### Transaction methods return data

all transaction related build function (e.g. await raydium.clmm.openPositionFromBase/ await raydium.cpmm.createPool ..etc)…
