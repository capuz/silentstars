---
repo: "Starfie1d1272/RivalHub"
name: "RivalHub"
description: "Open-source collegiate esports operations: registration, team formation, eligibility review, scheduling, and tournament statistics."
originalDescription: "Open-source collegiate esports operations: registration, team formation, eligibility review, scheduling, and tournament statistics."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Starfie1d1272/RivalHub"
homepage: "https://match.starfie1d.top"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["esports", "tournament-management", "tournament-scheduler", "typescript", "web-app", "counter-strike-2"]
stars: 16
forks: 0
openIssues: 16
closedIssues: 240
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-05-07T10:04:26Z"
lastCommitAt: "2026-10-24T08:20:39Z"
lastReleaseAt: "2026-05-15T15:49:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 49
maintainers: ["Starfie1d1272", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c337f1b5167a1210c669d900eab19c44978a19fd7734002d4f31d06e001d3ce6/Starfie1d1272/RivalHub"
---

RivalHub is an open-source tournament platform for collegiate esports events. It is currently used mainly for NJU Rivals and NJU Major, covering registration, team formation, eligibility review, scheduling, match management, statistics, and tournament history.

Rivals and Major share accounts, long-term Teams, matches, and data infrastructure, while retaining their own registration methods and format workflows.

The platform's data center is located at `/stats` and by default aggregates all public historical tournaments. The tournament selector can switch to a single edition's scope. Site-wide navigation is fixed as Tournaments, Teams, and Data Center, while in-tournament business entry points remain independent. For statistical definitions and public data boundaries, see [domain model](https://github.com/Starfie1d1272/RivalHub/blob/HEAD/docs/domain-model.md). For the interaction contract, see [UI system](https://github.com/Starfie1d1272/RivalHub/blob/HEAD/docs/ui-system.md).

## Main Features

- **Players and competitive profiles** — Uniformly maintain identity, educational eligibility, and competitive information, reusable across different tournaments.
- **Teams and…
