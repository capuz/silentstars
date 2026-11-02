---
repo: "infantilo/open-media-platform"
name: "open-media-platform"
description: "Standards-first, modular broadcast/streaming platform: AMWA NMOS (IS-04/05/08/12/14, BCP-003/008), MXL zero-copy media exchange, ST 2110/AES67, HA Go orchestrator."
readmeQualityOk: true
url: "https://github.com/infantilo/open-media-platform"
language: "Go"
languages: ["Go", "Rust", "TypeScript"]
languagePcts: [34, 33, 23]
topics: ["aes67", "broadcast", "broadcast-engineering", "golang", "media-orchestration", "mxl", "nmos", "open-source", "playout", "rust"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 8
createdAt: "2026-06-29T14:41:42Z"
lastCommitAt: "2026-11-02T15:18:24Z"
lastReleaseAt: "2026-10-30T15:07:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 54
maintainers: ["infantilo"]
openGraphImageUrl: "https://opengraph.githubassets.com/bbcbfa38412537cc4181c580672cb6bc30280a3b322eb28bd0a3cca943d24cbd/infantilo/open-media-platform"
discussionCount: 0
---

# OpenMediaPlatform

> **Standards-first:** built directly on AMWA NMOS — IS-04 v1.3 for
> discovery/registration, **IS-05 v1.1 and the current v1.2.0 release
> served side by side** (wire-compatible, same handlers) for connection
> management, IS-12/IS-14 for self-described control, BCP-008-01/02
> for real receiver/sender health status (link, sync, connection/
> transmission, stream/essence) on the network-facing nodes, and
> **BCP-007-03** for standardized IS-05 connection management of MXL
> flows (`urn:x-nmos:transport:mxl`, real `mxl_domain_id`/`mxl_flow_id`
> transport parameters, not a proprietary transport string). This isn't
> a compatibility claim on paper: the official AMWA NMOS Testing Tool
> runs against a real node on every push, and the current run is fully
> green — 62 passing IS-05-01 checks, zero accepted exceptions, on both
> API versions; BCP-007-03 (too new to have an official AMWA test suite
> yet) is checked by our own schema-conformance tool instead, against
> the real published JSON schemas.

### Standards conformance — verified, not just claimed

| Standard | What it covers here | Verified by |
|---|---|---|
| AMWA NMOS IS-04 v1.3 | Discovery &…
