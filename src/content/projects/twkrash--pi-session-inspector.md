---
repo: "twKrash/pi-session-inspector"
name: "pi-session-inspector"
description: "See where your Pi tokens and cost went: local session analytics for models, tools, subagents, skills, integrations, and history."
readmeQualityOk: true
url: "https://github.com/twKrash/pi-session-inspector"
homepage: "https://pi.dev/packages/@twkrash/pi-session-inspector"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["pi", "pi-extension", "typescript", "ai-agents", "developer-tools", "observability", "session-analytics", "coding-agent", "cost-tracking", "llm"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-07T11:13:45Z"
lastCommitAt: "2026-09-25T09:03:08Z"
lastReleaseAt: "2026-09-17T21:30:27Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 60
maintainers: ["twKrash"]
openGraphImageUrl: "https://opengraph.githubassets.com/eb562a447f4e5a8bb446d9c80ebd37fc7a467cb4bde22f195d65150638ad2583/twKrash/pi-session-inspector"
---

# Pi Session Inspector

**See where your Pi tokens, cost, models, tools, and subagents actually went.**

Local-first session analytics for [Pi](https://github.com/earendil-works/pi) —
no external database, no analytics service, no session uploads.

</div>

## What is Pi Session Inspector?

A deterministic, local-only observability layer for [Pi](https://github.com/earendil-works/pi)
sessions. Inspector reconstructs what Pi already persisted — usage and cost,
generations, tool calls, compactions, errors, agent runs — and augments it with
bounded live and cooperative evidence when a producer publishes some. There is
no LLM analytics step, no cloud service, and no daemon: nothing leaves the
machine and no model call is spent on analysis.

It reads that data in place and reports it four ways — the interactive
localhost UI, the TUI inside Pi, a self-contained immutable HTML snapshot, and
the deterministic JSON report DTO — over the current session, one historical
session, the session history, or the global aggregate.

> **Status `1.4.0`:** current-session, history, global, ledger, localhost UI,
> in-Pi TUI, immutable HTML snapshots, deterministic JSON reports, the `mcp`
> semantic…
