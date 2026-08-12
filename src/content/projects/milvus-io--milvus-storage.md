---
repo: "milvus-io/milvus-storage"
name: "milvus-storage"
description: "Milvus file storage format repo"
readmeQualityOk: true
url: "https://github.com/milvus-io/milvus-storage"
language: "C++"
languages: ["C++"]
languagePcts: [72]
stars: 49
forks: 48
openIssues: 30
closedIssues: 32
watchers: 7
contributors: 33
recentReleases: 0
createdAt: "2023-02-20T07:42:51Z"
lastCommitAt: "2026-08-12T05:13:35Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 88
undervaluedScore: 58
maintainers: ["jiaqizho", "tedxu", "congqixia"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a5f561def74b0b66f63b98be61e65e41ed260c78639106302ecc2bedde05242/milvus-io/milvus-storage"
---

# Milvus Storage

A high-performance columnar storage engine built on Apache Arrow, designed for vector databases and analytical workloads.

## Architecture

```
┌───────────────────────────────────────────────────────────────┬─────────────┐
│                       Application Layer                       │ Filesystem  │
│                   (Python / Java / Rust / C++)                │ FFI (C ABI) │
└───────────────────────────────────────────────────────────────┴──────┬──────┘
                                      │                                │
                                      ▼                                │
┌─────────────────────────────────────────────────────────────────────────────┐
│                         FFI Layer (extern "C")                              │
│                    (Cross-language bindings via C ABI)                      │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │                                │
                          ┌───────────┴───────────┐                    │
                          ▼                       ▼                    │…
