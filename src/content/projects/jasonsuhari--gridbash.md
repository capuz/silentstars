---
repo: "jasonsuhari/gridbash"
name: "gridbash"
description: "Cross-platform terminal grid for running Codex, Claude, Gemini, and other CLI agents side by side."
readmeQualityOk: true
url: "https://github.com/jasonsuhari/gridbash"
homepage: "https://jasonsuhari.github.io/gridbash/"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["ai-agents", "claude", "codex", "coding-agents", "developer-tools", "git-bash", "multiplexer", "orchestration", "ratatui", "rust"]
stars: 132
forks: 6
openIssues: 39
closedIssues: 131
watchers: 11
contributors: 1
recentReleases: 0
createdAt: "2026-07-05T22:46:52Z"
lastCommitAt: "2026-10-24T08:07:58Z"
lastReleaseAt: "2026-07-18T09:53:35Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "under_pressure"]
healthScore: 95
undervaluedScore: 30
maintainers: ["github-actions[bot]", "jasonsuhari"]
openGraphImageUrl: "https://opengraph.githubassets.com/6084d54493243be74c28f3d696ecefe614359b2add04bb362afba95229844e09/jasonsuhari/gridbash"
discussionCount: 4
---

# GridBash

**The sexiest way to tokenmaxx.**

GridBash is a local workspace for running and coordinating CLI coding agents in
parallel. Launch, authenticate, isolate, monitor, and steer Codex, Claude, and
other agents side by side, each in a real PTY pane.

[Website](https://jasonsuhari.github.io/gridbash/) |
[npm](https://www.npmjs.com/package/gridbash) |
[Releases](https://github.com/jasonsuhari/gridbash/releases) |
[Full reference](https://github.com/jasonsuhari/gridbash/blob/HEAD/docs/REFERENCE.md)

## Quick start

Requires Node.js 18+. GridBash releases Windows x64, glibc-based Linux
x64/arm64, and macOS 13+ binaries for Apple Silicon and Intel.

```sh
npm install -g gridbash
gridbash
```

Or launch a six-pane Codex grid directly:

```sh
gridbash 2x3 --profile codex
```

The npm package installs only the native binary for your current platform.
The npm badge shows the version currently available from the registry. If it
temporarily trails the [latest GitHub release](https://github.com/jasonsuhari/gridbash/releases/latest),
use that release's matching native artifact until npm publication catches up.

## Why GridBash

- **Precise input routing.** Type into the focused pane, a…
