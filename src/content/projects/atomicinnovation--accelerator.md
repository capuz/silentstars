---
repo: "atomicinnovation/accelerator"
name: "accelerator"
description: "Development acceleration toolkit with multi-lens code review, implementation planning, codebase research, and git workflow automation."
readmeQualityOk: true
url: "https://github.com/atomicinnovation/accelerator"
homepage: "https://go-atomic.io"
language: "Rust"
languages: ["Rust", "HTML"]
languagePcts: [49, 29]
topics: ["ai-assisted-development", "ai-coding", "ai-workflow", "claude", "claude-code", "rpi", "skills"]
stars: 34
forks: 2
openIssues: 13
closedIssues: 2
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-03-15T00:07:31Z"
lastCommitAt: "2026-10-27T12:39:23Z"
lastReleaseAt: "2026-05-05T12:50:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 37
maintainers: ["tobyclemson", "atomicinnovation-maintainers"]
openGraphImageUrl: "https://opengraph.githubassets.com/a59c6bb3363b087f6dbbe125e9e2f70d721115af1717ba9e27c6226995f73843/atomicinnovation/accelerator"
---

A Claude Code plugin for structured, context-efficient software development.

Accelerator splits development into discrete phases — research, plan, implement —
that communicate through the filesystem rather than the conversation. Each phase
runs with minimal context, writing its findings to a persistent `meta/`
directory, so every step stays focused and avoids the quality loss that comes
with large, cluttered context windows.

## Getting Started

```bash
/plugin marketplace add atomicinnovation/accelerator
/plugin install accelerator@atomic-innovation
```

For the full walkthrough — initialising your project
and running the research → plan → implement loop — see [Getting
Started](https://atomicinnovation.github.io/accelerator/getting-started/).

## Documentation

The full documentation site is published at
**<https://atomicinnovation.github.io/accelerator/>**.

**Concepts**

- [Philosophy](https://atomicinnovation.github.io/accelerator/philosophy/) — the
  phase model and why development is split across the filesystem.
- [Full Workflow](https://atomicinnovation.github.io/accelerator/workflow/) — the
  map of every skill family and how they fit together, so you can pick the parts…
