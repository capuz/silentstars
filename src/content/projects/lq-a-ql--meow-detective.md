---
repo: "lQ-A-Ql/meow-detective"
name: "meow-detective"
description: "Lightweight forensics tool, meow~"
originalDescription: "轻量取证工具喵~"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/lQ-A-Ql/meow-detective"
language: "Rust"
languages: ["Rust"]
languagePcts: [84]
stars: 18
forks: 0
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-06-07T12:57:43Z"
lastCommitAt: "2026-11-27T12:27:57Z"
lastReleaseAt: "2026-11-14T13:47:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 38
maintainers: ["lQ-A-Ql"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1262006389/ae8add66-f34b-49e2-8e75-0692e2119ff3"
---

# Meow~Detective

## Project Introduction

Meow~Detective is designed for local, offline analysis of disk images, logical directories, Android images, and Linux/PVE evidence sources. The current backend workspace contains 53 Rust crates. Storage is layered into a control plane and detail data: a case-level database handles cases, data source registration, tasks, and auditing; each data source's `source.db` stores the control plane, processing stages, and publication receipts; partitions, file trees, artifacts, timelines, and in-source indexes are persisted as atomic Fjall generations in the case workspace; and the rebuildable case-level cross-source relationship projection is stored in `indexes/case-graph.db`.

The current project fact snapshot includes 12 frontend pages, 171 Tauri commands, 58 source modules, migration scripts (83), and 173 test files. Counts are checked for synchronization with the repository structure by `scripts/check-doc-drift.ps1`.
