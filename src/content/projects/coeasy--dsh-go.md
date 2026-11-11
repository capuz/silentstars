---
repo: "coeasy/dsh-go"
name: "dsh-go"
description: "DeepSeek Harness Plugin Marketplace Navigation Site"
originalDescription: "DeepSeek Harness 插件市场导航站"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/coeasy/dsh-go"
homepage: "https://coeasy.github.io/dsh-go/"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [69, 22]
topics: ["dsh-plugin", "dsh-plugin-market", "dsh-plugin-theme", "dsh-plugins"]
stars: 23
forks: 1
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 8
createdAt: "2026-08-23T05:18:34Z"
lastCommitAt: "2026-11-11T19:46:11Z"
lastReleaseAt: "2026-09-05T01:09:20Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 79
undervaluedScore: 40
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/75edf71be1698e28f90ded1d4e21fd042e816f9cf0899872269eba74fa0e3bce/coeasy/dsh-go"
---

# DSH Go

DSH Go is a **native package manager + Registry/Distribution infrastructure + Marketplace** for the DeepSeek Harness ecosystem. The current architecture treats Package Protocol V2, Manifest V2, Registry V4, Resolver V2, Runtime State V4, and API V2 as the sole authorities, and no legacy interface compatibility layer is retained.

Authoritative API entry point: https://dsh-go.pages.dev/

> Core boundary: Marketplace/Edge is only responsible for discovery, querying, resolving, and generating installation plans; **Local Runtime is the only component authorized to perform installation, updates, rollback, state writes, and activation**. Remote pages/APIs cannot modify the user's machine, nor do they automatically restart the client.

## Final Architecture

```text
Package Protocol V2 / Manifest V2
                ↓
Discovery → Candidate / Quarantine
                ↓
            Registry V4
                ↓
        Trust + Policy Engine
                ↓
            Resolver V2
                ↓
          Resolution Plan
                ↓
        Runtime Supervisor
                ↓
        CAS + Transaction
                ↓
        Runtime State V4
                ↓…
