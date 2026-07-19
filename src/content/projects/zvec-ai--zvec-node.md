---
repo: "zvec-ai/zvec-node"
name: "zvec-node"
description: "High-performance Node.js bindings for Zvec, a lightweight, lightning-fast, in-process vector database"
readmeQualityOk: true
url: "https://github.com/zvec-ai/zvec-node"
homepage: "https://zvec.org"
language: "C++"
languages: ["C++", "TypeScript"]
languagePcts: [69, 20]
stars: 11
forks: 2
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 3
createdAt: "2026-02-05T07:27:54Z"
lastCommitAt: "2026-07-19T06:13:13Z"
lastReleaseAt: "2026-06-13T10:46:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 52
maintainers: ["zhourrr"]
openGraphImageUrl: "https://opengraph.githubassets.com/5072bf3ca48fbf4f73d52aff6da756f117ac1b0b3fe642d121a55b44bcc0666a/zvec-ai/zvec-node"
---

# Zvec Node.js Binding

</p>

The official Node.js binding for [Zvec](https://github.com/alibaba/zvec) — a lightweight, lightning-fast, in-process vector database.

## 💫 Features

- **Blazing Fast**: Searches billions of vectors in milliseconds.
- **Simple, Just Works**: Install with `npm i @zvec/zvec` and start searching in seconds. Pure local, no servers, no config, no fuss.
- **Dense + Sparse Vectors**: Work with both dense and sparse embeddings, with native support for multi-vector queries in a single call.
- **Hybrid Search**: Combine semantic similarity with structured filters for precise results.
- **Durable Storage**: Write-ahead logging (WAL) guarantees persistence — data is never lost, even on process crash or power failure.
- **Concurrent Access**: Multiple processes can read the same collection simultaneously; writes are single-process exclusive.
- **Runs Anywhere**: As an in-process library, Zvec runs wherever your code runs — notebooks, servers, CLI tools, or even edge devices.

## 📦 Installation

```bash
npm install @zvec/zvec
```

### ✅ Supported Platforms

- Linux (x86_64, ARM64)
- macOS (ARM64)
- Windows (x86_64)

### 🛠️ Building from Source

If you prefer to…
