---
repo: "KratosDataGod/KratosForge"
name: "KratosForge"
description: "Windows desktop app that runs data jobs on your own machine with DuckDB and Polars, then publishes the results as Delta tables straight to Microsoft Fabric OneLake lakehouses. A run on your PC starts no Fabric job, which cuts Fabric capacity use; OneLake reads and writes still use some."
readmeQualityOk: true
url: "https://github.com/KratosDataGod/KratosForge"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [72, 25]
stars: 42
forks: 11
openIssues: 21
closedIssues: 6
watchers: 0
contributors: 3
recentReleases: 7
createdAt: "2026-10-09T16:42:51Z"
lastCommitAt: "2026-10-21T20:00:39Z"
lastReleaseAt: "2026-10-21T15:42:37Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 84
undervaluedScore: 38
maintainers: ["KratosDataGod", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/09a429dc5e0949055c03d8e85d7d20d8d76a6e995d6b373265a675b997d22654/KratosDataGod/KratosForge"
discussionCount: 1
---

# KratosForge

*Some files, folders and settings keep a legacy name so nothing breaks: [which ones and why](https://github.com/KratosDataGod/KratosForge/blob/HEAD/docs/kratosforge.md).*

Do your Microsoft Fabric data engineering on your own Windows PC: notebooks, Spark SQL queries, jobs and a metadata-driven medallion framework. Results are written straight into OneLake as Delta tables. A run on this PC starts no Fabric job, which cuts Fabric CU use; its OneLake reads and writes still use capacity.

**Develop with KratosForge. Execute on your infrastructure. Store and consume in Microsoft Fabric.** The picture above is where the product is headed. Today the desktop app and a single-node [headless agent](https://github.com/KratosDataGod/KratosForge/blob/HEAD/docs/agent.md) are built; multiple workers, resource governance and pipeline hand-off are later milestones in the [enterprise roadmap](https://github.com/KratosDataGod/KratosForge/blob/HEAD/docs/enterprise-roadmap.md).

**Why it exists:** Power BI took off because developers could build on their own machine and deploy to the cloud. KratosForge brings that model to data engineering. Read the story in **[Bringing the Power BI…
