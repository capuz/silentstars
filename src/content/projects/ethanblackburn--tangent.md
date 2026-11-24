---
repo: "EthanBlackburn/tangent"
name: "tangent"
description: "High-performance, DSL-free stream processing"
readmeQualityOk: true
url: "https://github.com/EthanBlackburn/tangent"
homepage: "https://docs.telophasehq.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["events", "logs", "pipeline", "runtime", "rust", "stream-processing", "wasi", "wasm", "webassembly"]
stars: 63
forks: 3
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2025-09-08T15:59:00Z"
lastCommitAt: "2026-11-24T14:08:00Z"
lastReleaseAt: "2026-11-17T05:44:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 52
maintainers: ["EthanBlackburn"]
openGraphImageUrl: "https://opengraph.githubassets.com/39575675f0c4b062c53e1ace0f2177ff0d8d6a112388636b7c07b0f998098371/EthanBlackburn/tangent"
---

---

Modern compromises start on a developer's laptop — a poisoned npm or PyPI package, a trojanised editor extension, a fake take-home repo, or a prompt-injected coding agent grabbing `~/.aws`, `~/.ssh`, Keychain, or browser tokens — and finish in your cloud accounts. At most startups, nothing watches either side.

Tangent is a single binary that watches both. A fast model reads your activity and flags anything suspicious; a second model investigates every alert against the full local log before paging you, and tells you in plain English what happened and what to check first.

## Quickstart

### 1. Install

```bash
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/EthanBlackburn/tangent/releases/latest/download/tangent-cli-installer.sh | sh
```

Also available via Homebrew (`brew tap telophasehq/telophase && brew install tangent-cli`) and Cargo (`cargo install --git https://github.com/EthanBlackburn/tangent tangent-cli`).

### 2. Watch your Mac (100% local by default)

Grant your terminal Full Disk Access (System Settings → Privacy & Security, then restart the terminal) and run:

```bash
tangent watch mac
```
