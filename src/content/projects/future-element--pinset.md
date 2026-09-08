---
repo: "Future-Element/pinset"
name: "pinset"
description: "A predictable, local-first runtime version manager for multilingual projects"
readmeQualityOk: true
url: "https://github.com/Future-Element/pinset"
homepage: "https://pinset.future-element.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
topics: ["cli", "developer-tools", "runtime-manager", "rust", "version-manager"]
stars: 11
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-28T09:14:25Z"
lastCommitAt: "2026-09-08T08:17:56Z"
lastReleaseAt: "2026-08-13T08:08:46Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 89
undervaluedScore: 56
maintainers: ["MoorZhou"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a655b2094e0f313a1a9204b6fd7bce2f28e88d4719d3dc4d794598855f417ee/Future-Element/pinset"
fundingLinks: ["KO_FI:https://ko-fi.com/MoorZhou"]
---

# Pinset

[English](https://github.com/Future-Element/pinset/blob/HEAD/README.md) | [简体中文](https://github.com/Future-Element/pinset/blob/HEAD/README.zh-CN.md)

Pinset is a predictable, project-boundary-aware runtime version manager for polyglot projects.

It manages Node.js, pnpm, Bun, Go, Python, Java, Rust, .NET, Flutter/Dart, and declarative development CLIs through one project configuration and one exact lockfile. Inside a project, commands such as `node`, `python`, `cargo`, `flutter`, and `jq` run directly through a lightweight shim. When the project is trusted, the same shim can inject the selected age-encrypted environment profile.

```text
pinset.toml  ──selection intent, project policy, environment profiles
     │
     ├── pinset.lock ──exact versions, platform artifacts, integrity metadata
     │
     └── Pinset shim ──direct command routing and policy-controlled environment injection
```

## Why Pinset

- **One project model**: use `pinset.toml` and `pinset.lock` across languages instead of stacking a separate version manager for every ecosystem.
- **Reproducible and explainable**: configuration retains selectors such as `lts`, `stable`, and version prefixes while the…
