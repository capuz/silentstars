---
repo: "jedbjorn/super-coder"
name: "super-coder"
description: "Forkable shell substrate for a single code repository — DB-backed identity, memory, roadmap, content; harness-agnostic boot. We build the data layer, we rent the harness."
url: "https://github.com/jedbjorn/super-coder"
language: "Python"
languages: ["Python", "PLpgSQL"]
languagePcts: [49, 37]
stars: 6
forks: 1
openIssues: 0
closedIssues: 27
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-04T10:17:54Z"
lastCommitAt: "2026-07-04T19:19:32Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 57
maintainers: ["jedbjorn"]
openGraphImageUrl: "https://opengraph.githubassets.com/8b5d648c6d3abb5841f4a315d4833c43de013d3fa92a3e4b221e5879b3ddf64a/jedbjorn/super-coder"
---

---
title: super-coder
tags: [substrate, shells, agentic-coding, harness-agnostic, sqlite]
date: 2026-06-14
project: super-coder
purpose: Forkable shell substrate for a repo
---

# super-coder

## Overview

A **forkable shell substrate for a single code repository.** You install it into
a project repo; it brings the shell system — DB-backed identity, memory, seed/L&S,
decisions, flags, a roadmap, and spec/doc content — and runs that repo through
whatever coding harness you point at it — **Claude Code, OpenCode, Codex, and
Mistral Vibe**, all sandbox-integrated (or run on the no-docker host path).

The bet: **we build the data layer, we rent the harness.** The agent loop, the
tools, the model API are the harness's job. We own identity + memory + content
and render a boot artifact the harness reads natively.

```mermaid
graph TD
  DB[(shell DB)]:::class1 --> REN[render chain]:::class2
  REN --> BOOT[CLAUDE.md / AGENTS.md]:::class2
  BOOT --> H[harness loop]:::class3
  H --> REPO[your repo]:::class4
  DB -.serialize.-> SQL[.sc-state/content.sql]:::class2
```

This repo is also **dogfood**: super-coder maintains super-coder. Its own
`.super-coder/` engine manages the maintainer shell…
