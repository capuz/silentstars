---
repo: "ADWilkinson/usdctofiat-peerlytics-starters"
name: "usdctofiat-peerlytics-starters"
description: "Working Peerlytics and USDCtoFiat examples, templates, demos, and agent skills — by Galleon."
readmeQualityOk: true
url: "https://github.com/ADWilkinson/usdctofiat-peerlytics-starters"
homepage: "https://offramp-sdk.vercel.app"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [62, 33]
topics: ["ai-agents", "base", "claude-code", "defi", "offramp", "p2p", "sdk", "typescript", "usdc", "zkp2p"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 6
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-27T18:18:10Z"
lastCommitAt: "2026-10-03T09:22:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 60
maintainers: ["ADWilkinson"]
openGraphImageUrl: "https://opengraph.githubassets.com/08f16442487338a650d1f29492bb40a3e3b4a9cb908c2b7d498604dc40766656/ADWilkinson/usdctofiat-peerlytics-starters"
---

# Peerlytics & USDCtoFiat Starters

Wallet-native USDC off-ramp starters with **@usdctofiat/offramp**, plus links to Galleon's public Peer protocol activity and receipt explorer.

**Live demo:** [offramp-sdk.vercel.app](https://offramp-sdk.vercel.app)
**Machine reference:** [usdctofiat.xyz/llms-full.txt](https://usdctofiat.xyz/llms-full.txt)
**Workshop:** [galleonlabs.io](https://galleonlabs.io/)

## Peerlytics

[Peerlytics](https://peerlytics.xyz/) is Galleon's public, read-only view of Peer protocol activity on Base. Watch deposits, intents, fills, and delegation in the live activity feed, or use the [explorer](https://peerlytics.xyz/explorer) to inspect receipts by intent, deposit, address, or transaction.

The [connect page](https://peerlytics.xyz/connect) adds the same public activity and receipts to compatible AI assistants. It does not connect a wallet, sign transactions, move funds, or provide a cash-out flow. Use the USDCtoFiat starters below for wallet-native off-ramping.

## 60-second cash-out

```ts
import { cashout } from "@usdctofiat/offramp";

const { depositId, txHash } = await cashout({
  mode: "fast",
  signer: walletClient,
  amount: "100",
  platform:…
