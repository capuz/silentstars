---
repo: "accensa/accensa-contracts"
name: "accensa-contracts"
description: "Soroban contracts for Accensa: on-chain receipt anchoring and a merchant refund vault for x402 payments on Stellar"
readmeQualityOk: true
url: "https://github.com/accensa/accensa-contracts"
homepage: "https://accensa.github.io/accensa-app/docs/contracts/overview"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["agentic-payments", "payments", "rust", "smart-contracts", "soroban", "stellar", "x402"]
stars: 18
forks: 46
openIssues: 16
closedIssues: 148
watchers: 1
contributors: 38
recentReleases: 2
createdAt: "2026-07-13T07:54:09Z"
lastCommitAt: "2026-08-31T09:57:37Z"
lastReleaseAt: "2026-08-14T07:54:38Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 65
maintainers: ["wagmiiii", "tecmalik", "aurorabini"]
openGraphImageUrl: "https://opengraph.githubassets.com/8784b7a2b1d5908a70ceb1e5e1a8ff657280610f6992435167e24e619ae2e9cc/accensa/accensa-contracts"
---

<h1>accensa-contracts</h1>
  <p><strong>Verifiable receipts and policy-bounded refunds for x402 payments on Stellar</strong></p>
  <p>
  </p>
  <p>
  </p>
</div>

> Part of the **[Accensa](https://github.com/accensa)** merchant back-office for
> x402 sellers on Stellar. This repo holds the on-chain half; the indexer,
> dashboard, and SDK live in [`accensa-app`](https://github.com/accensa/accensa-app).

## The Problem

x402 turns any HTTP endpoint into a paid resource: an AI agent hits your API, gets a
`402 Payment Required`, pays, and retries. That works — but it leaves both sides
without recourse.

**The agent cannot prove it was charged correctly.** Its receipt comes from the
seller's own API, attesting to the seller's own behaviour. When an autonomous agent
makes thousands of sub-cent calls a day across dozens of vendors, "trust the seller's
dashboard" is not an auditing story. Any disagreement is unresolvable, because the
only record is held by the party with an interest in it.

**The merchant cannot offer refunds without becoming a custodian.** Manual refunds
don't scale to per-request payments, and an unbounded refund key over merchant float
is exactly the thing a seller…
