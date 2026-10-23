---
repo: "FlashyLabs/flashy-ledger"
name: "flashy-ledger"
description: "⚡ The open ledger rules of the AAO Stack: append-only, hash-chained, integer minor units, idempotent writes, balances always derived. Flashy Gold is the first asset on the books. Apache-2.0 — npm install @flashylabs/ledger. The rules are open; the networks that run them live are products."
readmeQualityOk: true
url: "https://github.com/FlashyLabs/flashy-ledger"
homepage: "https://flashygroup.com"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [62, 38]
topics: ["aao", "agentic", "agentic-ai", "agentic-coding", "agentic-commerce", "agentic-engineering", "agentic-framework", "agentic-os", "agentic-workflow", "agentic-workflows"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-08-12T00:32:28Z"
lastCommitAt: "2026-10-23T09:33:08Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 46
maintainers: ["backlog", "claude", "FlashyLabs"]
openGraphImageUrl: "https://opengraph.githubassets.com/5dc8981d1e0f8a6398e598d15e4d8681bb6024ba046b7a090cb4d8319b7da0c7/FlashyLabs/flashy-ledger"
---

# @flashylabs/ledger

```
        ██
       ██
      ██████
        ██
       ██
      ██
```

An append-only, multi-asset settlement ledger, open under Apache-2.0. Flashy
Gold is the first asset on it, not the thing itself — ore, stone and wheat are
configuration records, not new code paths.

This is the verification layer of the [Flashy](https://flashygroup.com)
estate — the rules that [flashynetwork.com](https://flashynetwork.com) checks
the books against, published so nobody has to take "verifiable" on faith.
Read the rules you are trusting. That is the whole point of them being here.

The domain is pure. It reads no database, calls no clock, and generates no
randomness. Everything that touches storage sits behind one interface, which is
the entire reason this can move onto different infrastructure — including a
chain — without its rules changing.

### When to use alone

- You need a battle-tested financial settlement layer
- Your system must guarantee idempotent replay
- You require audit-trail immutability
- You're building multi-asset or cross-chain rails

### In the Flashy ecosystem

- Powered by [@flashylabs/rails](https://github.com/flashylabs/flashy-rails)…
