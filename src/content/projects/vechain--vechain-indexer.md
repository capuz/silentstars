---
repo: "vechain/vechain-indexer"
name: "vechain-indexer"
description: "An indexer for the VeWorld wallets"
readmeQualityOk: true
url: "https://github.com/vechain/vechain-indexer"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [85]
stars: 5
forks: 1
openIssues: 58
closedIssues: 249
watchers: 3
contributors: 26
recentReleases: 0
createdAt: "2023-03-21T09:48:07Z"
lastCommitAt: "2026-09-25T09:03:15Z"
lastReleaseAt: "2024-12-12T10:56:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 76
maintainers: ["daithihearn"]
openGraphImageUrl: "https://opengraph.githubassets.com/4614c63feffdb06bf1ab396caeb8d3944aee5c1584a54dd2505358e42962f500/vechain/vechain-indexer"
---

# VeWorld Indexer

- Coverage Reports:
    - [API](https://ideal-fortnight-7vp33mg.pages.github.io/api/coverage/)
    - [Common](https://ideal-fortnight-7vp33mg.pages.github.io/common/coverage/)
    - [Indexer](https://ideal-fortnight-7vp33mg.pages.github.io/indexer/coverage/)

- Tests Results:
    - [API](https://ideal-fortnight-7vp33mg.pages.github.io/api/tests/)
    - [Common](https://ideal-fortnight-7vp33mg.pages.github.io/common/tests/)
    - [Indexer](https://ideal-fortnight-7vp33mg.pages.github.io/indexer/tests/)
    - [E2E](https://ideal-fortnight-7vp33mg.pages.github.io/e2e/tests/)

## Prerequisites

- Docker
- Java (v21)

### GitHub Packages Authentication (optional)

Normal builds resolve dependencies from Maven Central and do not require credentials. GitHub Packages credentials are only needed when resolving a dependency version that has not reached Maven Central yet, such as a SNAPSHOT or pre-release `org.vechain:indexer-core`.

For local Gradle builds, create a [GitHub Personal Access Token (classic)](https://github.com/settings/tokens/new?scopes=read:packages) with the `read:packages` scope and add the following to `~/.gradle/gradle.properties`:

```properties…
