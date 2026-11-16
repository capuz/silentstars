---
repo: "thejens/dbt-temporal"
name: "dbt-temporal"
description: "Run dbt on Temporal: a Rust worker that executes dbt projects as durable Temporal workflows, one activity per model. Helm chart, container images, deb/rpm."
readmeQualityOk: true
url: "https://github.com/thejens/dbt-temporal"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["analytics-engineering", "data-engineering", "data-pipeline", "dbt", "elt", "helm-chart", "kubernetes", "orchestration", "rust", "temporal"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 7
createdAt: "2026-02-23T19:06:18Z"
lastCommitAt: "2026-11-16T11:54:43Z"
lastReleaseAt: "2026-10-26T21:44:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 61
maintainers: ["thejens"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ec2848ca74791e04a10265de09db0399f8ebdb50e4b570c4a4f5c79d347a391/thejens/dbt-temporal"
---

A Temporal worker that executes dbt projects as durable workflows, one activity per model.

---

**dbt-temporal** is an open-source [Temporal](https://temporal.io/) worker, written in Rust, that runs [dbt](https://www.getdbt.com/) projects as durable Temporal workflows. Every model, test, seed and snapshot is its own Temporal activity, so a `dbt build` gets parallel execution across workers, per-node retries, crash recovery and live progress in the Temporal UI. Runs are started, scheduled and chained like any other Temporal workflow.

It embeds [dbt v2](https://github.com/dbt-labs/dbt), the Rust rewrite of dbt, as a library. There is no Python and no dbt CLI to install: the worker parses your project once at startup and then executes SQL against your warehouse through dbt's own adapters.

> [!NOTE]
> **Project status: proof of concept, not production-ready.** dbt-temporal builds on two stable, generally available releases: [dbt v2](https://github.com/dbt-labs/dbt) (pinned to `v2.0.11`) and the [Temporal Rust SDK](https://github.com/temporalio/sdk-rust) (`1.2.0`). dbt v2's crates are an internal API rather than a published library, though, and several…
