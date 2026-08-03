---
repo: "multi-turn-inc/ai-usage-meter"
name: "ai-usage-meter"
description: "macOS menu bar app for monitoring AI service usage (Claude, Codex)"
readmeQualityOk: true
url: "https://github.com/multi-turn-inc/ai-usage-meter"
language: "Swift"
languages: ["Swift"]
languagePcts: [98]
stars: 5
forks: 0
openIssues: 3
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-04-04T16:09:36Z"
lastCommitAt: "2026-08-03T06:43:18Z"
lastReleaseAt: "2026-06-01T06:37:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 66
undervaluedScore: 37
maintainers: ["hebo1221"]
openGraphImageUrl: "https://opengraph.githubassets.com/d79820dc9c8147630680de2a91858dd9305ef8b99783f85ce079bd6237fb511f/multi-turn-inc/ai-usage-meter"
---

# Token Burn

**See what your AI agents are burning — right from the menu bar.**

Remaining quota, token burn, and system load for Claude Code & Codex, one glance away.

<br>

</div>

<br>

## Why

Agent sessions quietly eat through your 5-hour and weekly quotas while you work — and you usually find out the moment you hit the wall. Token Burn keeps the remaining budget in sight at all times, and shows how hard your Mac is working while the agents run.

## In the Menu Bar

Each service cell encodes two things at once:

- **Horizontal fill** → 5-hour quota remaining
- **Bar height** → 7-day quota remaining

While an agent is actively calling APIs, the bars pulse with a heartbeat animation. An optional **system-load meter** (CPU × GPU, RAM as color) sits alongside — like a tiny activity monitor for agent workloads. Clicking a cell jumps straight to that view in the panel.

## In the Panel

- **Circular gauges** per service — 5h / 7d remaining with reset countdown (*"3h 38m until reset"*)
- **Token Burn chart** — 1h / 24h / 7d scope, switch by trackpad scroll, with cache-aware API-equivalent cost estimates
- **System Load tab** — CPU × GPU gauge with RAM as color, top processes, and a…
