---
repo: "0x5457/thinpack.js"
name: "thinpack.js"
description: "Node.js apps as one executable: 13-25x smaller than Node SEA and 9-18x smaller than bun (pi: 12.4 MiB vs 157.8 and 115.2 MiB). Capability-trimmed built-ins on QuickJS or V8."
readmeQualityOk: true
url: "https://github.com/0x5457/thinpack.js"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [82]
topics: ["bundler", "executable", "nodejs", "quickjs", "rust", "single-file", "v8"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-11-17T07:28:20Z"
lastCommitAt: "2026-11-18T12:06:30Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 45
maintainers: ["0x5457", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/21a807e29aa2deab7e935f06778e1ccde386b229c1bd4e24cb31b54e4bd9f6fa/0x5457/thinpack.js"
---

# thinpack.js

Packs a Node.js app into a single executable file. `deno_core`/`v8x` provide the JS engine,
`oxc` static analysis computes the built-in module closure the app references, only those
implementations are linked, and the app's sources and assets are appended to the template.

The same apps land **9–25× smaller** than the other single-file packers: `pi` at 12.4 MiB
against bun's 115.2 and Node SEA's 157.8; `tsc` at 9.0 MiB against 109.6 and 149.8; `js-yaml`
at 5.8 MiB against 104.3 and 143.8.

- **Capability trimming**: `require`/`import` are resolved from the entry; unreferenced
  built-in modules never enter the binary.
- **Single-file artifact**: the payload is appended after the template and read by the runtime
  from itself; identical input produces identical bytes.
- **Two backends**: QuickJS by default, V8 on request, same code and separate size budgets.
- **Behavior parity**: user-visible modules follow the vendored Node sources, and the Node.js
  compatibility suite is part of the test run.

## Quick start

Requires Rust 1.99.1 (pinned by `rust-toolchain.toml`).
