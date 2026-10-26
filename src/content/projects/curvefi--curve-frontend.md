---
repo: "curvefi/curve-frontend"
name: "curve-frontend"
description: "Curve-frontend is a user-interface DApp designed to connect to Curve's deployment of smart contracts."
readmeQualityOk: true
url: "https://github.com/curvefi/curve-frontend"
homepage: "https://curve.finance/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 39
forks: 55
openIssues: 35
closedIssues: 59
watchers: 3
contributors: 32
recentReleases: 0
createdAt: "2024-01-17T14:00:13Z"
lastCommitAt: "2026-10-26T09:17:19Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 92
undervaluedScore: 66
maintainers: ["0xLokiB", "0xAlunara", "0xPearce"]
openGraphImageUrl: "https://opengraph.githubassets.com/f63ce328306f4fb362440c054d6a1c914700d0114b53968b5d33a91fbf49e9cd/curvefi/curve-frontend"
---

# curve-frontend

Curve-frontend is a user-interface application designed to connect to Curve's deployment of smart contracts.
This UI application is designed for both the [Curve](https://curve.finance) dapp, and utilizes [curve-js](https://github.com/curvefi/curve-js) and [curve-llamalend-api](https://github.com/curvefi/curve-llamalend.js) to communicate with the blockchain.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [NodeJS](https://nodejs.org/en/about/previous-releases) Active LTS version
- [yarn](https://yarnpkg.com/getting-started/install) version 4.x

## Installation

To install curve-frontend, follow these steps:

```bash
git clone https://github.com/curvefi/curve-frontend.git
cd curve-frontend
yarn
```

## Usage

Start development:

```bash
yarn dev
```

Access the application in a web browser:

- http://localhost:3000

## Folder Structure

This repository is organized as follows:

- `/apps/main`: This application manages router swaps, pool-specific functions (deposit, withdraw, swap), and pool creation [React](https://react.dev/) application.
- `/packages/evm-ui`: Shared UI kit created using Material UI, mapped as `@evm-ui`
-…
