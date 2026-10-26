---
repo: "efekoca/ai-usage-tracker"
name: "ai-usage-tracker"
description: "Private, local tracker for Claude Code, Codex, Antigravity and OpenCode usage, cost and plan limits on Windows, macOS and Linux"
readmeQualityOk: true
url: "https://github.com/efekoca/ai-usage-tracker"
language: "Rust"
languages: ["Rust", "Svelte"]
languagePcts: [56, 27]
stars: 19
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-04T18:55:51Z"
lastCommitAt: "2026-10-26T18:06:14Z"
lastReleaseAt: "2026-10-10T20:42:34Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 89
undervaluedScore: 44
maintainers: ["efekoca", "imgbot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/92dbee440d6710549c9f4d1e75c81248ac343ceda90780f6aa9b4f3af5341cdf/efekoca/ai-usage-tracker"
fundingLinks: ["GITHUB:https://github.com/efekoca"]
---

# AI Usage Tracker

**Your Claude Code, Codex, Antigravity and OpenCode usage, cost, and plan limits, on your own computer.**

A private app for Windows, macOS, and Linux that reads the usage logs your AI tools already write, keeps its own archive, and shows tokens, API-equivalent cost, and live limit percentages. No account, no cloud, no telemetry.

   [](LICENSE)

[Features](#features) · [Install](#install) · [Privacy](#privacy) · [How it works](#how-it-works) · [Build from source](#build-from-source) · [Türkçe](https://github.com/efekoca/ai-usage-tracker/blob/HEAD/README.tr.md)

- **Private by design.** Prompts and responses never enter the app's archive. Only counts and metadata are kept, in a local SQLite file, and your usage data never leaves the computer.
- **Know where every number comes from.** Every figure is labeled: **Exact** from the tool's own log, **Estimated** by the app, or **Captured** live. Nothing is guessed silently.
- **Stay ahead of your limits.** Five-hour and weekly percentages for Claude, Codex and Antigravity are read every few minutes, with a forecast of when each window fills.

## What sets it apart

- **Track your limits without spending quota.** Your…
