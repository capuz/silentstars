---
repo: "richardtkemp/foci"
name: "foci"
description: "openclaw-like ai agent platform. Written in go for speed and memory-efficiency. Supports claude code as backend, or APIs. Protects your secrets from being read by your agents or otherwise leaked!"
url: "https://github.com/richardtkemp/foci"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-21T05:34:06Z"
lastCommitAt: "2026-06-24T23:37:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 47
maintainers: ["richardtkemp"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe9243def0aba11805acaeda1d7bb6bb62ed1ffe6ac856f4d3316b0e3727a766/richardtkemp/foci"
---

# Foci

**One binary. ~35 MB idle. No framework.**

AI agents on Telegram, written in Go.

[Quick Start](#quick-start) · [Design](#design) · [Docs](#documentation)

</div>

---

Inspired by [OpenClaw](https://github.com/openclaw/openclaw), built from scratch in Go — single binary, cache-first, with OS-level secret isolation. Session branching, tool piping, and coding agent orchestration go well beyond the original. Built for Anthropic, but any OpenAI-compatible endpoint works.

## Quick Start

```bash
git clone https://github.com/richardtkemp/foci.git && cd foci && ./setup.sh
```

See [docs/INSTALL.md](docs/INSTALL.md) for prerequisites, options, and next steps.

## Background

OpenClaw is the established, full-featured choice in this space — broad provider support, native apps on every platform, a marketplace of 13,000+ skills, and a large community. Foci makes different bets. Where OpenClaw optimizes for breadth, foci optimizes for depth: cache-aware prompt architecture, OS-level secret isolation, and a codebase small enough that one person can audit the whole thing. See [docs/COMPARISON.md](docs/COMPARISON.md) for a detailed feature comparison.

| | OpenClaw | Foci |…
