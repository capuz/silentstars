---
repo: "RockxyApp/Tracexy"
name: "Tracexy"
description: "Native, local-first network intelligence for macOS—capture live traffic, inspect PCAP/PCAPNG files, and investigate sessions, protocols, processes, flows, and packet evidence."
readmeQualityOk: true
url: "https://github.com/RockxyApp/Tracexy"
homepage: "https://rockxy.io/tracexy"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
topics: ["libpcap", "macos", "macos-app", "network-analysis", "network-debugging", "network-monitoring", "network-visualization", "networking", "packet-analyser", "packet-capture"]
stars: 500
forks: 25
openIssues: 33
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 4
createdAt: "2026-07-28T03:01:15Z"
lastCommitAt: "2026-11-13T11:24:16Z"
lastReleaseAt: "2026-08-24T15:36:01Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 79
undervaluedScore: 23
maintainers: ["LocNguyenHuu"]
openGraphImageUrl: "https://opengraph.githubassets.com/79b6a77ae28430dcae4ea6bb9e7c935cd1bb212b46819f362ba4f2194e742faf/RockxyApp/Tracexy"
---

Native macOS network intelligence, organized around sessions—not packet noise.<br>
  Capture live traffic or open a saved capture, then investigate hosts, processes, protocols,
  timing, and raw packet evidence in one local-first workspace.

---

## Latest Tagged Release

**v0.10.0** — 2026-11-13

### Added

- Import a text hex dump from File → Import Hex Dump…, with an explicit offset base, byte grouping, regular-expression scopes for packet bytes, timestamps, direction and sequence numbers, a chosen link type, and optional generated Ethernet, IPv4/IPv6, UDP, TCP or SCTP headers around entered payload bytes.
- Export the frames you chose: an exact selected-frame capture, every frame matching an applied Frame Expression, and an opt-in that leaves ignored frames out of the written file.
- Export packet dissections as text summaries, details and captured bytes, as JSON with optional raw hex for exactly mapped fields, or as a summary CSV that can add up to four applied Project field columns.
- Print packet summaries, decoded dissections or captured-byte hex dumps for the sessions in view, one frame, marked frames, a numeric frame range, or every frame matching an applied Frame…
