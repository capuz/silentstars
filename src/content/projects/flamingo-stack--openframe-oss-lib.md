---
repo: "flamingo-stack/openframe-oss-lib"
name: "openframe-oss-lib"
description: "Shared libraries between all services"
readmeQualityOk: true
url: "https://github.com/flamingo-stack/openframe-oss-lib"
language: "TypeScript"
languages: ["TypeScript", "Java"]
languagePcts: [61, 32]
stars: 142
forks: 3
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 35
recentReleases: 0
createdAt: "2025-07-28T14:50:01Z"
lastCommitAt: "2026-09-23T08:46:32Z"
status: "thriving"
tags: []
healthScore: 78
undervaluedScore: 35
maintainers: ["giokur", "flamingo[bot]", "michaelassraf"]
openGraphImageUrl: "https://opengraph.githubassets.com/7a00729c8c9cdb03478204fc4208f3ed4dbeae4bc5ff61bee91249892b46b298/flamingo-stack/openframe-oss-lib"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://shdrojejslhgnojzkzak.supabase.co/storage/v1/object/public/public/doc-orchestrator/logos/1771371901777-lc3cse-logo-openframe-full-dark-bg.png">
    <source media="(prefers-color-scheme: light)" srcset="https://shdrojejslhgnojzkzak.supabase.co/storage/v1/object/public/public/doc-orchestrator/logos/1771372526604-k3y1w-logo-openframe-full-light-bg.png">
  </picture>
</div>

</p>

# OpenFrame OSS Lib

**OpenFrame OSS Lib** is the core backend shared library collection of the [OpenFrame platform](https://openframe.ai) — the AI-driven unified MSP (Managed Service Provider) infrastructure built by [Flamingo](https://flamingo.run).

This monorepo provides the reusable Spring Boot modules that power every OpenFrame service. It delivers multi-tenant authentication, reactive API routing, event-driven stream processing, agent lifecycle management, and more — all packaged as independently versionable Maven artifacts.

> **Note:** This repository contains **shared library modules**, not a standalone deployable service. It is intended for use by [openframe-oss-tenant](https://github.com/flamingo-stack/openframe-oss-tenant)…
