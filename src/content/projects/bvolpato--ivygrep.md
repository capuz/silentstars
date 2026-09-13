---
repo: "bvolpato/ivygrep"
name: "ivygrep"
description: "Turn code tasks, diffs, and stack traces into local, relationship-aware context packs for coding agents."
readmeQualityOk: true
url: "https://github.com/bvolpato/ivygrep"
homepage: "https://bvolpato.github.io/ivygrep/"
language: "Rust"
languages: ["Rust"]
languagePcts: [78]
topics: ["mcp", "cli", "code-intelligence", "code-search", "coding-agents", "developer-tools", "local-first", "model-context-protocol", "rust", "semantic-search"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 86
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-10T18:23:55Z"
lastCommitAt: "2026-09-13T08:28:57Z"
lastReleaseAt: "2026-04-04T03:47:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 59
maintainers: ["bvolpato", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b611905816ceea911c1eebd9133de337a21fdc93ea02511cf7819b9ac34991e/bvolpato/ivygrep"
discussionCount: 0
---

</p>

  <strong>Turn coding tasks into bounded, branch-aware context.</strong><br/>
  Search, indexing, and context generation run locally. Optional model profiles download pinned assets on first use.
</p>

</p>

</p>

</p>

## Search and build context

```bash
# Find code by intent
ig "where is refresh token rotated?"

# Build context from code and current changes
ig context "fix refresh-token races" --since main --budget 8000
```

Abridged output:

```text
# ivygrep context
Budget: 7642 / 8000 estimated tokens
Coverage: 7 files | 2 primary | 1 definitions | 1 dependencies | 0 dependents | 2 callers | 0 references | 1 tests | 0 config | 0 docs
Candidates: 31 retrieved | 14 selected
## Evidence
### 1. src/auth/refresh.rs:118-166 [primary, definition]
Why: task anchor; changed implementation.
Signals: lexical, symbol, git change.
```

Search answers where. Context answers what an agent needs to change safely.

The context command combines task anchors with commits since the branch point, staged and dirty files,
issue or trace paths, and indexed relationships. It returns one bounded Markdown pack with path, lines,
role, reason, and retrieval signals. `--since` requires a Git…
