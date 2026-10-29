---
repo: "lemonlion/Kronikol"
name: "Kronikol"
description: "See what your Integration and Component tests actually do: HTTP calls, queries and messages as sequence diagrams in an HTML report."
readmeQualityOk: true
url: "https://github.com/lemonlion/Kronikol"
homepage: "https://lemonlion.github.io/BreakfastProvider/"
language: "C#"
languages: ["C#"]
languagePcts: [78]
topics: ["acceptance-testing", "bdd", "bdd-tests", "component-testing", "diagrams", "diagrams-as-code", "lightbdd", "nunit", "plantuml", "plantuml-diagrams"]
stars: 17
forks: 1
openIssues: 70
closedIssues: 118
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2023-08-20T16:23:35Z"
lastCommitAt: "2026-10-29T10:20:20Z"
lastReleaseAt: "2026-03-24T23:12:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 64
maintainers: ["lemonlion"]
openGraphImageUrl: "https://opengraph.githubassets.com/7eed1bdb7f9afc1ce80ae5ec83436d77fc02eb980779b3695a4ff2f8755bcf7d/lemonlion/Kronikol"
---

# <img src="icon.svg" width="32" height="32" alt="Kronikol icon" style="vertical-align: middle;"> Kronikol

> [!TIP]
> **Install in your service today with this easy [AI Prompt](https://github.com/lemonlion/Kronikol/wiki/AI-Integration-Prompt)**

Automatically generates [rich interactive UI reports](https://lemonlion.github.io/BreakfastProvider/) with PlantUML sequence, activity and component diagrams, with timeline visualizations from your integration/component test HTTP traffic (real or faked) and telemetry.

Kronikol tracks every call between your test, your Service Under Test and its dependencies, and turns them into:

- **Sequence diagrams** for every test: HTTP, gRPC and GraphQL calls, database queries (Cosmos DB, SQL through EF Core and more), cache commands, events and messages, and calls to any interface.
- **Activity and flame diagrams** of the flow inside your service, a **C4 component diagram** of the whole service, and **scenario timelines** that show where the time goes.
- **Cross-run history**: a ledger kept in your repository says whether each failure is a regression, flaky, or failing since a particular run.
- **Living documentation**: specifications in YAML,…
