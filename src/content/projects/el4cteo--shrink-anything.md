---
repo: "EL4CTEO/shrink-anything"
name: "shrink-anything"
description: "Less code, same tests passing: delete the dead code, files, dependencies and assets in any codebase, and keep each cut only if your own tests still pass."
readmeQualityOk: true
url: "https://github.com/EL4CTEO/shrink-anything"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["ai-agents", "bundle-size", "claude-code", "cli", "code-cleanup", "dead-code", "mcp", "refactoring", "rust", "unused-dependencies"]
stars: 378
forks: 21
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 2
createdAt: "2026-11-23T15:55:48Z"
lastCommitAt: "2026-11-27T16:23:40Z"
lastReleaseAt: "2026-11-25T16:08:08Z"
status: "newborn"
tags: ["solo_builder", "funded"]
healthScore: 89
undervaluedScore: 13
maintainers: ["EL4CTEO"]
openGraphImageUrl: "https://opengraph.githubassets.com/606d0151435320bee50356ae71ed0bad7290d5b8fa97fc92b7144fc920b2cc86/EL4CTEO/shrink-anything"
fundingLinks: ["GITHUB:https://github.com/EL4CTEO"]
---

**shrink-anything** finds dead code, files, dependencies and assets, deletes them, and runs *your own tests* after every cut. What passes stays, what breaks is put back. Fully reversible.

Less code also means less for your agent to read: on the demo app, 46% fewer tokens.

## Install

```sh
npm i -g @el4cteo/shrink-anything      # or: cargo install shrink-anything
```

## Use

```sh
shrink-anything go --agent claude -- npm test     # or pytest, cargo test, go test ./..., any check that fails when the app breaks
```

Or step by step:
