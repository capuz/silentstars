---
repo: "tapaskar/archwhere"
name: "archwhere"
description: "Mission control for AI coding agents: every PR on the architecture map, an MCP server, a tamper-evident record of who decided what, and which branches in flight will collide."
readmeQualityOk: true
url: "https://github.com/tapaskar/archwhere"
homepage: "https://www.npmjs.com/package/archwhere"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [91]
topics: ["agentic-ai", "ai-agents", "architecture", "architecture-as-code", "claude", "github-actions", "mermaid", "audit-log", "c4-model", "code-review"]
stars: 5
forks: 0
openIssues: 2
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-10-31T03:19:32Z"
lastCommitAt: "2026-11-06T13:19:38Z"
lastReleaseAt: "2026-11-04T09:00:24Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 61
maintainers: ["tapaskar", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/d8e1dff861215c46e43977f2084ff0d605e089624b555256a9bfb3f2a9263cf6/tapaskar/archwhere"
---

# archwhere

**Your AI coding agents ship thirty PRs a week. Do you know where they land?**

archwhere puts every change — every PR, every task, every agent — on a **declared
architecture map**: which component it touches, whether that component is a
security zone, and what needs you *right now*. Then it goes further: the map
becomes the place you **talk to your agents**.

*Mission control on a fictional product: the attention rail (security → blocked →
needs-attention → ready-to-merge), the component map with live badges, and a
thread pinned to a component — answered by a coding agent, with its PR.*

Zero dependencies. One JSON file. Works with Claude, or any agent that can see GitHub.

## Why

Supervising an agent workforce diff-by-diff doesn't scale. Architecture tools
(Structurizr, IcePanel) assume a human architect maintains the model — so the
model rots. CODEOWNERS and labelers map files to owners but carry no meaning.

archwhere inverts it: **your agents maintain the map as a condition of merging**
(there's a `SKILL.md` that tells them how, and `archwhere check` fails CI when
the map goes stale). You read components, not diffs.

## Quickstart

```bash
npx archwhere init
```…
