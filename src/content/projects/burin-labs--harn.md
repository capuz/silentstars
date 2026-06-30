---
repo: "burin-labs/harn"
name: "harn"
description: "A programming language for orchestrating AI agents."
url: "https://github.com/burin-labs/harn"
homepage: "https://harnlang.com"
language: "Rust"
languages: ["Rust", "C"]
languagePcts: [62, 36]
topics: ["acp", "agents", "ai-agents", "language", "mcp-client", "programming-language", "rust", "rust-crate"]
stars: 7
forks: 0
openIssues: 17
closedIssues: 696
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-26T13:36:25Z"
lastCommitAt: "2026-06-30T06:37:01Z"
lastReleaseAt: "2026-03-28T16:54:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 57
maintainers: ["kennethsinder", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e063e09205262884d4b68ede497d60e5128aaa23bd8769cc2197c126e5a7e2ef/burin-labs/harn"
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

> **Pre-release.** Harn is pre-1.0 — the language, standard library, and
> CLI may change between releases. Track what moved in the
> [release notes](https://github.com/burin-labs/harn/releases) and
> [`CHANGELOG.md`](./CHANGELOG.md).

## Install

One-line installer (recommended; no Rust toolchain required):

```bash
curl -fsSL https://harnlang.com/install.sh | sh
```

Detects OS/CPU, downloads the matching signed binary for the current
[GitHub…
