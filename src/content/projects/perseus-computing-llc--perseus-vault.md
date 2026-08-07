---
repo: "Perseus-Computing-LLC/perseus-vault"
name: "perseus-vault"
description: "Persistent, encrypted memory for AI agents: one Rust binary, one file, no cloud. 55+ MCP tools, hybrid recall, bi-temporal history, AES-256-GCM. Local-first, air-gap ready, MIT."
readmeQualityOk: true
url: "https://github.com/Perseus-Computing-LLC/perseus-vault"
homepage: "https://perseus.observer/vault/"
language: "Rust"
languages: ["Rust"]
languagePcts: [79]
topics: ["ai-agents", "encryption", "fts5", "local-first", "mcp", "persistent-memory", "rust", "sqlite", "agent-memory", "mcp-server"]
stars: 42
forks: 7
openIssues: 22
closedIssues: 376
watchers: 0
contributors: 9
recentReleases: 10
createdAt: "2026-06-06T21:31:46Z"
lastCommitAt: "2026-08-07T05:16:00Z"
lastReleaseAt: "2026-06-27T05:01:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 98
undervaluedScore: 48
maintainers: ["tcconnally", "perseus-computing", "mateuszruszkowski"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1261564890/ced63ca3-a2fa-4492-9407-840bad1860b8"
fundingLinks: ["GITHUB:https://github.com/tcconnally", "POLAR:https://polar.sh/perseus-computing", "KO_FI:https://ko-fi.com/perseus"]
discussionCount: 0
---

</div>

# Perseus Vault

> **Persistent, encrypted memory for AI agents. One Rust binary, one file, no cloud.**

Give your agents memory that survives the session, so they stop re-deriving what they
already learned and stop repeating past mistakes. Hybrid recall (BM25 + dense + RRF),
bi-temporal history, and **AES-256-GCM** at rest, exposed as **90 canonical MCP tools**
that work with any host. Legacy `mimir_*` and `mneme_*` aliases remain callable but are
not counted separately. **73.8% on LongMemEval's official harness** (vs Zep 63.8%, Mem0
49.0%).
**One binary. One file. No Docker. No Postgres. No cloud.** Local-first, air-gap ready, MIT.

## One-Line Install

```bash
curl -sSf https://raw.githubusercontent.com/Perseus-Computing-LLC/perseus-vault/main/scripts/install.sh | sh
```

That's it. Perseus Vault is installed to `~/.local/bin/perseus-vault`. Start it:

```bash
perseus-vault serve --db ~/.mimir/data/perseus-vault.db
```

> **Encryption is enabled automatically for the default installation.** The first
> run creates `~/.perseus-vault/secret.key` with owner-only permissions and an
> encrypted database canary. Back up that key: it cannot be recovered. Explicit
>…
