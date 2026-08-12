---
repo: "BaseIntelligence/base"
name: "base"
description: "[🧠] Base is a Bittensor subnet enabling decentralized collaborative AI research through multiple challenges, each focused on a specific objective where miners compete and contribute innovative code."
readmeQualityOk: true
url: "https://github.com/BaseIntelligence/base"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
stars: 160
forks: 16
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 6
recentReleases: 7
createdAt: "2025-04-26T00:53:36Z"
lastCommitAt: "2026-08-12T05:15:30Z"
lastReleaseAt: "2026-08-07T13:46:53Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 89
undervaluedScore: 43
maintainers: ["echobt", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/42a95ae53df18d86cee3c4507cc7ac62dbcd6011d8b8b3f4b9a9fae3b957e962/BaseIntelligence/base"
---

# BASE

**Multi-challenge Bittensor subnet control plane (Rust).**

</div>

## What it is

BASE is the Bittensor subnet control plane for BaseIntelligence. This branch (`main`)
is the **Rust** workspace: gateway, validator, agent-challenge, miner
CVM templates, and shared crates. It coordinates agent challenges (native pack
executor — no Harbor product CLI), seals a final weight vector, and serves it to
validators. The gateway is the sole TLS / public edge process.

- **Agent packs**: Harbor-format task workspaces from the pinned catalog
  ([BaseIntelligence/deepagent](https://huggingface.co/datasets/BaseIntelligence/deepagent) /
  git pin), graded by the in-tree native executor + Docker socket-proxy.
- **Miner CVM**: Phala / dstack measured compose — `socket-proxy` + `agent` +
  `attest-helper` (digest-pinned images on GHCR).
- **Emission**: validators call on-chain `set_weights` from sealed
  `GET /v1/weights/latest` — never the gateway.

## Branch

| Branch | Role |
|--------|------|
| **`main`** | Active Rust control plane (this tree). PRs target `main`. |
| `dev` | Kept alive for in-flight work; merges back into `main`. |
| `legacy/main-pre-rust` (tag) | Legacy / prior stack…
