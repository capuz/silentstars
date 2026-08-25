---
repo: "midagedev/gadak"
name: "gadak"
description: "Your Jira and Confluence, mirrored into one local SQLite file — macOS app, web UI, and agent SQL/MCP. Instant search, offline, one binary."
readmeQualityOk: true
url: "https://github.com/midagedev/gadak"
homepage: "https://midagedev.github.io/gadak/"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [59, 24]
topics: ["ai-agents", "atlassian", "cli", "developer-tools", "full-text-search", "golang", "issue-tracker", "jira", "jira-client", "local-first"]
stars: 25
forks: 2
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-04T12:52:06Z"
lastCommitAt: "2026-08-25T04:10:08Z"
lastReleaseAt: "2026-08-07T12:35:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 53
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

**The mirror is a cache you can throw away.** On a connected workspace, if this
project stops tomorrow, you delete a directory and have lost nothing: Jira
stays the source of truth.

  &nbsp;—&nbsp; 534 issues, in your browser, right now.
  <br>
  &nbsp;—&nbsp; what shipped.
</p>

A connected site needs one [API token](https://id.atlassian.com/manage-profile/security/api-tokens)
— it covers Jira and Confluence on the same site. A standalone workspace
needs no Atlassian account at all.

macOS app, CLI included:

```bash
brew install --cask midagedev/tap/gadak
```

CLI only — same UI in a browser tab via `gadak serve`:

```bash
brew install…
