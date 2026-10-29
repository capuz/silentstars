---
repo: "eclipse-store/store"
name: "store"
description: "High-Performance Java-Native-Persistence. Store and load any Java Object Graph or Subgraphs partially, Relieved of Heavy-weight JPA. Microsecond Response Time. Ultra-High Throughput. Minimum of Latencies. Create Ultra-Fast In-Memory Database Applications & Microservices."
readmeQualityOk: true
url: "https://github.com/eclipse-store/store"
homepage: "https://eclipsestore.io/"
language: "Java"
languages: ["Java"]
languagePcts: [99]
topics: ["in-memory-database", "in-memory-storage", "java", "object-graph", "persistence", "storage-engine"]
stars: 349
forks: 36
openIssues: 29
closedIssues: 172
watchers: 13
contributors: 12
recentReleases: 0
createdAt: "2023-04-28T15:46:25Z"
lastCommitAt: "2026-10-29T10:37:05Z"
lastReleaseAt: "2025-01-13T13:51:48Z"
status: "thriving"
tags: ["community_hub"]
healthScore: 95
undervaluedScore: 39
maintainers: ["fh-ms", "hg-ms", "zdenek-jonas"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/633926758/8bbe269a-3e37-4801-a7ab-9286e13912d4"
discussionCount: 122
---

# High-Performance Java-Native-Persistence

Store and load any Java Object Graph or Subgraphs partially, Relieved of Heavy-weight JPA. Microsecond Response Time. Ultra-High Throughput. Minimum of Latencies. Create Ultra-Fast In-Memory Database Applications & Microservices.

EclipseStore is based on the [Eclipse Serializer](https://github.com/eclipse-serializer/serializer).

## License

EclipseStore is available under [Eclipse Public License - v 2.0](https://github.com/eclipse-store/store/blob/HEAD/LICENSE).

## Documentation

- [Reference manual](https://docs.eclipsestore.io)
- [Get started](https://docs.eclipsestore.io/manual/storage/getting-started.html)
- [Changelog](https://docs.eclipsestore.io/manual/intro/changelog.html)
- [Examples](https://github.com/eclipse-store/store/blob/HEAD/examples)
- [Demo project](https://github.com/eclipse-store/bookstore-demo)

## Build

To build EclipseStore you need JDK 25 and Maven. The modules target Java 17 (`maven.compiler.release`), except `gigamap-jvector` and the demo, example and code generator tests that use it, which target Java 25.

Just run

```
mvn install
```

## Contribute

If you want to contribute to this project, please read…
