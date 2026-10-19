---
repo: "KunoLu/sbtd-plugins"
name: "sbtd-plugins"
description: "SBTD host plugins (OMP + DSH) and shared workflow kit"
readmeQualityOk: true
url: "https://github.com/KunoLu/sbtd-plugins"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [87]
stars: 190
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-08-20T06:55:39Z"
lastCommitAt: "2026-10-19T09:13:56Z"
lastReleaseAt: "2026-10-18T20:43:59Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 25
maintainers: ["KunoLu", "github-actions[bot]", "omp"]
openGraphImageUrl: "https://opengraph.githubassets.com/25cc3949e2f2352452d13acc390873045a09ec295ffb57f0e9e3b3ad0dc25202/KunoLu/sbtd-plugins"
---

·

# sbtd-plugins

SBTD host-plugin monorepo: a shared workflow kit plus OMP and DSH host adapters.

## Contents

- [Packages](#packages)
- [Install](#install)
- [Roadmap](#roadmap)
- [Development](#development)
- [License](#license)

## Packages

| Package | Path | Role |
| --- | --- | --- |
| `@kunolu/omp-sbtd` | [`packages/omp-sbtd`](https://github.com/KunoLu/sbtd-plugins/blob/HEAD/packages/omp-sbtd/README.md) | OMP SBTD workflow plugin. Provides `/sbtd`, an embedded kit, `doctor`, and `onboard`. Version **0.1.0-rc.14** on the `next` tag. |
| `@kunolu/dsh-sbtd` | [`packages/dsh-sbtd`](https://github.com/KunoLu/sbtd-plugins/blob/HEAD/packages/dsh-sbtd/README.md) | DSH SBTD adapter (T5): sbtd section, in-process state, `sbtd_plan`, `sbtd_review`, hooks, and `manuals/`. Published **0.2.0-rc.1** on dist-tag `next`. dist-tag `latest` is still **0.1.0-rc.1**. Host pin `@deepseek-ai/dsh@0.2.0-rc.2`. |
| `@kunolu/sbtd-workflow-kit` | [`packages/sbtd-workflow-kit`](https://github.com/KunoLu/sbtd-plugins/blob/HEAD/packages/sbtd-workflow-kit) | Shared kit / projection layer. **Not** a host plugin. |

## Install

OMP plugin (published on dist-tag next as 0.1.0-rc.14):

```bash
omp plugin…
