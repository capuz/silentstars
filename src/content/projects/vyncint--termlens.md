---
repo: "vyncint/termlens"
name: "termlens"
description: "Headless end-to-end testing for CLI and TUI apps in Rust: real PTYs, rendered-screen assertions, snapshots, and screen diffs."
readmeQualityOk: true
url: "https://github.com/vyncint/termlens"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["pty", "ratatui", "rust", "snapshot-testing", "terminal", "testing", "tui"]
stars: 27
forks: 25
openIssues: 39
closedIssues: 312
watchers: 1
contributors: 27
recentReleases: 10
createdAt: "2026-08-09T04:59:10Z"
lastCommitAt: "2026-11-03T10:52:30Z"
lastReleaseAt: "2026-08-23T06:04:25Z"
status: "thriving"
tags: ["needs_contributors", "release_machine", "fork_magnet"]
healthScore: 97
undervaluedScore: 58
maintainers: ["vyncint", "dependabot[bot]", "maskjelly"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1328448020/f84216d4-9c40-4f69-870e-59bcaceb4fbb"
discussionCount: 1
---

# termlens

**Integration testing for terminal programs, the way you would test a web
app.** termlens spawns your real binary in a real pseudo-terminal, renders
its output through a VT emulator into an in-memory screen grid, and lets a
test wait on, assert against and snapshot that grid — what a user would
*see*, not the bytes that produced it.

Ratatui's [snapshot-testing recipe](https://ratatui.rs/recipes/testing/snapshots/)
includes a termlens example for testing a compiled application through a PTY.
Use it alongside `TestBackend` snapshots to cover interactions and process
behaviour.

## Why

An in-process widget test renders your `draw` function into a buffer. It is
fast and precise, and it cannot see anything between `draw` and the user's
eyes. termlens is the second layer, for a small number of end-to-end flows
through the real binary:

- **Terminal state** — raw mode and the alternate screen entered and left,
  the cursor restored after `q` or a panic, the modes the application turned
  on and whether it turned them off.
- **What is actually drawn** — box drawing, colours, wide characters, a
  password field that is *concealed* rather than printed in clear, a stray…
