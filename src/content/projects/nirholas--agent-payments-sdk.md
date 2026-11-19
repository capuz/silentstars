---
repo: "nirholas/agent-payments-sdk"
name: "agent-payments-sdk"
description: "TypeScript SDK for Pump Agent Payments on Solana, with EVM cross-chain quoting and an x402 client."
readmeQualityOk: true
url: "https://github.com/nirholas/agent-payments-sdk"
homepage: "https://nirholas.github.io/agent-payments-sdk/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["ai-agents", "payments", "solana", "typescript", "agent-payments", "pump-fun", "sdk", "x402"]
stars: 9
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 1
createdAt: "2026-05-07T05:27:34Z"
lastCommitAt: "2026-11-19T05:03:02Z"
lastReleaseAt: "2026-11-10T22:16:12Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 75
undervaluedScore: 43
maintainers: ["nirholas", "qpmd", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d5ebe51e33a85efe3ccc20dbcde9ce1a3b8e7eb30afd387a0c29e2bd52be4ec9/nirholas/agent-payments-sdk"
fundingLinks: ["CUSTOM:https://three.ws"]
discussionCount: 0
---

# @nirholas/agent-payments-sdk

## Overview

Cross-chain payments SDK for Pump tokenized agents. The Solana surface ships two coexisting clients — the modern 3.0.x `pump_agent_payments` program ([src/solana/](https://github.com/nirholas/agent-payments-sdk/blob/HEAD/src/solana/)) and a vendored 1.0.7 client for coins registered via `@pump-fun/pump-sdk`'s `isTokenizedAgent: true` path ([src/solana/legacy-agent-payments/](https://github.com/nirholas/agent-payments-sdk/blob/HEAD/src/solana/legacy-agent-payments/)). The EVM surface covers payment acceptance and cross-chain quoting on six EVM chains plus an x402 HTTP 402 client/facilitator. Embedded agent skills under [swap/](https://github.com/nirholas/agent-payments-sdk/blob/HEAD/swap/), [create-coin/](https://github.com/nirholas/agent-payments-sdk/blob/HEAD/create-coin/), [coin-fees/](https://github.com/nirholas/agent-payments-sdk/blob/HEAD/coin-fees/), and [tokenized-agents/](https://github.com/nirholas/agent-payments-sdk/blob/HEAD/tokenized-agents/) ship runnable Node scripts that the parent agent can drive directly.

## Install

```bash
npm i @nirholas/agent-payments-sdk
```

Or clone and build it for local development:
