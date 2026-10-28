---
repo: "VenusProtocol/governance-contracts"
name: "governance-contracts"
description: "Venus Protocol Governance contracts that enable activities such as proposals and voting"
readmeQualityOk: true
url: "https://github.com/VenusProtocol/governance-contracts"
language: "TypeScript"
languages: ["TypeScript", "Solidity"]
languagePcts: [55, 45]
stars: 16
forks: 10
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 12
recentReleases: 0
createdAt: "2023-03-14T05:05:17Z"
lastCommitAt: "2026-10-28T09:57:42Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 85
undervaluedScore: 69
maintainers: ["GitGuru7", "toolsvenus", "fred-venus"]
openGraphImageUrl: "https://opengraph.githubassets.com/6a1b58bed43c0b107f0242ff2c855eb9171637bd0d53d1c1672e90e243ff29fc/VenusProtocol/governance-contracts"
---

# governance-contracts

### Prerequisites

- NodeJS - 12.x

- Solc - v0.8.25 (https://github.com/ethereum/solidity/releases/tag/v0.8.25)

- Foundry - v1.5.1 (https://getfoundry.sh)

### Installing

```

npm install

git submodule update --init --recursive

foundryup --install v1.5.1

```

### Run Tests

```

npx hardhat test

forge test

```

### Hardhat Commands

```

npx hardhat accounts

npx hardhat compile

npx hardhat clean

npx hardhat test

npx hardhat node

npx hardhat help

REPORT_GAS=true npx hardhat test

npx hardhat coverage

TS_NODE_FILES=true npx ts-node scripts/deploy.ts

npx eslint '**/*.{js,ts}'

npx eslint '**/*.{js,ts}' --fix

npx prettier '**/*.{json,sol,md}' --check

npx prettier '**/*.{json,sol,md}' --write

npx solhint 'contracts/**/*.sol'

npx solhint 'contracts/**/*.sol' --fix

MNEMONIC="<>" BSC_API_KEY="<>" npx hardhat run ./script/hardhat/deploy.ts --network testnet

```

### Upgrade Safety

CI runs both checks on every pull request into `main` or `develop`. To run them locally:

```
yarn hardhat compile
yarn check:upgrade-safety
yarn check:storage-layout
```

`check:storage-layout` compares against the working tree by default; set…
