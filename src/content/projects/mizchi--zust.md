---
repo: "mizchi/zust"
name: "zust"
description: "experimental alternative rustc"
readmeQualityOk: true
url: "https://github.com/mizchi/zust"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
stars: 9
forks: 1
openIssues: 28
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-11-18T05:33:37Z"
lastCommitAt: "2026-11-24T01:53:57Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 79
undervaluedScore: 37
maintainers: ["claude", "mizchi", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e207f2ac370db48f6f909b5e186913d03144a85dc360ef94b381a4f1a494a560/mizchi/zust"
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
