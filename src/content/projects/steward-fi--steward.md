---
repo: "Steward-Fi/steward"
name: "steward"
description: "Agent wallet infrastructure — encrypted keys, policy enforcement, credential proxy, auth platform. Self-hostable, multi-tenant, open source."
readmeQualityOk: true
url: "https://github.com/Steward-Fi/steward"
homepage: "https://steward.fi"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["ai-agents", "authentication", "bun", "open-source", "policy-engine", "typescript", "wallet"]
stars: 95
forks: 17
openIssues: 12
closedIssues: 66
watchers: 0
contributors: 13
recentReleases: 0
createdAt: "2026-03-13T15:22:44Z"
lastCommitAt: "2026-08-19T04:09:20Z"
lastReleaseAt: "2026-05-02T04:45:12Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 97
undervaluedScore: 35
maintainers: ["lalalune"]
openGraphImageUrl: "https://opengraph.githubassets.com/73d98e27d913d30888ece52bd84f068f1543b91fc5864a17bba60c3ef9b1585b/Steward-Fi/steward"
---

# Steward

Steward is an open-source, self-hostable governed credential proxy and policy and approval layer for agent provider actions and wallets. It ships scoped grants, exact-request approval, policy-bound execution authorization on the primary EVM sign path, and signed audit evidence verifiable offline. Bring your own agent runtime, cloud, identity provider, and custodian.

## What exists today

Steward provides encrypted wallet and credential storage, authenticated tenant-scoped APIs, policy evaluation and approval workflows, a credential-injecting proxy, operator freeze controls, and signed audit evidence. Wallet and configured provider capabilities are the core. Trading venue packages are optional extensions.

| Area | Current implementation |
|---|---|
| **Custody** | Wallet keys and credentials are encrypted at rest under an operator-held root. Optional AWS KMS envelope wrapping is available, along with an operator-supplied PKCS#11 wrapping adapter and an external custody interface. Local and KMS envelope modes expose plaintext key material to the application at sign time. |
| **Scoped grants** | Named provider capabilities can bind an agent grant to a configured host,…
