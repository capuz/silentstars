---
repo: "thejens/dbt-temporal"
name: "dbt-temporal"
description: "pre-packaged temporal worker running dbt models"
readmeQualityOk: true
url: "https://github.com/thejens/dbt-temporal"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 6
createdAt: "2026-02-23T19:06:18Z"
lastCommitAt: "2026-09-09T08:18:44Z"
lastReleaseAt: "2026-09-06T15:48:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 56
maintainers: ["thejens"]
openGraphImageUrl: "https://opengraph.githubassets.com/b442fb324a97763dbcb66aa97908bf28df0f5e0e4c4f13a2779553f4a77475a4/thejens/dbt-temporal"
---

# dbt-temporal

Execute dbt DAGs as [Temporal](https://temporal.io/) Workflows. Each dbt node runs as a Temporal activity, giving you distributed execution, automatic retries, observability, and workflow management for free.

> **Status**: Not production-ready. dbt-temporal depends on the dbt Fusion engine,
> now developed in [dbt-core](https://github.com/dbt-labs/dbt-core) as dbt Core v2,
> pinned to a 2026-09-06 `main` revision (`2.0.0-rc.1`), and the
> [Temporal Rust SDK](https://github.com/temporalio/sdk-rust) (`1.0.0`). Several
> [workarounds](https://github.com/thejens/dbt-temporal/blob/HEAD/docs/workarounds.md) are needed to make the Fusion engine work in
> a long-lived worker context. Consider this a proof of concept — largely
> developed by [Claude Code](https://claude.ai/claude-code) with no guarantees of
> code quality.

> **License**: dbt-temporal itself is [MIT-licensed](https://github.com/thejens/dbt-temporal/blob/HEAD/LICENSE). Its two main
> dependencies are permissively licensed as well — dbt Core v2 is **Apache 2.0**
> and the Temporal Rust SDK is **MIT**. See
> [THIRD-PARTY-LICENSES.md](https://github.com/thejens/dbt-temporal/blob/HEAD/THIRD-PARTY-LICENSES.md)…
