---
repo: "wjhuang88/talos"
name: "talos"
description: "A safety-first, minimal-core agent runtime in Rust. CLI-first, evolving into a full agent platform with built-in self-evolution."
readmeQualityOk: true
url: "https://github.com/wjhuang88/talos"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
stars: 5
forks: 0
openIssues: 46
closedIssues: 66
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-05-29T17:04:06Z"
lastCommitAt: "2026-09-04T08:10:49Z"
lastReleaseAt: "2026-07-11T17:24:09Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 55
maintainers: ["wjhuang88"]
openGraphImageUrl: "https://opengraph.githubassets.com/c26a8ead0a17209ff3d396da9202885227971c68b456c170e14a4cc17e9c8401/wjhuang88/talos"
---

# Talos

[中文文档](https://github.com/wjhuang88/talos/blob/HEAD/README.zh-CN.md)

Talos is a Rust-native local coding agent for developers who want a safety-first runtime they can
inspect, extend, and operate from their own machine. It combines a terminal UI, provider adapters,
session history, built-in coding tools, explicit permissions, runtime Skills, MCP/RPC integration,
and project-governance support while keeping the default core local and auditable.

Talos has published its first stable pre-1.0 release line. The current release version in this
workspace is `v0.9.0`. It is usable for local coding workflows, but still pre-1.0: APIs, command
surfaces, and storage formats may change as the product hardens. This README describes shipped
user-facing behavior; research tracks such as web control expansion beyond the read-only loopback
dashboard, broader dotagents compatibility, plugin carriers, and advanced document ingestion are tracked separately under
[Project Status](#project-status).

## Highlights

- **Local-first coding agent**: interactive TUI, inline mode, and print mode for scripts and smoke tests.
- **Configurable providers and models**: use the parameterless `/connect`…
