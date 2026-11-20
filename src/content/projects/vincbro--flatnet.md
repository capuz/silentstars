---
repo: "vincbro/flatnet"
name: "flatnet"
description: "Pre compute transit networks into memory mapped flatnet binary files. Features zero copy deserialization, RAPTOR ready structures, and instant server startup."
readmeQualityOk: true
url: "https://github.com/vincbro/flatnet"
homepage: "https://crates.io/crates/flatnet"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["cli", "library", "rust", "mmap", "performance"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-28T03:02:00Z"
lastCommitAt: "2026-11-20T12:05:02Z"
lastReleaseAt: "2026-04-18T15:38:52Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 27
maintainers: ["vincbro"]
openGraphImageUrl: "https://opengraph.githubassets.com/8dc4a17b7429a182e0a62303111ef4afcf6d7cffc24b75165e954c0953cc5d03/vincbro/flatnet"
---

# 📦 flatnet

A transit network as one flat file you can memory-map.

*flatnet* is a file format, a tool and a library. It reads a transit feed once and writes a single `.flnt` file, and your application reads that file in place, with nothing to parse at startup. GTFS is the first source it reads, and the format is its own: it holds what is worth having to work with a network, not everything a source can say. It is the data layer under [blaise](https://github.com/vincbro/blaise), a transit router, and it suits any fast transit application: routing engines, spatial analytics, stop search.

- No parsing at startup. The network opens in the time the OS takes to set up a memory map.
- Safe on any file. A corrupt or hostile file is an error, never undefined behavior.
- Easy and fast at any size: SL's regional network (2.5 million stop times) opens and validates in about 40 ms.
- Real-time delays, cancellations and skipped stops, when you have a GTFS-realtime feed.

Files end in `.flnt`, and begin with the bytes `FLNT`.
