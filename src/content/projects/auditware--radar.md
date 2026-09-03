---
repo: "Auditware/radar"
name: "radar"
description: "A static analysis tool for rust, anchor, stylus, and solidity smart contracts."
readmeQualityOk: true
url: "https://github.com/Auditware/radar"
homepage: "https://auditware.io/radar"
language: "Solidity"
languages: ["Solidity", "JavaScript"]
languagePcts: [54, 29]
topics: ["anchor", "rust", "smart-contracts", "solana", "static-analysis", "stylus", "arbitrum", "solidity"]
stars: 151
forks: 22
openIssues: 1
closedIssues: 6
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2024-06-26T10:22:26Z"
lastCommitAt: "2026-09-03T06:54:23Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 45
maintainers: ["forefy", "anthonyra"]
openGraphImageUrl: "https://opengraph.githubassets.com/f54e6f407bd5dadac5669ef40011680dcc2d82b52516d4d7aa592f8201c9f9ab/Auditware/radar"
discussionCount: 0
---

<br>
<br>

</p>

</p>

<br>

A static analysis tool for rust, anchor, stylus and solidity smart contracts

https://github.com/user-attachments/assets/62435714-cc5b-43f3-a213-96d28481a6d7

`radar` allows you to write, share, and utilize [templates](https://github.com/auditware/radar/tree/main/api/builtin_templates) to identify security issues in rust-based smart contracts using a powerful rule engine that enables automating detection of vulnerable code patterns, at scale, via simple python queries.

</p>

- [How to install](#installation)
- [How to run](#how-to-run)
- [Features](#-github-action)
  - [GitHub Action](#-github-action)
  - [Pre-commit Hook](#-pre-commit-hook)
  - [Exit codes & CI gating](#-exit-codes--ci-gating)
- [Radar at ETHDenver](#-radar-at-eth-denver)
- [Contributors](#contributors)

## Installation

1. Install and start [docker](https://docs.docker.com/get-started/get-docker/)

2. Install radar either from install script or from source

```bash
curl -L https://raw.githubusercontent.com/auditware/radar/main/install-radar.sh | bash
radar -p <your-contract-folder>
```

OR

```bash
git clone https://github.com/auditware/radar.git
cd radar
bash install-radar.sh…
