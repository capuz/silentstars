---
repo: "atusy/kakehashi"
name: "kakehashi"
description: "language server that bridges the gap between languages, editors, and tooling"
readmeQualityOk: true
url: "https://github.com/atusy/kakehashi"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["language-server", "language-server-protocol"]
stars: 258
forks: 3
openIssues: 40
closedIssues: 112
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-07-03T02:00:21Z"
lastCommitAt: "2026-07-11T05:57:03Z"
lastReleaseAt: "2026-01-16T17:43:14Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 94
undervaluedScore: 36
maintainers: ["atusy"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1012856574/8ddd151f-06d3-45f1-9f05-58d4ab3e2f43"
fundingLinks: ["GITHUB:https://github.com/atusy"]
---

# 🌉 kakehashi (架け橋)

kakehashi is a bridge (架け橋) across your editors, your languages, and the language servers that make them smart.

- bridge to consistent syntax highlighting and smart selection — for any language with a Tree-sitter grammar
- bridge to your language servers' features — configured once in kakehashi, available in any editor
- bridge to all of the above — even for code embedded inside other code

```mermaid
flowchart TB
    K[🌉 kakehashi] <-->|Highlighting, selection,<br>and more — everywhere| E["Your editor<br>(any LSP client)"]
    K <-.->|Borrows the smarts of<br>real language servers| LS["pyright, rust-analyzer,<br>and friends"]
```

## 🎨 Highlighting & smart selection, for any language

Open a file and kakehashi highlights it — consistently, in every editor. It parses with Tree-sitter, so any language with a grammar just works (that's hundreds of them), and it fetches the grammar it needs automatically the first time you open a file. No manual installs, no config to get started.

The same engine powers **smart selection**: grow or shrink your selection along the code's real structure, not just by lines and words.

Need a niche language, or want highlighting…
