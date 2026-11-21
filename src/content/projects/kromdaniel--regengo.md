---
repo: "KromDaniel/regengo"
name: "regengo"
description: "a compile-time finite state machine generator for regular expressions in golang"
readmeQualityOk: true
url: "https://github.com/KromDaniel/regengo"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["golang", "golang-library", "re2", "regex", "go-faster-regex", "go-regex-optimization"]
stars: 121
forks: 0
openIssues: 5
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-07-09T16:38:40Z"
lastCommitAt: "2026-11-21T11:32:38Z"
lastReleaseAt: "2025-12-07T08:31:17Z"
status: "thriving"
tags: []
healthScore: 83
undervaluedScore: 16
maintainers: ["KromDaniel"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1016865376/96f25011-e3f9-45b5-9565-e8336a82d6e8"
---

# Regengo

Regengo is a **compile-time finite state machine generator** for regular expressions. It converts regex patterns into optimized Go code, leveraging the Go compiler's optimizations for type-safe, pattern-specific code generation.

## Highlights

**High Performance** — 2-15x faster than Go's `regexp`, including capture group extraction

**Compile-Time Safety** — Invalid capture group references fail at Go compilation, not runtime

**Smart Engine Selection** — Automatically chooses Thompson NFA, DFA, or TDFA based on pattern analysis

**Fast Replacers** — Pre-compiled replacement templates, 2-3x faster than stdlib

**Efficient Streaming** — Match patterns over `io.Reader` with constant memory and cross-boundary support

**Zero Allocations** — `FindStringReuse`, `FindAllStringAppend`, `ReplaceAllBytesAppend` for hot paths

**Rigorously Tested** — Over 2,000 generated tests across 250 patterns verify correctness against Go stdlib
