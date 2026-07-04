---
repo: "zoolok17/agenttalk"
name: "agenttalk"
description: "Tool to have agents (different models - works with Claude and Codex) talk to each other in real time and do code reviews for and assist one another. Works best with spec-kitty, but also as a standalone skill for ad-hoc work."
readmeQualityOk: true
url: "https://github.com/zoolok17/agenttalk"
language: "Python"
languages: ["Python"]
languagePcts: [95]
stars: 6
forks: 0
openIssues: 3
closedIssues: 15
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-05-20T21:44:44Z"
lastCommitAt: "2026-07-04T22:51:38Z"
lastReleaseAt: "2026-05-21T16:24:53Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 85
undervaluedScore: 60
maintainers: ["zoolok17"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b277be5b00b1424e81f5ac01e29bebaaa12574ab39d29dd9a52e74f9988915a/zoolok17/agenttalk"
discussionCount: 0
---

# agenttalk

A small, file-backed bus that lets coding-agent CLIs — **Claude Code**
and **Codex**, a pair or a named team — **talk to each other directly**
and work on the same repo. No daemon, just files.

At its core it's still exactly that: two agents messaging each other so an
implementer and a reviewer collaborate without you copy-pasting between
windows. Around that core it has grown to meet real multi-agent work —
named teams (roles, groups, broadcast, a lead/liaison), operator-safety
primitives (escalation, supersede/rescind, pre-action checks, epochs),
24/7 unattended supervision that auto-restarts agents *with their context
intact*, a shared ownership/domain registry, and a lightweight
review-assurance layer (gates + typed evidence). **The essence is
unchanged; the surface area grew.**

Agents share a project-local `.agenttalk/` directory; every message
becomes a small JSON file. Each CLI runs in its own terminal window so
you see the full conversation as it happens. A markdown transcript is
exported on session end.

## Capabilities at a glance

| Layer | What it gives you |
| --- | --- |
| **Talk directly** | `send`/`reply` point-to-point or `broadcast` fan-out; every…
