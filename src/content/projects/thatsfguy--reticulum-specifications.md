---
repo: "thatSFguy/reticulum-specifications"
name: "reticulum-specifications"
description: "Byte-level interoperability specifications for the Reticulum Network Stack (RNS) and LXMF — wire formats, signing inputs, and gotchas needed to build a working client from scratch, grounded in upstream source citations."
readmeQualityOk: true
url: "https://github.com/thatSFguy/reticulum-specifications"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["interoperability", "lxmf", "reticulum", "specification", "wire-protocol"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 15
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-05-03T13:45:25Z"
lastCommitAt: "2026-08-28T15:34:45Z"
lastReleaseAt: "2026-08-19T13:38:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 41
maintainers: ["thatSFguy"]
openGraphImageUrl: "https://opengraph.githubassets.com/afd698cffb995a2750d0a5b29e883eecee86fb207f8c1d81da9497921f0d19da/thatSFguy/reticulum-specifications"
---

# Reticulum Specifications

Byte-level interoperability specifications for the [Reticulum Network Stack](https://reticulum.network/) and [LXMF](https://github.com/markqvist/LXMF) — the parts that aren't in the upstream manuals but are needed to build a working client from scratch.

Upstream Reticulum has excellent operator-facing documentation (config, deployment, design philosophy). What's missing — and what every alternative implementation has had to reverse-engineer from the Python source — is an authoritative wire-level spec: header bit layouts, msgpack field types, signature input formats, the exact behavior of `Transport.outbound`, and the long list of "would never guess from reading the manual" gotchas that cost hours of debugging each.

This repo collects those findings in one place. The hope is that future client authors (Kotlin, Swift, Rust, Go, embedded C — pick your stack) can read this instead of re-deriving everything from `RNS/Transport.py`.

## Status

**Early days, contributions welcome.** Current content was bootstrapped from the working notes of two reverse-engineering efforts:

- The web-based Reticulum client at…
