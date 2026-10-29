---
repo: "KratosDataGod/KratosForge"
name: "KratosForge"
description: "Windows desktop app that runs data jobs on your own machine with DuckDB and Polars, then publishes the results as Delta tables straight to Microsoft Fabric OneLake lakehouses. A run on your PC starts no Fabric job, which cuts Fabric capacity use; OneLake reads and writes still use some."
readmeQualityOk: true
url: "https://github.com/KratosDataGod/KratosForge"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [69, 27]
stars: 45
forks: 11
openIssues: 27
closedIssues: 109
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-10-09T16:42:51Z"
lastCommitAt: "2026-10-29T14:07:24Z"
lastReleaseAt: "2026-10-27T10:41:12Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 43
maintainers: ["KratosDataGod"]
openGraphImageUrl: "https://opengraph.githubassets.com/b8de6e82487c8e8d98653b0d6689c96968f6634dbbe07cd3eb0dc82182d33107/KratosDataGod/KratosForge"
discussionCount: 2
---

# KratosForge

Build and run your Microsoft Fabric data engineering on your own Windows PC: notebooks, Spark SQL, jobs and a metadata-driven medallion framework. Results are written straight into OneLake as Delta tables. A run on this PC starts no Fabric job, which cuts Fabric CU use; its OneLake reads and writes still use capacity.

**Develop with KratosForge. Execute on your infrastructure. Store and consume in Microsoft Fabric.** Today the desktop app and a single-node [headless agent](https://github.com/KratosDataGod/KratosForge/blob/HEAD/docs/agent.md) are built. Why it exists: [Bringing the Power BI Model to Data Engineering](https://github.com/KratosDataGod/KratosForge/blob/HEAD/docs/why-kratosforge.md).

## Where it stands

- **New, and not yet checked end to end on a live Fabric tenant.** What talks only to your PC is tested on every build; features that talk to Fabric and haven't been tried on a tenant are marked **Preview** in the app. See [What is tested and what isn't](https://github.com/KratosDataGod/KratosForge/blob/HEAD/docs/README.md#what-is-tested-and-what-isnt).
- **The exe isn't code-signed yet,** so Windows SmartScreen warns the first time you start it.
-…
