---
repo: "MendixMau/mxcli-project-toolkit"
name: "mxcli-project-toolkit"
description: "A harness for AI coding agents building Mendix apps with mxcli: a staged pipeline, gates and tests that prove what was built, readable progress reports, and rules learned from real projects."
readmeQualityOk: true
url: "https://github.com/MendixMau/mxcli-project-toolkit"
language: "Shell"
languages: ["Shell", "JavaScript"]
languagePcts: [66, 20]
topics: ["agent-harness", "agentic-coding", "ai-agents", "claude-code", "developer-tools", "low-code", "mendix", "mxcli"]
stars: 20
forks: 12
openIssues: 52
closedIssues: 216
watchers: 0
contributors: 6
recentReleases: 1
createdAt: "2026-07-01T11:16:53Z"
lastCommitAt: "2026-11-09T11:59:16Z"
lastReleaseAt: "2026-10-19T10:09:05Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 95
undervaluedScore: 52
maintainers: ["MendixMau", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/ccecd5802bf77c752701c04e81c7544d169eb85fd82287d0d6500348cb4fd918/MendixMau/mxcli-project-toolkit"
discussionCount: 3
---

# mxcli-project-toolkit

> **Agents: this README is orientation, not the spec.** For any pipeline work, the executable authority is `skills/conversion-runbook.md` (stages, gates, interview protocol) plus each stage's owning skill — load those before producing anything. Stage summaries here and in `toolkit-guide.html` are routing, not deliverable lists.

**A harness for AI coding agents that build and change Mendix apps, so the result is one you can review and trust.**
Every decision written down, every stage gated, every rule learned on a real project.

## What it is

```mermaid
flowchart LR
  you["🧑 You<br/>answer the questions"] --> agent["🤖 AI agent<br/>Claude Code, Copilot, Cursor..."]
  agent --> tk["🧰 This toolkit<br/>stages · skills · gates"]
  tk --> cli["mxcli"] --> app[("Mendix app<br/>.mpr")]
  tk --> rep["📊 Reports<br/>you can read"]
```

A process layer on top of [mxcli](https://github.com/mendixlabs/mxcli). Clone it once; each
project points at it.

**Measured in 1.0** ([release notes](https://github.com/MendixMau/mxcli-project-toolkit/blob/HEAD/docs/releases/v1.0.md)):

| **5 of 5** vs 0 of 5 | **~40%** | **0 to 1** of 20 |
|:---:|:---:|:---:|
| drafts that…
