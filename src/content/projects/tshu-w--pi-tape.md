---
repo: "tshu-w/pi-tape"
name: "pi-tape"
description: "Tape-style context construction for pi, inspired by tape.systems"
readmeQualityOk: true
url: "https://github.com/tshu-w/pi-tape"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [65, 35]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-27T06:40:41Z"
lastCommitAt: "2026-07-28T14:56:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 75
undervaluedScore: 29
maintainers: ["tshu-w"]
openGraphImageUrl: "https://opengraph.githubassets.com/53f93b45ec3c2e15934e0b225f90f83e0682438bfc7166dd303fde696777d0a9/tshu-w/pi-tape"
---

# pi-tape

[Tape](https://tape.systems/)-style context management for [pi](https://pi.dev).

## Install

```bash
pi install git:github.com/tshu-w/pi-tape
```

## Tools

| Action | Description |
|---|---|
| `anchor` | Create a semantic boundary with name and summary |
| `view` | List anchors and compact records, or display an entry by `entryId` |
| `search` | Find old entries by query, kind, and timestamp filters |
| `info` | Show current tape boundary, notes status, and context usage |

## Notes

pi-tape manages two kinds of memory:

- **tape** — the immutable history (append-only log). Recalled on demand via `search`/`view`.
- **notes** — mutable durable facts the model maintains itself (state). Injected into the system prompt every turn, right after AGENTS.md.

In [tape.systems](https://tape.systems/) terms, notes are a *memory view* over the tape, materialized as a file: every note originates from a fact on the tape (user feedback, a lesson from a work segment), and the model acts as an incremental reducer that folds new facts into the view as they are confirmed — assembly cost is paid at write time instead of read time. Each fold step is itself recorded on the tape as a normal…
