---
repo: "aangairbender/cgarena"
name: "cgarena"
description: "Local bot arena similar to CodinGame."
readmeQualityOk: true
url: "https://github.com/aangairbender/cgarena"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [73, 25]
topics: ["codingame"]
stars: 28
forks: 5
openIssues: 1
closedIssues: 35
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-05-10T10:47:56Z"
lastCommitAt: "2026-09-07T08:30:37Z"
lastReleaseAt: "2026-03-15T21:58:59Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 54
maintainers: ["aangairbender"]
openGraphImageUrl: "https://opengraph.githubassets.com/34c0bcf810caeb64e26111d7ea5fe2900d824333b19787a636d3195f1c72b381/aangairbender/cgarena"
---

# CG Arena

CG Arena is a personal, trusted local workbench for CodinGame bot authors. Each arena belongs to
one challenge and helps an author evaluate bot improvements with substantially more local match
evidence than CodinGame provides.

See [CONTEXT.md](https://github.com/aangairbender/cgarena/blob/HEAD/CONTEXT.md) for the canonical domain language.

## Features

- Local web UI with guided arena configuration
- Managed CodinGame referee installation and updates
- Custom-command referee integration
- Submit immutable bot code as a Candidate or Benchmark, then promote, reject, rename, or archive it
- Bounded, staged Candidate evaluation against a live Benchmark pool
- Rating calculation using OpenSkill, TrueSkill, Elo, or Bradley–Terry
- Realtime global and filtered custom leaderboards
- Match browsing with attribute filters
- Per-turn bot analytics with average, minimum, and maximum aggregation
- Match replays and seed inspection
- Local SQLite storage and optional trusted-LAN access

## Evaluation workflow

New submissions default to Candidate and pin the active evaluation-plan revision. The scheduler
collects the configured evidence against active Benchmarks; promotion and…
