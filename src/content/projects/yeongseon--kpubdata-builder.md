---
repo: "yeongseon/kpubdata-builder"
name: "kpubdata-builder"
description: "Warehouse execution engine for KPubData."
originalDescription: "Warehouse execution engine for KPubData."
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/yeongseon/kpubdata-builder"
homepage: "https://yeongseon.github.io/kpubdata-builder"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["data-pipeline", "dataset-builder", "korea", "kpubdata", "public-data", "python", "etl", "warehouse"]
stars: 5
forks: 4
openIssues: 14
closedIssues: 432
watchers: 0
contributors: 9
recentReleases: 1
createdAt: "2026-04-04T15:18:47Z"
lastCommitAt: "2026-10-02T10:00:13Z"
lastReleaseAt: "2026-09-28T14:06:54Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 76
maintainers: ["seoL-ee", "yeongseon", "Eomdahyeon"]
openGraphImageUrl: "https://opengraph.githubassets.com/0539ae4dfc6a16e3a275fc28a23bdd9820a59a58ebf8f8b5917d5267910f221c/yeongseon/kpubdata-builder"
---

# KPubData Builder

**KPubData Builder is a build and warehouse tool that uses KPubData to create reproducible Table Snapshots from public data.**

> KPubData Product Family: [KPubData](https://github.com/yeongseon/kpubdata) is a standalone public data access SDK, **KPubData Builder** is a downstream consumer using its public API, and [KPubData Studio](https://github.com/yeongseon/kpubdata-studio) is a visual workspace for Builder. The dependency direction is one-way: Studio → Builder → KPubData. The repository, Python package, and CLI name is `kpubdata-builder`.

It receives normalized data from `kpubdata`, produces results through Medallion Architecture (Bronze → Silver → Gold), and records them traceable in a Manifest. It reproduces the same output from the same input using a declarative spec called BuildSpec.

[**📘 English**](https://github.com/yeongseon/kpubdata-builder/blob/HEAD/README.en.md)

## Why It's Needed

Merely fetching public data is not enough. Working with actual datasets requires the following:

- **Specification-based Reproducibility**: Must be able to reproduce the same results with the same BuildSpec
- **Staged Outputs**: Transparently progress through…
