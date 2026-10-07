---
repo: "kpubdata-lab/kpubdata-studio"
name: "kpubdata-studio"
description: "Web workspace for KPubData — Catalog, Tables, SQL, Lineage and Quality."
originalDescription: "Web workspace for KPubData — Catalog, Tables, SQL, Lineage and Quality."
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/kpubdata-lab/kpubdata-studio"
homepage: "http://kpubdata-lab.github.io/kpubdata-studio/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["dashboard", "korea", "kpubdata", "nextjs", "public-data", "typescript", "data-analytics", "react"]
stars: 5
forks: 5
openIssues: 24
closedIssues: 316
watchers: 0
contributors: 10
recentReleases: 1
createdAt: "2026-04-04T15:18:48Z"
lastCommitAt: "2026-10-07T10:31:34Z"
lastReleaseAt: "2026-09-28T14:15:07Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 98
undervaluedScore: 79
maintainers: ["Eomdahyeon", "seoL-ee", "yeongseon"]
openGraphImageUrl: "https://opengraph.githubassets.com/bafc9ca617d422300efab26d2e073acec1190699193aaa6a2d03084f075389c8/kpubdata-lab/kpubdata-studio"
---

# KPubData Studio

**KPubData Studio is a workspace for collecting Korean public data, managing it as snapshots while maintaining sources and usage conditions, and analyzing it with tables and SQL.**

> KPubData product family: [KPubData](https://github.com/kpubdata-lab/kpubdata) (public API access library) → [KPubData Builder](https://github.com/kpubdata-lab/kpubdata-builder) (execution·warehouse) → **KPubData Studio** (workspace)

> **Name** — The product name of the execution engine is **KPubData Builder**, and the repository·package is `kpubdata-builder`.
> The commands and environment variables in this document (`VITE_BUILDER_API_URL`, etc.) also use the same name
> ([BRAND.md](https://github.com/kpubdata-lab/kpubdata/blob/main/docs/brand/BRAND.md)).

KPubData's dataset design and normalization process is often complex, with barriers to entry such as YAML editing errors, lack of visual feedback, and difficulty for non-developers. Studio removes these barriers and helps users without coding experience intuitively configure and manage public data processing workflows.

## When you don't need this project

- If you want to directly write build configuration files with CLI or…
