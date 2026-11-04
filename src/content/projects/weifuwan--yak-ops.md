---
repo: "weifuwan/yak-ops"
name: "yak-ops"
description: "Big Data Governance Platform"
originalDescription: "大数据治理平台"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/weifuwan/yak-ops"
homepage: "https://yak-ops.com/"
language: "Java"
languages: ["Java"]
languagePcts: [92]
stars: 64
forks: 22
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 6
createdAt: "2026-07-22T06:45:25Z"
lastCommitAt: "2026-11-04T08:04:17Z"
lastReleaseAt: "2026-10-24T08:24:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 41
maintainers: ["weifuwan", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a24f222747152ced10be6b3552d508b893e1a5b20a415b91b14a2e104b10784e/weifuwan/yak-ops"
---

# Yak Ops

Yak Ops maintains three independently evolving workspaces:

- [yak-ops-ui](https://github.com/weifuwan/yak-ops/blob/HEAD/yak-ops-ui/) — the existing React frontend, unchanged by the scheduler import.
- [yak-ops-cdc](https://github.com/weifuwan/yak-ops/blob/HEAD/yak-ops-cdc/) — Flink CDC 1.20.3 pipeline CLI, runtime, MySQL CDC source and JDBC sink.
- [yak-ops-scheduler](https://github.com/weifuwan/yak-ops/blob/HEAD/yak-ops-scheduler/) — source-preserving migration of Apache DolphinScheduler 3.4.3-release.

## DolphinScheduler import status

The Scheduler source baseline is [apache/dolphinscheduler commit 26228f9c](https://github.com/apache/dolphinscheduler/commit/26228f9c5bff24b3ded7095484caf7a5ecffa050), on the 3.4.3-release branch. Its upstream POM declares 3.4.4-SNAPSHOT; the imported Maven coordinates are io.yak.ops:yak-ops-*:1.4.0.

Core Master, Worker, Task Executor, Workflow Engine, DAO, Service, SPI, Registry, Scheduler, EventBus, Extract, Alert, Authentication, API and Standalone source trees have been imported without changing Java packages or source bodies. Tests and resources are retained. The separate DolphinScheduler UI, distribution and optional…
