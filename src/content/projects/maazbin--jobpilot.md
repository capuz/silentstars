---
repo: "maazbin/jobpilot"
name: "jobpilot"
description: "Self-evolving, agent-driven job hunter. An MCP server (no LLM of its own) that drives YOUR logged-in Chrome to apply via email, LinkedIn Easy Apply, ATS forms & connections — and learns from every failure."
readmeQualityOk: true
url: "https://github.com/maazbin/jobpilot"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 18
forks: 10
openIssues: 8
closedIssues: 1333
watchers: 1
contributors: 6
recentReleases: 6
createdAt: "2026-10-11T16:25:29Z"
lastCommitAt: "2026-11-07T13:54:23Z"
lastReleaseAt: "2026-10-31T18:55:16Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 99
undervaluedScore: 59
maintainers: ["maazbin", "github-actions[bot]", "Huzaifa-ali"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3183e6448f192d16852b722ff28f7f50a225f650a0c7011600c94cbc62326e3/maazbin/jobpilot"
---

# JobPilot

### One brain. Eight doors. A hunt that learns the lock.

You point a coding agent at this folder. That agent is the brain. JobPilot is the body: your browser, a memory that never asks twice, and a loop that turns a stuck page into a fix on GitHub. There is no model hiding in here.

The first minutes are quiet on purpose. Dependencies install themselves. Leave that window open. The browser opens once, on first onboard, and you sign in on every platform above. After that, those sessions stay.

**Stable release: [v3.6.0](https://github.com/maazbin/jobpilot/releases/tag/v3.6.0).** Y Combinator and Wellfound are in the hunt. An open role is emailed to a published founder address. The Apply button is not the whole path.

---

## The shape of it

One brain. It never starts a second brain. The worker only collects leads. Every email, Easy Apply,
portal application, and connection request is a decision the brain makes, then a tool it calls.

```mermaid
flowchart TB
  you["You"] --> brain["Brain — Grok, Codex, Claude, Gemini, or any MCP CLI"]
  brain -->|"reads AGENTS.md, calls tools"| mcp["JobPilot MCP"]

  subgraph tools ["Tools the brain drives"]
    direction LR…
