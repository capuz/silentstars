---
repo: "xuannulia/CaptCha"
name: "CaptCha"
description: "Server-owned human verification platform"
originalDescription: "Server-owned human verification platform"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/xuannulia/CaptCha"
homepage: "https://xuannulia.github.io/CaptCha/"
language: "Go"
languages: ["Go"]
languagePcts: [69]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-07T14:00:27Z"
lastCommitAt: "2026-07-08T05:42:05Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 51
maintainers: ["xuanserver"]
openGraphImageUrl: "https://opengraph.githubassets.com/0da4bc0f4a3b5c272df80562d83df158d193468fd9659cd573c0b327ad51ad60/xuannulia/CaptCha"
---

# CaptCha

The server-side CAPTCHA platform. The browser is only responsible for displaying and reporting interaction traces; answers, strategies, tickets, clearance, rate limiting, auditing, and risk control judgments are all handled on the server side.

- Demo: [https://xuannulia.github.io/CaptCha/](https://xuannulia.github.io/CaptCha/)
- License: [AGPL-3.0-only](https://github.com/xuannulia/CaptCha/blob/HEAD/LICENSE)

## Why not a third-party CAPTCHA service

CaptCha is suitable for scenarios where you need to control the verification chain:

- Strategies, materials, answers, tickets, clearance, and audit data remain on your own server.
- User behavior traces are not handed over to third-party CAPTCHA platforms.
- Private deployment, or the operating environment cannot reliably access external CAPTCHA services.
- CAPTCHA is just one layer of the risk control chain and needs to work together with rate limiting, account reputation, IP risk, device signals, and business rules.

## What it includes

- Go API server: CAPTCHA, tickets, strategies, auditing, resources, and management interfaces.
- Runtime frontend: CAPTCHA interface embedded in business pages.
- Admin frontend:…
