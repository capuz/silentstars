---
repo: "soroban-forge-labs/soroban-lens"
name: "soroban-lens"
description: "Event indexer and explorer for Soroban smart contracts on Stellar. See what your contracts are actually emitting."
readmeQualityOk: true
url: "https://github.com/soroban-forge-labs/soroban-lens"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [57, 40]
stars: 6
forks: 57
openIssues: 41
closedIssues: 179
watchers: 0
contributors: 46
recentReleases: 0
createdAt: "2026-09-15T23:21:03Z"
lastCommitAt: "2026-11-26T23:39:56Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 94
undervaluedScore: 67
maintainers: ["JosephOladele", "sanketpatel32", "rudeus112266"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4b5afdde911ea135ccb9247a1a1ed742d8fa87c6666ecf1e9213c3fb7b2493f/soroban-forge-labs/soroban-lens"
---

# soroban-lens

**See what your Soroban contracts are actually emitting.**

An event indexer and explorer for [Stellar](https://developers.stellar.org)
smart contracts. Point it at a contract id, and within a minute you are looking
at that contract's decoded events in a browser — no custom scripts, no
hand-rolled XDR parsing.

Sibling project to **soroban-forge**, which scaffolds a contract. soroban-forge
helps you start one; soroban-lens helps you watch it once it is deployed. The
two are independent and share no code.

```
  Soroban RPC ──▶ ingest ──▶ store ──▶ api ──▶ web
                    │          │        │       │
                 Module 1   Module 2  Module 3  Module 4
                 polling,   decode,   HTTP +    explorer
                 cursors    SQLite    OpenAPI   UI
```

---
