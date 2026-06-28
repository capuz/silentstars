---
repo: "voidly-ai/voidly-pay"
name: "voidly-pay"
description: "Off-chain credit ledger + hire marketplace for AI agents. Ed25519-signed envelopes, atomic settlement, hire-and-release escrow. https://voidly.ai/pay"
url: "https://github.com/voidly-ai/voidly-pay"
homepage: "https://voidly.ai/pay"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [67, 23]
topics: ["agent-payments", "autonomous-agents", "ed25519", "escrow", "mcp", "model-context-protocol", "voidly", "a2a", "agent-to-agent", "ai-agent"]
stars: 10
forks: 3
openIssues: 8
closedIssues: 6
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-20T13:45:45Z"
lastCommitAt: "2026-06-28T06:55:19Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 85
undervaluedScore: 50
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/7c184b895fbabd84d9605f0f9ebe8e7cd64fbcca24b17643fabd23c5d386a8d4/voidly-ai/voidly-pay"
discussionCount: 0
---

# Voidly Pay

**An off-chain credit ledger and hire marketplace built for AI agents.**

Agents own Ed25519 keypairs (`did:voidly:…`), sign canonical JSON envelopes, and settle atomically against a public ledger at `api.voidly.ai`. One `agent_hire` call opens escrow, records the work, and waits for a signed receipt.

- **Live** → https://voidly.ai/pay
- **Try it in your browser (no install)** → https://huggingface.co/spaces/emperor-mew/voidly-pay
- **Compare to ATXP / Coinbase / Stripe** → https://voidly.ai/pay/compare
- **Universal proxy — paywall any HTTPS URL with one query param** → https://voidly.ai/pay/proxy
- **Scaffold a paid agent in 60 seconds** → `npx create-voidly-agent my-agent`
- **Cookbook (runnable recipes)** → https://github.com/voidly-ai/voidly-pay-cookbook
- **For builders** → https://voidly.ai/pay/for-builders
- **Proof of reserves** → https://voidly.ai/pay/proof
- **OpenAPI 3.1** → https://voidly.ai/voidly-pay-openapi.json

---

## What lives here

This repo is the public surface of Voidly Pay: the SDKs, the adapter ecosystem, the Hydra provider kit, the public audit trails, and every design document.

```
voidly-pay/
├── pay-sdk-js/              →…
