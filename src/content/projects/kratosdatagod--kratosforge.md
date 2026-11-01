---
repo: "KratosDataGod/KratosForge"
name: "KratosForge"
description: "Windows desktop app that runs data jobs on your own machine with DuckDB and Polars, then publishes the results as Delta tables straight to Microsoft Fabric OneLake lakehouses. A run on your PC starts no Fabric job, which cuts Fabric capacity use; OneLake reads and writes still use some."
readmeQualityOk: true
url: "https://github.com/KratosDataGod/KratosForge"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [67, 29]
stars: 46
forks: 11
openIssues: 24
closedIssues: 265
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-10-09T16:42:51Z"
lastCommitAt: "2026-11-01T10:44:01Z"
lastReleaseAt: "2026-10-29T20:52:17Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 45
maintainers: ["KratosDataGod"]
openGraphImageUrl: "https://opengraph.githubassets.com/3be1cb41b2d403967d47de5410c334c3845c5a5ac8ef841625099b89584f6e92/KratosDataGod/KratosForge"
discussionCount: 2
---

# KratosForge

Build and run your Microsoft Fabric data engineering on your own Windows PC: notebooks, Spark SQL, jobs and a metadata-driven medallion framework. Results are written straight into OneLake as Delta tables. A run on this PC starts no Fabric job, which cuts Fabric CU use; its OneLake reads and writes still use capacity.

**Develop with KratosForge. Execute on your infrastructure. Store and consume in Microsoft Fabric.** Today the desktop app and a single-node [headless agent](https://github.com/KratosDataGod/KratosForge/blob/HEAD/docs/agent.md) are built. Why it exists: [Bringing the Power BI Model to Data Engineering](https://github.com/KratosDataGod/KratosForge/blob/HEAD/docs/why-kratosforge.md).

## Where it stands

- **New, and not yet checked end to end on a live Fabric tenant.** What talks only to your PC is tested on every build; features that talk to Fabric and haven't been tried on a tenant are marked **Preview** in the app. See [What is tested and what isn't](https://github.com/KratosDataGod/KratosForge/blob/HEAD/docs/README.md#what-is-tested-and-what-isnt).
- **The exe isn't code-signed yet,** so Windows SmartScreen warns the first time you start it.
-…
