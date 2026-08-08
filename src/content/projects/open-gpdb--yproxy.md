---
repo: "open-gpdb/yproxy"
name: "yproxy"
description: "yproxy - a service for efficient transfer data external storages."
readmeQualityOk: true
url: "https://github.com/open-gpdb/yproxy"
language: "Go"
languages: ["Go"]
languagePcts: [94]
stars: 15
forks: 9
openIssues: 5
closedIssues: 0
watchers: 2
contributors: 11
recentReleases: 1
createdAt: "2023-11-10T11:38:48Z"
lastCommitAt: "2026-08-08T04:34:59Z"
lastReleaseAt: "2026-07-20T06:43:13Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 73
undervaluedScore: 63
maintainers: ["reshke", "dependabot[bot]", "Vlasdislav"]
openGraphImageUrl: "https://opengraph.githubassets.com/377b3f6c1a18fed37ba6be5e4df5e87f244f45700e04d70ed3b926c202b1a875/open-gpdb/yproxy"
---

# yproxy

yproxy - a service for efficient transfer data external storages.

## vacuum / garbage collection configuration

The `vacuum` section of the yproxy configuration file controls the
behaviour of garbage collection performed during
`yezzey_vacuum_garbage` / `yezzey_vacuum_garbage_relation` and the `yezzey_collect_obsolete` /
`yezzey_delete_obsolete` procedures.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `check_backup` | bool | `true` | Whether to take the first backup LSN into account when deciding if a file is safe to delete. |
| `file_chunk_per_sec` | int | `1000` | Rate limit (files/sec) applied while listing and deleting objects. |
| `trash_retention_days` | int | `7` | Number of days a file stays in `/trash` before being permanently removed. |
| `trash_move_workers` | int | `1` | Number of parallel workers used to move files to `/trash`. |
| `trash_delete_workers` | int | `1` | Number of parallel workers used to delete files from `/trash`. |
| `protection_window` | duration | `24h` | Minimum age a file must have, based on its storage `LastMod` timestamp, before it is eligible for garbage deletion. Accepts a duration…
