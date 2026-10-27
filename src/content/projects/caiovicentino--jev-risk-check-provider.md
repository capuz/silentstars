---
repo: "caiovicentino/jev-risk-check-provider"
name: "jev-risk-check-provider"
description: "x402 risk-check provider: signed pre-payment verdicts — OFAC, phishing feeds, transaction simulation, drainer-kit code, and our own EIP-7702 kit watch (poisoners, sweepers). $0.001 per check with prepaid credits; per call via x402 from $0.0035."
readmeQualityOk: true
url: "https://github.com/caiovicentino/jev-risk-check-provider"
homepage: "https://x402check.xyz"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["ai-agents", "guardrails", "jev", "solana", "typesafe-ai", "x402", "cloudflare-workers", "llm-safety", "payments", "risk-check"]
stars: 12
forks: 1
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-27T21:40:12Z"
lastCommitAt: "2026-10-27T12:39:57Z"
lastReleaseAt: "2026-09-30T15:05:17Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 46
maintainers: ["caiovicentino", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/803505a087a26948d2079caef478c1fd99318dd75309b0752ebd210d43f32c83/caiovicentino/jev-risk-check-provider"
---

# x402check — pre-payment risk checks for x402 agents and wallets

**LIVE**: [https://x402check.xyz](https://x402check.xyz) · `did:web:x402check.xyz` · $0.001 per evaluation with prepaid credits, or per call via x402 ($0.0035 on Base; $0.005 with transaction simulation) · [discovery](https://x402check.xyz/.well-known/risk-check.json) · [DID document](https://x402check.xyz/.well-known/did.json) · [JWKS](https://x402check.xyz/.well-known/jwks.json)

x402check is an x402 `risk-check` provider (wire format of [x402 PR #2422](https://github.com/x402-foundation/x402/pull/2422)). You call it before an agent or a wallet pays or signs, and it checks the counterparty. It combines provider-verified evidence with a typed model:

- the **OFAC SDN** list, refreshed daily;
- curated **phishing and drainer feeds**;
- **transaction simulation**: where the assets actually go, and which approvals are granted;
- **drainer-kit code fingerprints**, which recognize redeployed drainer contracts before their address is listed;
- **our own kit watch**: every Ethereum and Base block is read as it is produced. It records look-alike wallets that delegate (EIP-7702) to an address-poisoning executor, wallets…
