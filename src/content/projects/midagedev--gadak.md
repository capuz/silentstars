---
repo: "midagedev/gadak"
name: "gadak"
description: "Your Jira and Confluence, mirrored into one local SQLite file — macOS app, web UI, and agent SQL/MCP. Instant search, offline, one binary."
readmeQualityOk: true
url: "https://github.com/midagedev/gadak"
homepage: "https://midagedev.github.io/gadak/"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [56, 25]
topics: ["ai-agents", "atlassian", "cli", "developer-tools", "full-text-search", "golang", "issue-tracker", "jira", "jira-client", "local-first"]
stars: 14
forks: 2
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-04T12:52:06Z"
lastCommitAt: "2026-08-19T04:04:02Z"
lastReleaseAt: "2026-08-07T12:35:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 60
maintainers: ["midagedev"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1322948077/99d3d2a0-bcfa-4979-9a2f-ddf01d203011"
discussionCount: 0
---

</p>

</p>

A local SQLite file of your Jira — so "which epic is stuck?" is one query, not an unaskable one.

gadak mirrors Jira *and* Confluence into one local SQLite file — issues,
comments, history, wiki pages — indexed together and searchable locally.
This window is where that work lives on your machine: triage
it in the [desktop app](https://github.com/midagedev/gadak/blob/HEAD/docs/DESKTOP.md) or a browser tab, or let a coding
agent ask in plain SQL and point the same window at the answer. One binary,
one app, no gadak account.

**The mirror is a cache you can throw away.** If this project stops tomorrow,
you delete a directory and have lost nothing: Jira stays the source of truth.

  &nbsp;—&nbsp; 534 issues, in your browser, right now.
</p>

```bash
gadak sql "select epic_key, count(*) from issues_full where resolved_at is null
           and epic_key <> '' group by epic_key order by 2 desc"
```

That last query is the point: JQL has no `GROUP BY`. "Which epic is actually
stuck?" is not a hard question — it is an unaskable one, until the data is a
file. [`docs/RECIPES.md`](https://github.com/midagedev/gadak/blob/HEAD/docs/RECIPES.md) has the rest.

Run that query now,…
