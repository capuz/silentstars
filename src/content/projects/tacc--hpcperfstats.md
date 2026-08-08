---
repo: "TACC/HPCPerfStats"
name: "HPCPerfStats"
description: "HPCPerfStats (formerly TACC Stats) is an automated resource-usage monitoring and analysis package for HPC Clusters."
readmeQualityOk: true
url: "https://github.com/TACC/HPCPerfStats"
language: "Python"
languages: ["Python"]
languagePcts: [74]
topics: ["hpc", "performance-analysis", "xsede", "rabbitmq", "metrics", "access"]
stars: 58
forks: 16
openIssues: 7
closedIssues: 56
watchers: 11
contributors: 17
recentReleases: 0
createdAt: "2014-06-25T17:42:03Z"
lastCommitAt: "2026-08-08T04:35:23Z"
lastReleaseAt: "2025-10-15T16:50:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 52
maintainers: ["stephenlienharrell"]
openGraphImageUrl: "https://opengraph.githubassets.com/4454535a83bc6763f3eb94e4f2e59e78cd9bf6811b056f77957844664fa7e1c4/TACC/HPCPerfStats"
---

# HPCPerfStats

**The package formerly known as TACC Stats**

A toolkit for monitoring resource usage on HPC systems at multiple levels of resolution.

---

## Overview

The **hpcperfstats** package is split into two parts:

| Component | Build system | Role |
|-----------|--------------|------|
| **monitor** | Autotools | Online data collection and transmission in production |
| **hpcperfstats** | Python setuptools | Data curation and analysis (off-cluster) |

### Documentation (`docs/`)

| Document | What it is for |
|----------|----------------|
| [**MONITOR_VARIABLES.md**](https://github.com/TACC/HPCPerfStats/blob/HEAD/docs/MONITOR_VARIABLES.md) | **Canonical reference** for monitor-reported variables: names, types, units, and semantics. Use this instead of any legacy “attributes definition” doc. |
| [**DEPLOY_CONCURRENCY_AND_NUMA.md**](https://github.com/TACC/HPCPerfStats/blob/HEAD/docs/DEPLOY_CONCURRENCY_AND_NUMA.md) | Thread/process limits vs PostgreSQL, **`effective_cores`**, optional Compose **`cpuset`** fragments via `scripts/apply_compose_cpu_pinning.py` (all services + NUMA overrides). |
|…
