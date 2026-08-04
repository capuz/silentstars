---
repo: "scrypster/muninndb"
name: "muninndb"
description: "The cognitive database. A new class of data storage. Not a vector store, not a graph DB, not a RAG wrapper. Ebbinghaus decay, Hebbian   learning, and Bayesian confidence are engine-native primitives. Memories evolve on their own. MCP-native. Single binary."
readmeQualityOk: true
url: "https://github.com/scrypster/muninndb"
language: "Go"
languages: ["Go"]
languagePcts: [92]
stars: 323
forks: 75
openIssues: 16
closedIssues: 317
watchers: 12
contributors: 25
recentReleases: 0
createdAt: "2026-02-22T16:32:38Z"
lastCommitAt: "2026-08-04T06:10:46Z"
lastReleaseAt: "2026-03-03T21:35:36Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 27
maintainers: ["scrypster", "isaac-ranger", "johanneshauer"]
openGraphImageUrl: "https://opengraph.githubassets.com/f045e9d379a406967104c5c1282d8c7cd23a255c3ecb07e7a2d85447a2c00546/scrypster/muninndb"
---

# MuninnDB

**Memory that strengthens with use, fades when unused, and pushes to you when it matters** — accessible over MCP, REST, gRPC, or SDK.

*Provisional patent filed Feb 26, 2026 on the core cognitive primitives (engine-native Ebbinghaus decay, Hebbian learning, Bayesian confidence, semantic triggers). This helps protect the project so we can keep it open and innovative for everyone.*

> **Prerequisites:** None. Single binary, zero dependencies, zero configuration required.
> To uninstall: `rm $(which muninn)` and delete `~/.muninn`.

---

## Try It — 30 Seconds

**macOS / Linux:**

```bash
# 1. Install
curl -sSL https://muninndb.com/install.sh | sh

# 2. Start (first-run setup is automatic)
muninn start
```

**Windows (PowerShell):**

```powershell
# 1. Install
irm https://muninndb.com/install.ps1 | iex

# 2. Start (first-run setup is automatic)
muninn start
```

```bash
# 3. Store a memory
curl -sX POST http://127.0.0.1:8475/api/engrams \
  -H 'Content-Type: application/json' \
  -d '{"concept":"payment incident","content":"We switched to idempotency keys after the double-charge incident in Q3"}'

# 4. Ask what is relevant RIGHT NOW
curl -sX POST…
