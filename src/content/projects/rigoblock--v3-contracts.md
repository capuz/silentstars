---
repo: "RigoBlock/v3-contracts"
name: "v3-contracts"
description: "Smart contracts of RigoBlock v3"
readmeQualityOk: true
url: "https://github.com/RigoBlock/v3-contracts"
homepage: "https://rigoblock.com"
language: "Solidity"
languages: ["Solidity"]
languagePcts: [81]
topics: ["ethereum", "pool", "solidity", "solidity-contracts"]
stars: 11
forks: 3
openIssues: 8
closedIssues: 72
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2022-06-02T07:18:16Z"
lastCommitAt: "2026-11-17T13:41:56Z"
lastReleaseAt: "2022-06-14T16:51:27Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 76
maintainers: ["gabririgo", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ccff36cc79c4f2925b4010223befea0c5ff6c03028e45f614424fe9fb58ec88/RigoBlock/v3-contracts"
---

# v3-contracts
Smart contracts of RigoBlock v3
=====================

Usage
-----
### Install requirements with yarn:

```bash
yarn
```

### Run all tests:

```bash
yarn build
yarn test
```

### storage upgrades
New storage variables in the implementation must be added to a dedicated storage to prevent storage collision.

### Commit format:
PR must follow "Conventional Commits spec". PR title is checked upon opening. Examples for valid PR titles:

- ```fix:``` Correct typo. (patch)
- ```feat:``` Add support for ... (minor)
- ```feat!:``` Drop support for ... (major)

 Other PR titles are also valid:

- ```build:```,```chore:```,```ci:```,```docs:```,```style:```,```refactor:```,```perf:```,```test:```

### License
All smart contracts are released under Apache-2.0
