---
repo: "PakhomovAlexander/afactory"
name: "afactory"
description: "Multi-agent coding factory made fast"
readmeQualityOk: true
url: "https://github.com/PakhomovAlexander/afactory"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
stars: 15
forks: 1
openIssues: 48
closedIssues: 61
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-22T10:24:28Z"
lastCommitAt: "2026-10-23T08:47:39Z"
lastReleaseAt: "2026-09-15T18:16:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 91
undervaluedScore: 48
maintainers: ["PakhomovAlexander", "apkhmv-agent", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1342698465/46a89c8c-bb07-4c5c-ac9a-7849b1d3cc8f"
---

`af` is a multi-agent coding factory for Git repositories. Its first capability is a deterministic
Review Kernel: `af review` runs a sandboxed, budgeted pipeline of model and command reviewers
against a pinned Snapshot and folds what they return into a findings ledger with convergence.
`af task` runs implementation Tasks the same way. One invariant holds everywhere: reviewers and
implementers only ever mutate a sandbox and return typed artifacts; only the kernel integrates;
publishing to a branch or pull request stays an explicit human action.

**Status:** public alpha. See the latest release badge above for the published version;
`af --version` reports the binary you actually run. APIs, configuration and persisted state may
change in any release, and a release reads only the state and configuration it writes itself:
finish or discard in-flight Campaigns and Tasks before upgrading. Every release states in
[`CHANGELOG.md`](https://github.com/PakhomovAlexander/afactory/blob/HEAD/CHANGELOG.md), under *Authority compatibility*, which committed `.af/` policy it
accepts and the hand edit or `af onboard --refresh-lock` a change needs; that line describes the
release, not a promise about…
