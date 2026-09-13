---
repo: "Sudo-Ali-Dev/Rankistan"
name: "Rankistan"
description: "The definitive index of Pakistani open source developers. Auto-updated daily via GitHub Actions."
readmeQualityOk: true
url: "https://github.com/Sudo-Ali-Dev/Rankistan"
homepage: "https://rankistan.dev/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
stars: 142
forks: 17
openIssues: 8
closedIssues: 25
watchers: 3
contributors: 11
recentReleases: 0
createdAt: "2026-03-20T00:25:00Z"
lastCommitAt: "2026-09-13T08:29:38Z"
lastReleaseAt: "2026-05-22T21:21:48Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 93
undervaluedScore: 31
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a35ddea11711da7d7b69608dc337b2554309f2cea04b2447fc87bd6e80873e21/Sudo-Ali-Dev/Rankistan"
discussionCount: 6
---

# Rankistan

**Current release: [v2.0.0](https://github.com/Sudo-Ali-Dev/Rankistan/releases/tag/v2.0.0)** — Scoring v2 (diminishing returns, daily caps, Evolution tab, Register breakdown).

An AI-powered daily leaderboard tracking active Pakistani developers on GitHub. The site includes a searchable **Leaderboard**, a **Developer Map** that groups developers by normalized profile locations on an interactive map of Pakistan, a **Badge Generator** for README rank badges, **Register** for profile checks with a live score breakdown, **Evolution** for how the scoring formula changed over time, and **About** documentation for pipeline logic, filters, and scheduling.

> **Note:** The frontend is currently optimized for desktop. Mobile design is still under development but usable.

## Contents

- [Frontend](#frontend)
- [How It Works](#how-it-works)
- [Running Locally](#running-locally)
- [Scheduling](#scheduling)
- [Project Structure](#project-structure)
- [Cloudflare Worker API](#cloudflare-worker-api)
- [Groq Key Security](#groq-key-security)
- [Contributing](#contributing)
- [TODO](#todo)

## Frontend

| Tab | Description |
|---|---|
| **Leaderboard** | Ranked list from…
