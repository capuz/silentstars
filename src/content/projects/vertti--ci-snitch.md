---
repo: "vertti/ci-snitch"
name: "ci-snitch"
description: "CI performance intelligence tool — detect outliers, regressions, flaky pipelines, and cost hotspots in GitHub Actions"
readmeQualityOk: true
url: "https://github.com/vertti/ci-snitch"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["ci", "cli", "devops", "github-actions", "golang", "observability", "performance"]
stars: 7
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-09T10:41:06Z"
lastCommitAt: "2026-07-16T05:59:43Z"
lastReleaseAt: "2026-04-13T06:45:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 37
maintainers: ["vertti", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/446ea727f7580135f8c31dcf6059e6677f2127744158529ad7e6d45ae6acdd44/vertti/ci-snitch"
---

# ci-snitch

CI performance intelligence for GitHub Actions. Detect regressions, flaky pipelines, cost hotspots, and volatile jobs — then pinpoint the commit that caused it.

ci-snitch analyzes your workflow history and surfaces what matters: where your CI minutes go, which pipelines are unreliable, what got slower (and whether it stuck), and where to invest effort for maximum impact.

## Features

- **Triage header** — top offenders by CI time, volatility, and active regressions at a glance
- **Change point detection** — CUSUM algorithm with Mann-Whitney significance testing finds the exact commit that made things slower (or faster), and whether the change stuck
- **Oscillation detection** — volatile jobs that bounce up/down are separated from real regressions
- **Failure & flakiness analysis** — failure rates, conclusion breakdowns, rerun tax, and failing step attribution
- **Step-level timing** — identifies which steps within a job consume the most time
- **Cost estimation** — billable minutes by runner type (including self-hosted and larger runners) with daily rate and "bang for buck" priority scoring
- **Volatility scoring** — p95/median ratio classifies each workflow as…
