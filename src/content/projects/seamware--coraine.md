---
repo: "SEAMWARE/coraine"
name: "coraine"
description: "A lightweight NGSI-LD Context Broker in C — full ETSI GS CIM 009 v1.9.1, plugin-driven, 967 KiB, starts in 10 ms"
readmeQualityOk: true
url: "https://github.com/SEAMWARE/coraine"
homepage: "https://coraine.readthedocs.io"
language: "C"
languages: ["C"]
languagePcts: [86]
topics: ["c", "context-broker", "etsi", "fiware", "iot", "linked-data", "ngsi-ld"]
stars: 8
forks: 2
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 2
createdAt: "2026-05-15T23:57:18Z"
lastCommitAt: "2026-10-26T09:18:28Z"
lastReleaseAt: "2026-10-10T15:58:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 57
maintainers: ["kzangeli"]
openGraphImageUrl: "https://opengraph.githubassets.com/253d2122d8acfc8ceab538811d126fd4c60a7112235fba896eddb5610d8b42ae/SEAMWARE/coraine"
---

# coraine

A lightweight **NGSI-LD Context Broker** written in C, **fully implementing ETSI GS
CIM 009 v1.9.1** and passing the official **ETSI NGSI-LD conformance test suite
with a 100% success rate**.<sup>\*</sup>

coraine is small, fast, and — most importantly — **plugin-driven**. Loaded at
startup as shared libraries:

- **storage backends** — where the current state lives
- **temporal history** — the temporal evolution of entities (TRoE)
- **extra API surfaces** — ops/admin endpoints beyond NGSI-LD
- **outbound transports** — REST/HTTP always, other protocols next (the *bridge* seam)

The core broker speaks NGSI-LD; the plugins decide *where data lives*, *what extra
endpoints exist* and *how the broker talks to the world*.

- **Product version:** 0.5 (0.5.0, 2026-10-10) — see the [release notes](https://github.com/SEAMWARE/coraine/releases)
  and the [changelog](https://github.com/SEAMWARE/coraine/blob/HEAD/CHANGELOG.md)
- **Spec:** ETSI GS CIM 009 v1.9.1 (NGSI-LD) — fully implemented
- **Language / build:** C, CMake (wrapped by a convenience `makefile`)
- **License:** [Apache License 2.0](https://github.com/SEAMWARE/coraine/blob/HEAD/LICENSE) — Copyright 2026 Seamware

This…
