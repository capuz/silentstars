---
repo: "libra-tools/libra"
name: "libra"
description: "Libra is evolving into an AI agent–native version control tools"
readmeQualityOk: true
url: "https://github.com/libra-tools/libra"
homepage: "https://libra.tools"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["rust", "vcs", "git", "jj", "pijul", "version-control", "version-manager", "versioning"]
stars: 98
forks: 161
openIssues: 49
closedIssues: 169
watchers: 1
contributors: 88
recentReleases: 0
createdAt: "2025-09-12T14:23:27Z"
lastCommitAt: "2026-10-30T11:01:57Z"
lastReleaseAt: "2026-03-28T13:40:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 95
undervaluedScore: 57
maintainers: ["genedna", "fleeto"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ab2eba978ec16a943b5e22c50047bbd6a4c5dee436690a9dec67ed1720949e5/libra-tools/libra"
---

[中文](https://github.com/libra-tools/libra/blob/HEAD/README.zh-CN.md) | English

# Libra — An AI-native Extended VCS Built for Agents

**Versioning the entire software creation lifecycle, not just code.**

Libra is an AI-native version control system that combines Git-compatible code history with capture of external AI coding sessions. It records supported agents' session and checkpoint metadata and, when transcript content is available, stores redacted snapshots in `refs/libra/traces`, so developers can inspect the context behind changes and carry that history with a repository.

Libra fits into existing developer workflows through Git-compatible objects and wire protocols. Its capture hooks support Claude Code, Codex, and OpenCode; those tools run the coding agents, while Libra records their work.

---

> **Coverage-v2 source version:** The coverage-v2 descriptions below refer to the Libra 0.30.50 source line and later compatible versions. This is not a stable-release announcement; check the [official releases](https://github.com/libra-tools/libra/releases) and `libra --version` for installed support. Other sections retain their own version requirements. Coverage-v2 does not…
