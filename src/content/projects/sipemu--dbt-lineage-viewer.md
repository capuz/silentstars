---
repo: "sipemu/dbt-lineage-viewer"
name: "dbt-lineage-viewer"
description: "PR-time dbt lineage, impact analysis and rebuild plans — no warehouse, no Python. CLI, TUI, GitHub Action and MCP server, written in Rust."
readmeQualityOk: true
url: "https://github.com/sipemu/dbt-lineage-viewer"
homepage: "https://sipemu.github.io/dbt-lineage-demo/"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
topics: ["dbt", "cli", "cli-app", "dbt-lineage", "analytics-engineering", "ci", "column-level-lineage", "data-engineering", "data-lineage", "github-actions"]
stars: 23
forks: 3
openIssues: 3
closedIssues: 65
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-06T20:04:22Z"
lastCommitAt: "2026-11-07T10:36:15Z"
lastReleaseAt: "2026-06-08T10:54:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 56
maintainers: ["sipemu"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1151713000/717e12da-d679-48e5-a429-e06666864dd0"
---

# dbt-lineage

**See what a dbt change breaks — downstream models, columns, dashboards and contracts — before it ships.** dbt-lineage parses your project directly (no warehouse, no Python, no `dbt compile`) and puts lineage and impact wherever you work.

## Use it where you work

| Where | What you get | Get it |
| --- | --- | --- |
| **Pull requests** (GitHub) | One sticky comment per PR: lineage diff, column impact, affected dashboards, breaking changes, rebuild selector; inline lint annotations | [`uses: sipemu/dbt-lineage-viewer@v0`](#as-a-github-action) · [live demo](https://github.com/sipemu/dbt-lineage-demo/pull/1) |
| **GitLab · Bitbucket · Azure DevOps** | The same report as an MR/PR comment, plus Code Quality / Code Insights / build warnings | [`docs/CI.md`](https://github.com/sipemu/dbt-lineage-viewer/blob/HEAD/docs/CI.md) |
| **VS Code, Cursor, VSCodium** | *Show impact of my changes* panel, hover and go-to-definition on `ref()`/`source()`, lint diagnostics; binary bundled | [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=sipemu.dbt-lineage-viewer) · [Open VSX](https://open-vsx.org/extension/sipemu/dbt-lineage-viewer) |
| **Terminal** |…
