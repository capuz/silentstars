---
repo: "monowai/beancounter"
name: "beancounter"
description: "Collection of services to compute and present financial positions"
readmeQualityOk: true
url: "https://github.com/monowai/beancounter"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [99]
topics: ["317d097400", "microservices", "finance"]
stars: 5
forks: 0
openIssues: 40
closedIssues: 35
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2019-02-08T08:04:39Z"
lastCommitAt: "2026-11-04T08:04:25Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 89
undervaluedScore: 70
maintainers: ["monowai"]
openGraphImageUrl: "https://opengraph.githubassets.com/3387ae6ec47b66861a7a9bb02e08f33836b63988d243fd239a319007c736dfa0/monowai/beancounter"
---

# Financial Transaction Processing Services

This service transforms financial transaction data into portfolio positions for
valuation against market data.

Check out the [demo stack](http://github.com/monowai/bc-demo).

## Components

- [Viewer](https://github.com/monowai/bc-view): User interface.
- [Data Service](https://github.com/monowai/beancounter/blob/HEAD/svc-data/README.md): Data persistence and retrieval.
- [Position Service](https://github.com/monowai/beancounter/blob/HEAD/svc-position/README.md): Computes portfolio positions.
- [Corporate Events](https://github.com/monowai/beancounter/blob/HEAD/svc-event/README.md): Manages corporate actions.

## Quick Start

### Prerequisites

- Java 21
- Gradle 8.14+
- Docker (for containerized services)

### Building the Project

#### Standard Build

Contract stubs flow between modules as regular Gradle artifacts (svc-data and
svc-position expose a `stubs` configuration consumed by jar-client,
svc-position and svc-event), so a plain build works from a clean checkout:

```bash
# Build everything (clean checkout OK)
./gradlew build

# Run all tests
./gradlew testAll
```

#### Individual Module Builds

```bash
# Build specific module…
