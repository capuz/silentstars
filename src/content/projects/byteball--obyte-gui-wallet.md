---
repo: "byteball/obyte-gui-wallet"
name: "obyte-gui-wallet"
description: "Unstoppable money https://obyte.org"
readmeQualityOk: true
url: "https://github.com/byteball/obyte-gui-wallet"
homepage: "https://obyte.org"
language: "JavaScript"
languages: ["JavaScript", "HTML"]
languagePcts: [67, 26]
topics: ["blockchain", "cryptocurrency", "cryptocurrency-wallet", "dag", "decentralization", "directed-acyclic-graph", "distributed-ledger-technology", "dlt", "obyte"]
stars: 430
forks: 168
openIssues: 57
closedIssues: 169
watchers: 59
contributors: 30
recentReleases: 0
createdAt: "2016-09-05T11:14:53Z"
lastCommitAt: "2026-08-28T12:22:51Z"
lastReleaseAt: "2016-12-19T16:58:27Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 88
undervaluedScore: 37
maintainers: ["tonyofbyteball", "xMarioInc", "xJeneKx"]
openGraphImageUrl: "https://opengraph.githubassets.com/7168ae6f29c08bee9c0d0dec6e3fe2e6b3b954e6946a9d469ee99a05cec1e9b7/byteball/obyte-gui-wallet"
---

O<sub>byte</sub> is a wallet for storage and transfer of decentralized value.  See [obyte.org](https://obyte.org/).

## Binary Downloads

[Obyte.org](https://obyte.org/)

## Installation

1. Install [Node.js](https://nodejs.org/en/download), preferrably somewhat latest version. If you already have another version of Node.js installed, you can use [NVM](https://github.com/creationix/nvm) to keep both. Install [Yarn](https://classic.yarnpkg.com/lang/en/).
```bash
nvm install 16
nvm use 16
npm install -g yarn
```

2. Then you need build tools to rebuild native modules for Electron (secp256k1 atleast, and some more on Windows platforms). Basically you need C++ build tools and Python2.7.

    * On **Ubuntu**-like platforms and other **Linux**:

    ```bash
    sudo apt install python g++ make
    ```

    * On **macOS** you need to install XCode and Command Line Tools, Python2.7 is already installed in your system. After installing XCode, run:

    ```bash
    xcode-select --install
    ```

    * On **Windows** you need C++ Build Tools 2015 or 2017 (not later) and Python2.7, everything can be installed via one command:

      * Run cmd.exe with Administrator privileges and run: `yarn…
