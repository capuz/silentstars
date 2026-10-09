---
repo: "liitx/claudart"
name: "claudart"
description: "A Dart CLI for managing structured debug and suggestion sessions via local markdown workspaces."
readmeQualityOk: true
url: "https://github.com/liitx/claudart"
language: "Dart"
languages: ["Dart"]
languagePcts: [99]
stars: 10
forks: 6
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-15T23:21:11Z"
lastCommitAt: "2026-10-09T10:50:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 77
undervaluedScore: 47
maintainers: ["liitx"]
openGraphImageUrl: "https://opengraph.githubassets.com/ffd7d754d02467c0140b2f93aefca0e56f50beadb447c13109cda3e313c49b8a/liitx/claudart"
---

# claudart

**A typed, self-hosting session harness for Claude Code.** claudart owns the state *between* AI coding sessions, so the model always opens already knowing the bug, the scope, the root cause, and what's been tried. Session state is an enum. Model routing is a total function over 90 cells. Every claim on this page is backed by a command you can run.

> Not an Anthropic product. Built for Claude Code + Dart/Flutter projects.
>
> **Deep dive:** [PLAN.md](https://github.com/liitx/claudart/blob/HEAD/PLAN.md) carries the full architecture and phase log. [docs/design.md](https://github.com/liitx/claudart/blob/HEAD/docs/design.md) is the formal FSA proof.

---

## Contents

**Start here**
- [What it is](#what-it-is) — claudart vs Claude Code, in one table
- [Verify it yourself](#verify-it-yourself) — every number on this page, reproducible in three commands

**How one session runs**
- [The session state machine](#the-session-state-machine) — the enum that drives everything
- [The handoff](#the-handoff) — the one file both sides read and write
- [The pipeline engine](#the-pipeline-engine) — what `suggest`/`debug`/`flow` actually share
- [Model routing](#model-routing) — the…
