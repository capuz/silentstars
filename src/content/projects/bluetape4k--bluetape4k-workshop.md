---
repo: "bluetape4k/bluetape4k-workshop"
name: "bluetape4k-workshop"
description: "Example for Backend Application with Bluetape4k"
url: "https://github.com/bluetape4k/bluetape4k-workshop"
homepage: "https://bluetape4k.github.io"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [96]
topics: ["kotlin-jvm", "kotlin-examples", "kotlin", "spring-boot", "spring-boot-3", "spring-boot-4", "bluetape4k", "workshop", "examples"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 107
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-11-22T12:44:06Z"
lastCommitAt: "2026-07-04T19:19:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 81
maintainers: ["debop"]
openGraphImageUrl: "https://opengraph.githubassets.com/4dbe142bd438061e4cee67878feaebeeca70a7be2b97f8d80b0b180af77b47d2/bluetape4k/bluetape4k-workshop"
---

# bluetape4k-workshop

[한국어](README.ko.md) | English

This repository is a runnable backend workshop for learning how [bluetape4k](https://github.com/bluetape4k)
libraries behave in practical Spring Boot 4, Exposed, Redis, Kafka, observability,
virtual-thread, Vert.x, and cloud-native workloads.

---

## Getting Started

```bash
# Build everything
./gradlew build

# Build and test a single module
./gradlew :exposed-mvc-jdbc:build
./gradlew :exposed-mvc-jdbc:test

# Static analysis
./gradlew detekt
```

**Requirements**: JDK 21+, Docker (Testcontainers)

Use this repository as a runnable cookbook:

1. Pick the domain closest to your current backend problem.
2. Run one focused module test before building the whole repository.
3. Move from Basic modules to Advanced modules when you need Testcontainers or cross-layer behavior.
4. Read the module README beside the source; source code is the final contract.

When you are deciding where to start, read the module map first and choose a domain
path where **Basic** modules are enough for exploration, then switch to
**Advanced** examples when distributed/integration behavior becomes your target.

---

## Domain Catalog

Modules are organized…
