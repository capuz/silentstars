---
repo: "apstndb/spanner-mycli"
name: "spanner-mycli"
description: "My personal fork of spanner-cli"
readmeQualityOk: true
url: "https://github.com/apstndb/spanner-mycli"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 14
forks: 4
openIssues: 40
closedIssues: 214
watchers: 1
contributors: 16
recentReleases: 0
createdAt: "2024-10-20T04:15:32Z"
lastCommitAt: "2026-09-12T08:04:54Z"
lastReleaseAt: "2025-02-28T05:55:39Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 70
maintainers: ["apstndb", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/18f5fda819c44f6e23ee09cc4b331012fed6c11d5fe6069a0ddfcf10bd8b7648/apstndb/spanner-mycli"
---

spanner-mycli
===

My personal fork of [spanner-cli](https://github.com/cloudspannerecosystem/spanner-cli), interactive command line tool for Cloud Spanner.

## Description

`spanner-mycli` is an interactive command line tool for [Google Cloud Spanner](https://cloud.google.com/spanner/).  
You can control your Spanner databases with idiomatic SQL commands.

## Differences from original spanner-cli

spanner-mycli was forked from [spanner-cli v0.10.6](https://github.com/cloudspannerecosystem/spanner-cli/releases/tag/v0.10.6) and restarted its version numbering from [v0.1.0](https://github.com/apstndb/spanner-mycli/releases/tag/v0.1.0).
There are differences between spanner-mycli and spanner-cli that include not only functionality but also philosophical differences.

* Advanced query plan features for constrained display environments and comprehensive analysis. See [docs/query_plan.md](https://github.com/apstndb/spanner-mycli/blob/HEAD/docs/query_plan.md) for details.
  * Configurable `EXPLAIN ANALYZE` with customizable execution stats columns using `CLI_ANALYZE_COLUMNS` and inline stats using `CLI_INLINE_STATS`
  * Configurable query plan appendix presets and sections with `EXPLAIN…
