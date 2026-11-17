---
repo: "tinhtute/zbrain"
name: "zbrain"
description: "a Go-native CLI for local-first trusted memory and workspace-isolated agent context."
readmeQualityOk: true
url: "https://github.com/tinhtute/zbrain"
homepage: "https://therealtinhtute.github.io/zbrain"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["agent", "agent-memory", "codex", "golang", "skills", "context", "context-engineering"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-05-24T16:04:26Z"
lastCommitAt: "2026-11-17T14:50:01Z"
lastReleaseAt: "2026-09-06T14:58:21Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 84
undervaluedScore: 50
maintainers: ["tinhtute", "baroitrung", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/be9a758606a95e9c84e18678405d452b7ebf4d9a281353069e50e99daca672b8/tinhtute/zbrain"
discussionCount: 1
---

# zbrain

`zbrain` is a Rust-native CLI for local-first trusted memory and
workspace-isolated agent context.

The shipped runtime keeps canonical OKF-style Markdown claims and immutable
local evidence snapshots, builds a disposable SQLite FTS5 index, and returns
trusted context JSON. It does not call an LLM or model provider.

[MIT license](https://github.com/tinhtute/zbrain/blob/HEAD/LICENSE) · [Contributing](https://github.com/tinhtute/zbrain/blob/HEAD/CONTRIBUTING.md) ·
[Changelog](https://github.com/tinhtute/zbrain/blob/HEAD/CHANGELOG.md)

## Features

- Workspace-isolated memory rooted at `~/.zbrain/` or `ZBRAIN_HOME`.
- OKF-style claim concepts in the `axioms`, `mental-models`, `projects`, and
  `decisions` tiers.
- Explicit claim lifecycle: `draft -> approved -> superseded|revoked`.
- Immutable local evidence snapshots with origin, capture time, media type,
  byte length, and SHA-256 metadata.
- Rebuildable per-workspace SQLite FTS5 lexical indexes.
- Fail-closed trusted retrieval with visible `ready`, `gap`, and `blocked`
  outcomes.
- `status` and `doctor` diagnostics for index and embedding configuration.
- Optional local hybrid retrieval through `ask --embed`; lexical…
