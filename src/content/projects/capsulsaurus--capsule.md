---
repo: "Capsulsaurus/Capsule"
name: "Capsule"
description: "Open Asset Management Scaled to Millions."
readmeQualityOk: true
url: "https://github.com/Capsulsaurus/Capsule"
homepage: "https://capsule.justinchung.net"
language: "Rust"
languages: ["Rust", "Swift"]
languagePcts: [76, 20]
stars: 7
forks: 0
openIssues: 64
closedIssues: 170
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-08-09T16:08:11Z"
lastCommitAt: "2026-10-22T08:53:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "under_pressure"]
healthScore: 91
undervaluedScore: 75
maintainers: ["justin13888"]
openGraphImageUrl: "https://opengraph.githubassets.com/396b031b7d80ec6494dfb0bda5722c4e7de9dd8beea7c01f38eb984390eea7fc/Capsulsaurus/Capsule"
fundingLinks: ["GITHUB:https://github.com/justin13888"]
discussionCount: 2
---

# Capsule

Open-source, federated, end-to-end encrypted photo library for photographers and prosumers.

## Goals

- **Your library outlives any service.** Originals are stored permanently, at full quality, with their metadata, and can always be restored byte for byte.
- **End-to-end cryptography.** The server stores only ciphertext. Every asset carries a signed provenance chain, so who captured, imported and edited it can be verified rather than trusted.
- **Federated sharing.** Because trust lives in the cryptography rather than in a server, people on different servers can share albums with each other: think [Matrix](https://en.wikipedia.org/wiki/Matrix_(protocol)), but for images.
- **Open source for the network effect.** An open protocol and self-hostable server let anyone join the network; the aim is to be the first open, federated standard for personal photo libraries.
- **Native everywhere.** Each platform gets a real native client; the CLI/TUI is the reference client and stays the most robust one.

## Status

Alpha, and not yet ready for data you cannot afford to lose. The current focus is the first dogfoodable release: the Rust CLI/TUI imports, the server stores…
