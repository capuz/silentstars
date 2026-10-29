---
repo: "AdguardTeam/AdGuardFiltersStats"
name: "AdGuardFiltersStats"
description: "The repo where we collect AdguardFilters statistics"
readmeQualityOk: true
url: "https://github.com/AdguardTeam/AdGuardFiltersStats"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 20
forks: 6
openIssues: 1
closedIssues: 1
watchers: 9
contributors: 30
recentReleases: 0
createdAt: "2022-12-18T13:42:05Z"
lastCommitAt: "2026-10-29T10:37:00Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 57
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e89f6147a4c62151d0329fd6a7438235f815f106b2456c3a22aa79bb112bc584/AdguardTeam/AdGuardFiltersStats"
---

# @adguard/github-stats

A command-line toolkit that collects repository activity from the GitHub
Events API, stores it as daily JSONL files, and produces per-contributor
statistics for any time window. Reports can be printed to the console or
published to a Slack channel as formatted messages.

It is designed for teams that want to track and share contributor activity
in a GitHub repository without relying on the GitHub web interface.

## What it does

The toolkit provides three CLI commands:

- **`github-poll`** — fetches the latest events from the GitHub REST API,
  deduplicates them, and appends them to a local JSONL collection (one file
  per day).
- **`github-stats`** — reads the stored events for a given time window,
  aggregates per-contributor activity, and prints the results to the
  console.
- **`github-publish`** — computes the same statistics and posts them to a
  Slack channel using Block Kit formatted messages.

Typical usage is to schedule `github-poll` frequently (e.g. every hour via
GitHub Actions) so that no events are lost, then run `github-stats` or
`github-publish` on demand or on a schedule to generate reports.

## Concepts

### <a id="activity_count">…
