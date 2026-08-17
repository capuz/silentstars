---
repo: "Sudo-Ali-Dev/Rankistan"
name: "Rankistan"
description: "The definitive index of Pakistani open source developers. Auto-updated daily via GitHub Actions."
readmeQualityOk: true
url: "https://github.com/Sudo-Ali-Dev/Rankistan"
homepage: "https://rankistan.dev/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [98]
stars: 139
forks: 13
openIssues: 11
closedIssues: 20
watchers: 2
contributors: 10
recentReleases: 1
createdAt: "2026-03-20T00:25:00Z"
lastCommitAt: "2026-08-17T04:20:46Z"
lastReleaseAt: "2026-05-22T21:21:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 31
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f3372fe6bee877168658151471b221d507079e9ced18dcc0c6376580457f4f2/Sudo-Ali-Dev/Rankistan"
discussionCount: 5
---

# Rankistan

**Current release: [v2.0.0](https://github.com/Sudo-Ali-Dev/pakdev-index/releases/tag/v2.0.0)** — Scoring v2 (diminishing returns, daily caps, Evolution tab, Register breakdown).

An AI-powered daily leaderboard tracking active Pakistani developers on GitHub. The site includes a searchable **Leaderboard**, a **Developer Map** that groups developers by normalized profile locations on an interactive map of Pakistan, a **Badge Generator** for README rank badges, **Register** for profile checks with a live score breakdown, **Evolution** for how the scoring formula changed over time, and **About** documentation for pipeline logic, filters, and scheduling.

> **Note:** The frontend is currently optimized for desktop. Mobile design is still under development but usable.

## Contents

- [Frontend](#frontend)
- [How It Works](#how-it-works)
- [Running Locally](#running-locally)
- [Scheduling](#scheduling)
- [Project Structure](#project-structure)
- [Groq Key Security](#groq-key-security)
- [TODO](#todo)

## Frontend

| Tab | Description |
|---|---|
| **Leaderboard** | Ranked list from `public/data.json` with search, filters, sort, CSV export, and pagination |
| **Map** |…
