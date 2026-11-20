---
repo: "namastack/namastack-outbox"
name: "namastack-outbox"
description: "Transactional Outbox for reliable event delivery with Spring Boot"
readmeQualityOk: true
url: "https://github.com/namastack/namastack-outbox"
homepage: "https://www.namastack.io"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [97]
topics: ["distributed-systems", "transactional-outbox", "apache-kafka", "event-driven-architecture", "microservices", "reliable-messaging-system", "spring-boot", "spring-kafka", "transactional-outbox-pattern"]
stars: 405
forks: 44
openIssues: 4
closedIssues: 183
watchers: 5
contributors: 13
recentReleases: 0
createdAt: "2025-09-25T07:19:49Z"
lastCommitAt: "2026-11-20T11:58:57Z"
lastReleaseAt: "2026-03-03T16:12:55Z"
status: "thriving"
tags: ["funded"]
healthScore: 99
undervaluedScore: 39
maintainers: ["rolandbeisel", "dependabot[bot]", "Alek96"]
openGraphImageUrl: "https://opengraph.githubassets.com/55649870628528e15bd4c492fb96c7d012fa7e20f4f74752bd10f0a7b83f435d/namastack/namastack-outbox"
fundingLinks: ["GITHUB:https://github.com/namastack", "LIBERAPAY:https://liberapay.com/namastack", "BUY_ME_A_COFFEE:https://buymeacoffee.com/namastack"]
discussionCount: 14
---

<source
        media="(prefers-color-scheme: dark)"
        srcset="./.github/assets/namastack_outbox_logo_dark.png"
      >
      <source
        media="(prefers-color-scheme: light)"
        srcset="./.github/assets/namastack_outbox_logo_light.png"
      >
      <img
        src="https://raw.githubusercontent.com/namastack/namastack-outbox/HEAD/.github/assets/namastack_outbox_logo_light.png"
        alt="Namastack Outbox"
      >

---

---

Namastack Outbox is an open-source **transactional outbox implementation for Spring Boot**, built for reliable
event-driven applications with Java and Kotlin.

It persists events atomically with your business data and processes them asynchronously with built-in support for
retries, ordering, horizontal scaling and observability — without requiring additional infrastructure.

**[Explore the documentation →](https://www.namastack.io/docs/)**

## Why Namastack Outbox?

Reliable event publishing becomes surprisingly difficult once failures, retries, concurrency and multiple application
instances enter the picture.

Namastack Outbox handles these concerns as part of your Spring Boot application.
