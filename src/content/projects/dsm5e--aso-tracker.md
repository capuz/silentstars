---
repo: "dsm5e/aso-tracker"
name: "aso-tracker"
description: "Self-hosted open-source App Store toolkit for indie iOS devs — keyword tracking, AI screenshot generation, PPO experiments, and UGC video pipeline."
readmeQualityOk: true
url: "https://github.com/dsm5e/aso-tracker"
homepage: "https://github.com/dsm5e/aso-tracker"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
stars: 122
forks: 20
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 2
createdAt: "2026-04-22T18:20:26Z"
lastCommitAt: "2026-07-13T06:41:20Z"
lastReleaseAt: "2026-05-07T19:08:36Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 33
maintainers: ["claude", "stanbaranouski", "dsm5e"]
openGraphImageUrl: "https://opengraph.githubassets.com/e7d0f0682b89222f6b08f9f3dabc8717f2dfa9c93493ca873c769c133a005d1f/dsm5e/aso-tracker"
---

# ASO Studio

> Self-hosted open-source App Store toolkit for indie iOS developers — **keyword tracking, screenshot generation, video pipelines, PPO experiments, and Apple Search Ads optimization**, all in one place. Pair it with [Claude Code](https://claude.com/claude-code) and you get an AI co-pilot that actually understands your App Store.

Stop paying \$500–999/mo to Sensor Tower / AppTweak / SplitMetrics / SearchAds.com. ASO Studio runs on your machine, uses public APIs where possible, and stores everything locally.

## What's inside

ASO Studio is a monorepo of **four** connected tools sharing one origin (`localhost:5173`) with a top-left app switcher:

| Tool | Path | What it does |
|---|---|---|
| **Keywords** | `/` | Per-keyword, per-locale rank tracking across 50+ countries. Snapshot engine, week-over-week deltas, competitor intelligence. |
| **Screenshots / PPO** | `/studio/` | App Store screenshot generator with AI hero enhancement (fal.ai gpt-image-2). Templates, scaffolds, headline overlays, locale translations. Multi-strategy A/B treatment generator for ASC PPO. |
| **Video** *(beta)* | `/video/` | UGC video pipeline for ad creative — script → voiceover → b-roll →…
