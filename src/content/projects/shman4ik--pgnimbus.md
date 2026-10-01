---
repo: "Shman4ik/pgNimbus"
name: "pgNimbus"
description: "A fast, open-source PostgreSQL GUI client (.NET + Avalonia)"
readmeQualityOk: true
url: "https://github.com/Shman4ik/pgNimbus"
homepage: "https://shman4ik.github.io/pgNimbus/"
language: "C#"
languages: ["C#"]
languagePcts: [95]
topics: ["avalonia", "database-client", "dotnet", "gui", "postgresql", "sql-client", "windows", "native-aot"]
stars: 23
forks: 0
openIssues: 1
closedIssues: 8
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-07-04T15:52:11Z"
lastCommitAt: "2026-10-01T10:24:48Z"
lastReleaseAt: "2026-07-14T19:18:03Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded", "release_machine"]
healthScore: 97
undervaluedScore: 51
maintainers: ["Shman4ik", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1289325330/a3251151-ff79-409b-9770-6108b5706f76"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/shman4ik"]
discussionCount: 0
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="design/masters/logo/wordmark-dark.png">
  </picture>
</p>

<h1 align="center">pgNimbus</h1>

  <b>A fast PostgreSQL client that talks to your database and nothing else.</b><br>
  On screen in about 0.2 s. Results stream while the query runs. No telemetry, no account, no cloud.
</p>

</p>

</p>

---

## 🚀 pgNimbus 1.0

pgNimbus reached 1.0 three months after its first commit on July 4, 2026, and 32 releases later. It started as a weekend experiment typed on a phone and grew, evening by evening, into the client its author keeps open at work all day.

Before tagging 1.0, the whole codebase was read the way an attacker would read it, and the way a DBA connecting to production would. That review found 18 problems. The worst were a query that could run twice, a statement a DBA had just killed being sent again after a reconnect, and SSH host keys that were never checked. All of them are fixed in 1.0. The review was done in house, with the same Claude Code agents that write most of the code, so it isn't a third-party audit. [See what's in 1.0.](https://github.com/Shman4ik/pgNimbus/releases/tag/v1.0.0)

## 🎯 Why pgNimbus?…
