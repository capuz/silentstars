---
repo: "onbloc/gnoscan"
name: "gnoscan"
description: "GnoScan is a Gno.land blockchain explorer, making on-chain data readable and intuitive for everyone."
readmeQualityOk: true
url: "https://github.com/onbloc/gnoscan"
homepage: "http://gnoscan.io/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["blockchain", "blockexplorer", "gnoland", "tendermint2", "gnoland-blockchain", "gnovm"]
stars: 9
forks: 5
openIssues: 2
closedIssues: 5
watchers: 3
contributors: 16
recentReleases: 2
createdAt: "2022-11-21T08:52:41Z"
lastCommitAt: "2026-11-09T03:30:17Z"
lastReleaseAt: "2026-10-16T10:25:52Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 93
undervaluedScore: 83
maintainers: ["notJoon", "aronpark1007", "junghoon-vans"]
openGraphImageUrl: "https://opengraph.githubassets.com/22d4f86b9e9f87b01131edd0a671acb63f34c58e6341948053fa6eede5938c1b/onbloc/gnoscan"
---

# GnoScan
GnoScan is an opensource blockchain explorer for the Gno.land blockchain, aiming to make on-chain data readable and intuitive for everyone with a UI optimized for features unique to Gno.land such as Proof of Contributions (PoC), Realms (Smartcontract in Gno), GRC20s, and Boards.

## Project Overview
This repository hosts the codebase for the GnoScan Interface. The interface is built using TypeScript and comes with rich features including a real-time dashboard for the Gno.land blockchain, recent blocks and transactions, details of realms, a full list of GRC20 tokens, and more.

## Development Setup
To set up the development environment, make sure you have the Node.js version pinned in [`.nvmrc`](https://github.com/onbloc/gnoscan/blob/HEAD/.nvmrc) installed. We recommend using [nvm](https://github.com/nvm-sh/nvm) for managing Node.js versions. Follow these steps:

```bash
# Install the Node.js version from .nvmrc (if not already installed)
$ nvm install

# Use the Node.js version from .nvmrc
$ nvm use
```

This project uses `yarn` as an alternative to `npm`. If you don't have yarn installed, run the following command:
```bash
$ npm i yarn -g
```

Next, install the…
