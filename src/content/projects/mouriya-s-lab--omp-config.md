---
repo: "mouriya-s-lab/omp-config"
name: "omp-config"
description: "Versioned Oh My Pi configuration and plugin manifests"
originalDescription: "Versioned Oh My Pi configuration and plugin manifests"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/mouriya-s-lab/omp-config"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 5
forks: 1
openIssues: 2
closedIssues: 12
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-06T16:14:29Z"
lastCommitAt: "2026-10-12T11:06:27Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 96
undervaluedScore: 56
maintainers: ["RiriAgent", "Mouriya-Emma"]
openGraphImageUrl: "https://opengraph.githubassets.com/daf97815ecbeb6f236c1da311cbb107184621c3023e4ec322e79e36a12f408b2/mouriya-s-lab/omp-config"
---

# omp-config

The reviewable and portable parts of the Oh My Pi (OMP) configuration, customized for heavy programming scenarios. This is not a full backup of `~/.omp`: databases, sessions, caches, logs, lock files, and credentials are not stored in the repository.

- [Repository contents](#仓库内容)
- [Quick start](#快速上手)
- [Design rationale](#设计思路)
- [Sync and migration](#同步与迁移)
- [Light mode](#轻量模式)
- [Subagent system](#subagent-体系)
- [Local extensions](#本地扩展)
- [Maintenance notes](#维护须知)

## Repository contents

|Path|Content|Local location|
|---|---|---|
|`agent/config.yml`|OMP configuration, UI behavior, subagent model bindings|`~/.omp/agent/`|
|`agent/APPEND_SYSTEM.md`|Appended system prompt for full mode|`~/.omp/agent/`|
|`agent/extensions/append-system-model/APPEND_SYSTEM_MODEL.md`|Per-model appended system prompt for [append-system-model](#append-system-model); local-only, not included in the repository|`~/.omp/agent/extensions/append-system-model/`|
|`agent/config-light.yml`, `agent/APPEND_SYSTEM_LIGHT.md`, `agent/omp-light.ts`|Light-mode config overrides, appended prompt (currently empty), entry source|`~/.omp/agent/`|
|`agent/omp-config-update.ts`|Repo-to-local updater,…
