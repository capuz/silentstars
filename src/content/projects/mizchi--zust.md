---
repo: "mizchi/zust"
name: "zust"
description: "experimental alternative rustc"
readmeQualityOk: true
url: "https://github.com/mizchi/zust"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
stars: 10
forks: 1
openIssues: 97
closedIssues: 24
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-11-18T05:33:37Z"
lastCommitAt: "2026-11-27T12:57:09Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 84
undervaluedScore: 39
maintainers: ["claude", "github-actions[bot]", "mizchi"]
openGraphImageUrl: "https://opengraph.githubassets.com/55a87bf98125ed3bb736af332bd63061172c53656cd8b4c915107bbff4ab0db4/mizchi/zust"
---

# zust

**zustc** is a compiler for a subset of Rust built for fast incremental builds. **zust-analyzer** is a lightweight LSP server.

- **zustc** has its own front end: lexer, parser and type inference. It generates code with Cranelift (the default) or
  minclif, its own small x86-64 backend. It is tuned for the edit-one-thing-and-rebuild loop of development, and tries
  to minimize:
  - rebuild time
  - peak memory
  - disk used by the cache
  - output binary size

  zustc can compile itself.
- **zust-analyzer** is an LSP server for editors. It answers definition, references, hover, completion, rename and more
  with a light analysis over the token stream and a table of definitions. It works on ordinary Rust workspaces, and
  also indexes std and dependency crates.
