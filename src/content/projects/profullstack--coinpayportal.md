---
repo: "profullstack/coinpayportal"
name: "coinpayportal"
description: "A non-custodial payment gateway for crypto e-commerce payments"
readmeQualityOk: true
url: "https://github.com/profullstack/coinpayportal"
homepage: "https://coinpayportal.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
topics: ["api", "blockchain", "cryptocurrency", "payments", "webhooks"]
stars: 17
forks: 19
openIssues: 0
closedIssues: 90
watchers: 0
contributors: 17
recentReleases: 8
createdAt: "2025-11-26T13:29:53Z"
lastCommitAt: "2026-08-24T02:52:20Z"
lastReleaseAt: "2026-07-26T09:36:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 99
undervaluedScore: 79
maintainers: ["ralyodio", "rissrice2105-agent", "phucnguyen1707"]
openGraphImageUrl: "https://opengraph.githubassets.com/eac656e094f0cc33035ecef30a9101b6d3448f2d82727b9ad16c1351889ceef2/profullstack/coinpayportal"
postedAt: "2026-08-01T06:19:05.392Z"
---

# CoinPay ⚡

The multi-chain payment infrastructure for humans and AI agents. Crypto payments, escrow, a non-custodial web wallet, Lightning, x402 protocol, and Stripe — all in one platform.

**[coinpayportal.com](https://coinpayportal.com)** · [Docs](https://coinpayportal.com/docs) · [SDK](https://coinpayportal.com/docs/sdk) · [Discord](https://discord.gg/U7dEXfBA3s)

---

## What is CoinPay?

CoinPay is a payment gateway that lets merchants accept crypto, Lightning, and card payments. It's designed for both traditional e-commerce and the agent economy — AI agents can create wallets, send payments, manage escrows, and pay for APIs autonomously.

**Custody, up front:** CoinPay is not non-custodial as a whole, and we don't market it that way. The web wallet is genuinely non-custodial (keys are generated client-side and never reach the server). On-chain payments land at a CoinPay-derived address and are forwarded to the merchant, so we hold the key for that window. Default escrow is custodial for the whole escrow window; `multisig_2of3` escrow is not (we hold one key of three). Lightning is custodial until withdrawal. Full breakdown — including shutdown and dispute handling — lives…
