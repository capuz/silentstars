---
repo: "lidofinance/ethereum-staking-widget"
name: "ethereum-staking-widget"
description: "Ethereum Liquid Staking widget based on the Lido Frontend Template"
readmeQualityOk: true
url: "https://github.com/lidofinance/ethereum-staking-widget"
homepage: "https://stake.lido.fi"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["ui"]
stars: 35
forks: 30
openIssues: 0
closedIssues: 0
watchers: 8
contributors: 32
recentReleases: 0
createdAt: "2023-07-19T05:48:03Z"
lastCommitAt: "2026-09-08T08:16:51Z"
lastReleaseAt: "2023-09-13T12:11:50Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 89
undervaluedScore: 62
maintainers: ["alx-khramov", "jake4take", "Jeday"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a802aa34badad8eceabd8a4e52489837b8c54caccd9abcec5fd9000c7510a23/lidofinance/ethereum-staking-widget"
---

# Lido Ethereum Liquid Staking Widget

A widget for submitting Ether to the pool based on [Lido Frontend Template](https://github.com/lidofinance/lido-frontend-template).

**Documentation:** [Overview](https://github.com/lidofinance/ethereum-staking-widget/blob/HEAD/docs/overview.md) — entry point for architecture, config, features, and testing.

### Prerequisites

- Node.js v20+ (CI builds on Node 24)
- Yarn package manager v1

This project requires an .env file which is distributed via private communication channels. A sample can be found in .env.example

### Development

Step 1. Copy the contents of `.env.example` to `.env.local`

```bash
cp .env.example .env.local
```

Step 2. Fill out the `.env.local`. You will need to provide RPC provider urls with keys included.

Step 3. Install dependencies

```bash
yarn install
```

Step 4. Start the development server

```bash
yarn dev
```

for IPFS mode below:

```bash
yarn dev:ipfs # will start with HMR
```

### Environment variables

Note! Avoid using `NEXT_PUBLIC_` environment variables as it hinders our CI pipeline. Please use server-side environment variables and pass them to the client using `getInitialProps` in `_app.tsx`.

###…
