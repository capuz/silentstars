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
recentReleases: 7
createdAt: "2026-10-31T03:19:32Z"
lastCommitAt: "2026-11-07T10:36:23Z"
lastReleaseAt: "2026-11-06T15:16:06Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 91
undervaluedScore: 61
maintainers: ["tapaskar", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/46a375dadc4368418650cd6c34387edd063f6194dffa04e87ee61950bc70b109/tapaskar/archwhere"
discussionCount: 1
---

# archwhere

**Your AI coding agents ship thirty PRs a week. Do you know where they land?**

archwhere puts every change — every PR, every task, every agent — on a **declared
architecture map**: which component it touches, whether that component is a
security zone, and what needs you *right now*. Then it goes further: the map
becomes the place you **talk to your agents**.

*Mission control on Meridian, the fictional product in `examples/`: failing components
at the top of the attention rail, the work strip, and the map graded by live health.
One surface — no tabs. The health figures come from an example runtime endpoint.*

Zero dependencies. One JSON file. Works with Claude, or any agent that can see GitHub.

## Why

Supervising an agent workforce diff-by-diff doesn't scale. Architecture tools
(Structurizr, IcePanel) assume a human architect maintains the model — so the
model rots. CODEOWNERS and labelers map files to owners but carry no meaning.

archwhere inverts it: **your agents maintain the map as a condition of merging**
(there's a `SKILL.md` that tells them how, and `archwhere check` fails CI when
the map goes stale). You read components, not diffs.

## Quickstart

```bash…
