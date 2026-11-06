---
repo: "phax/phoss-ap"
name: "phoss-ap"
description: "phoss Open Source Peppol Access Point"
readmeQualityOk: true
url: "https://github.com/phax/phoss-ap"
language: "Java"
languages: ["Java"]
languagePcts: [93]
stars: 57
forks: 24
openIssues: 8
closedIssues: 64
watchers: 8
contributors: 14
recentReleases: 0
createdAt: "2026-01-13T15:34:11Z"
lastCommitAt: "2026-11-06T13:20:30Z"
lastReleaseAt: "2026-05-29T18:19:47Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 96
undervaluedScore: 47
maintainers: ["phax", "martinplank", "sschamp"]
openGraphImageUrl: "https://opengraph.githubassets.com/62866ca691f431a1d0ee24f3c30e46622ab9dabc0d56bb14236d9739a03adef4/phax/phoss-ap"
discussionCount: 16
---

# phoss-ap

> If this project saved you some time or made your day a little easier, a star would mean a lot — it helps others find it too.

phoss Peppol Access Point - when looking for the SMP, see [phoss SMP](https://github.com/phax/phoss-smp)

A complete open-source Peppol Access Point based on [phase4](https://github.com/phax/phase4).

It is a Spring Boot application that handles all the relevant Peppol specifications:
* Peppol AS4 specification - using [phase4](https://github.com/phax/phase4)
* Peppol SMP specification - using [peppol-smp-client](https://github.com/phax/peppol-commons)
* Peppol Network Reporting specification - using [peppol-reporting](https://github.com/phax/peppol-reporting)
* Peppol MLS specification - using [peppol-mls](https://github.com/phax/peppol-commons)

Features include:
* Inbound document reception with configurable forwarding (HTTP, S3, SFTP)
* Outbound document sending with automatic SMP lookup and SBDH creation
* Retry with exponential backoff and circuit breaker for both sending and forwarding
* Optional document validation via external [verification service](https://github.com/phax/phorm)
* Duplicate detection on AS4 Message ID and SBDH…
