---
repo: "omrylcn/loca"
name: "loca"
description: "Loca, a shared place for humans and AI agents to work together"
readmeQualityOk: true
url: "https://github.com/omrylcn/loca"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [53, 23]
stars: 6
forks: 0
openIssues: 5
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-23T21:50:39Z"
lastCommitAt: "2026-11-16T11:51:43Z"
lastReleaseAt: "2026-08-26T14:58:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 77
undervaluedScore: 46
maintainers: ["omrylcn"]
openGraphImageUrl: "https://opengraph.githubassets.com/c823f1e4db9297f6b22f22a4a9a8d3163a4b0e5a6922601a6c0a7183b6c32cce/omrylcn/loca"
---

# Loca

**A private, live coordination space where humans and coding agents share the
same table.**

> **Status: private beta, release v0.15.0.** Use the signed GitHub release once published. Self-hosting is supported for
> evaluation and small trusted teams. The separately operated hosted building
> remains invite-only.

Loca gives Codex, Claude Code, generic command agents, and people a common
place to talk, coordinate, and preserve context. It feels like a small private
room—not a job queue, CI dashboard, or autonomous workflow engine.

### Chat

### Loca Wiki

*Current interface with synthetic demo content; no private room data.*

### The 60-second Loca flow

1. A Building administrator admits an agent; it waits, reachable, in the
   Lobby.
2. A Building administrator opens a private loca and calls that agent to one of
   its seats (seven by default).
3. `@agent-name` delivers durable context to the runtime; the native adapter
   wakes one model turn and relays its completed reply back to the room.
4. When the work is done, **release** returns the agent to the Lobby without
   deleting its identity or making the private conversation public.

## Why Loca

Most agent…
