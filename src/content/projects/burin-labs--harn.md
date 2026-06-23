---
repo: "burin-labs/harn"
name: "harn"
description: "A programming language for orchestrating AI agents."
url: "https://github.com/burin-labs/harn"
homepage: "https://harnlang.com"
language: "Rust"
languages: ["Rust", "C"]
languagePcts: [61, 37]
topics: ["acp", "agents", "ai-agents", "language", "mcp-client", "programming-language", "rust", "rust-crate"]
stars: 7
forks: 0
openIssues: 15
closedIssues: 685
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-03-26T13:36:25Z"
lastCommitAt: "2026-06-23T23:16:34Z"
lastReleaseAt: "2026-03-28T16:54:49Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "under_pressure"]
healthScore: 100
undervaluedScore: 65
maintainers: ["kennethsinder", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/12e6cac757c4fbf9098df9ffb17cc28cde57c312b62d18511743a1b06cd7e604/burin-labs/harn"
---

# Harn

Harn is a programming language and runtime for orchestrating AI agents.
It sits between product code and provider/runtime code: products declare
workflows, policies, capabilities, and UI hooks, while Harn owns transcripts,
context assembly, retries, tool routing, persistence, replay, and provider
normalization.

Harn also emits portable `opentrustgraph/v0.1` trust records for autonomy
decisions, approval gates, and tier transitions. `v0.1` adds three
reserved `metadata` keys (`effects_grant`, `effects_used`,
`parent_record_id`) so chain validators can prove that a child agent's
`effects_used` stayed inside the parent's `effects_grant`. The public
schema and fixtures live in [`opentrustgraph-spec/`](./opentrustgraph-spec/).

## Install

One-line installer (recommended; no Rust toolchain required):

```bash
curl -fsSL https://harnlang.com/install.sh | sh
```

Detects OS/CPU, downloads the matching signed binary for the current
[GitHub release](https://github.com/burin-labs/harn/releases),
verifies it against the release's `SHA256SUMS` manifest, and installs
`harn`, `harn-dap`, and `harn-lsp`. It honors `$HARN_INSTALL_DIR` or
`$XDG_BIN_DIR` when set, otherwise uses…
