---
repo: "RegiByte/the-tower"
name: "the-tower"
description: "A local-first HQ for many Claude Code sessions: one live system, disposable renderers. Extensible."
readmeQualityOk: true
url: "https://github.com/RegiByte/the-tower"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
stars: 15
forks: 10
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 12
recentReleases: 0
createdAt: "2026-10-08T16:43:52Z"
lastCommitAt: "2026-11-13T11:25:43Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 49
maintainers: ["RegiByte", "GlaucoNeves", "CarlosBonetti"]
openGraphImageUrl: "https://opengraph.githubassets.com/78bb5c32f1e4f2b96c9f7bbcd907a68627404c27cbeccd826cae84a5fc5e0e4f/RegiByte/the-tower"
discussionCount: 0
---

# The tower

**An HQ for running many Claude Code sessions at once, on your own machine.** Every session is the full Claude Code
terminal in a real PTY, kept alive by a small host process and recorded to a log. Everything you see is derived from
those logs, so the presentation is swappable: three views ship with it, and you can write your own without losing a
single capability.

The tower is for the moment one Claude Code session stops being enough: a few features in flight, a reviewer or two,
something that runs every night. Instead of a stack of terminal tabs you have a building. Each **project** is a
**floor**; each session on it is a **worker** with a **callsign** (`HOLMES-42`) it keeps for good, across
resumes. You see at a glance who is working, who is done and who is waiting on you, and you go to them in order.

Local only: no accounts, no external services. macOS, or Windows through WSL 2.

## What you can do

**Know who needs you.** A worker that asks a question, holds a permission dialog, or finished a turn you haven't
answered is *waiting on you*. The tower lists those waits in order, notifies you and rings; `N` goes to the next
one. With no worker open, the skyline…
