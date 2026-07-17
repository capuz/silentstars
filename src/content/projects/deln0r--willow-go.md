---
repo: "Deln0r/willow-go"
name: "willow-go"
description: "Pure-Go implementation of the Willow Protocol (data model, Meadowcap capabilities, Willow'25 bundle). iOS + Android via gomobile. Byte-compat with willow_rs."
readmeQualityOk: true
url: "https://github.com/Deln0r/willow-go"
homepage: "https://willowprotocol.org"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["blake3", "capabilities", "ed25519", "go", "golang", "gomobile", "local-first", "p2p", "peer-to-peer", "willow"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-05-17T14:28:14Z"
lastCommitAt: "2026-07-17T05:58:22Z"
lastReleaseAt: "2026-05-18T09:04:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 57
maintainers: ["Deln0r", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/65be7c8996dbd1fde394c74bb5e4e850bc8bd32d5d1abc3416cd33307ad046e7/Deln0r/willow-go"
discussionCount: 0
---

# willow-go

A pure-Go implementation of the [Willow Protocol](https://willowprotocol.org).

> Willow is a peer-to-peer protocol for synchronisable data stores with capability-based permissions. willow-go ports the data model, the Meadowcap capability layer, and the Willow'25 parameter bundle to idiomatic Go, with mobile bindings via gomobile (iOS XCFramework and Android AAR both built end-to-end) and zero cgo.

> **Mirrors.** Primary repository is on GitHub at [github.com/Deln0r/willow-go](https://github.com/Deln0r/willow-go); an EU-sovereign mirror auto-synced on every push lives on [codeberg.org/Deln0r/willow-go](https://codeberg.org/Deln0r/willow-go) (Codeberg e.V., Berlin) alongside the Rust reference implementation `willow_rs`.

## How to read this

This README claims a lot of green ticks; treat the [Status](#status) table as the source of truth. "Stable" means the byte format matches [willow_rs](https://codeberg.org/worm-blossom/willow_rs) v0.7.0 fixtures and the official [willow_test_vectors](https://github.com/worm-blossom/willow_test_vectors) where their reencoded files agree with the spec. "Partial" means the encoder is in place but parts of the cross-impl corpus are…
