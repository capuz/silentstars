---
repo: "Kinlock-Org/kinlock-app"
name: "kinlock-app"
description: "Kinlock web app: lock USDC on Stellar for a verified school or landlord, worldwide."
readmeQualityOk: true
url: "https://github.com/Kinlock-Org/kinlock-app"
homepage: "https://kinlock-app.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["nextjs", "soroban", "stellar", "typescript"]
stars: 12
forks: 6
openIssues: 7
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-10-05T12:48:30Z"
lastCommitAt: "2026-10-26T18:06:11Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 75
undervaluedScore: 46
maintainers: ["YazarAyobami", "abrcrmb"]
openGraphImageUrl: "https://opengraph.githubassets.com/405b7850be29e8690062cb0e2bf4018b38950e8d940c2f1eab776ea0d8985bf4/Kinlock-Org/kinlock-app"
---

# kinlock-app

The Next.js front end: payee payment requests, the sender's lock flow, the payee's claim, and public receipts. **Testnet only, with test assets.**

**Live app (testnet):** [kinlock-app.vercel.app](https://kinlock-app.vercel.app) · **Docs:** [kinlock-org.github.io](https://kinlock-org.github.io)

## What works today

| Route | State |
|---|---|
| `/` | Landing, how-it-works, principles |
| `/request` | Payee builds a payment-request link (amount, reference, schedule) |
| `/send` | Sender picks a payee, sets a schedule, sees preflight results, funds a lock, gets a claim link |
| `/claim/[id]` | Payee verifies the reference against the on-chain `ref_hash`, then releases or declines |
| `/locks/[id]` | Lock detail with refund, shown only when the contract allows it |
| `/r/[txHash]/[eventIndex]`, `/verify` | Receipts rebuilt from chain data. "Payment to verified payee" — nothing more |
| `/payee`, `/attester` | **Stubs** (`M3-11`, `M3-12`) |

> **Status: the core money flows are real; the dashboard isn't.** Claim, decline, refund, receipts and verify read the **chain** through the SDK, never the indexer. `/send` is `M3-06` in progress, the Playwright happy path…
