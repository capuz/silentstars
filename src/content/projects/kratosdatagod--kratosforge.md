---
repo: "KratosDataGod/KratosForge"
name: "KratosForge"
description: "Windows desktop app that runs data jobs on your own machine with DuckDB and Polars, then publishes the results as Delta tables straight to Microsoft Fabric OneLake lakehouses. A run on your PC starts no Fabric job, which cuts Fabric capacity use; OneLake reads and writes still use some."
readmeQualityOk: true
url: "https://github.com/KratosDataGod/KratosForge"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [68, 28]
stars: 45
forks: 11
openIssues: 41
closedIssues: 68
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-10-09T16:42:51Z"
lastCommitAt: "2026-10-29T05:50:01Z"
lastReleaseAt: "2026-10-27T04:21:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 41
maintainers: ["KratosDataGod"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe5d57a013542647af92783022c26af3a2cb07018071096d48cc0a8318972e01/KratosDataGod/KratosForge"
discussionCount: 2
---

# KratosForge

*Some files, folders and settings keep a legacy name so nothing breaks: [which ones and why](https://github.com/KratosDataGod/KratosForge/blob/HEAD/docs/kratosforge.md).*

Do your Microsoft Fabric data engineering on your own Windows PC: notebooks, Spark SQL queries, jobs and a metadata-driven medallion framework. Results are written straight into OneLake as Delta tables. A run on this PC starts no Fabric job, which cuts Fabric CU use; its OneLake reads and writes still use capacity.

**Develop with KratosForge. Execute on your infrastructure. Store and consume in Microsoft Fabric.** The picture above is where the product is headed. Today the desktop app and a single-node [headless agent](https://github.com/KratosDataGod/KratosForge/blob/HEAD/docs/agent.md) are built; multiple workers, resource governance and pipeline hand-off are later milestones in the [enterprise roadmap](https://github.com/KratosDataGod/KratosForge/blob/HEAD/docs/enterprise-roadmap.md).

**Why it exists:** Power BI took off because developers could build on their own machine and deploy to the cloud. KratosForge brings that model to data engineering. Read the story in **[Bringing the Power BI…
