---
repo: "pablof7z/nmp"
name: "nmp"
description: "Embeddable Nostr sync-and-routing engine — a library, not a framework. Greenfield rebuild."
readmeQualityOk: true
url: "https://github.com/pablof7z/nmp"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
stars: 5
forks: 1
openIssues: 209
closedIssues: 769
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-07-10T21:38:07Z"
lastCommitAt: "2026-08-14T05:15:41Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 96
undervaluedScore: 55
maintainers: ["pablof7z-agent", "pablof7z"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a2149e37adb0a864b9160cc2015b1d102f0b09b70787a87a276158e6729b8a5/pablof7z/nmp"
---

# NMP

**An embeddable Nostr client engine. You bring the app; NMP owns the network.**

A Rust core with Swift and Kotlin SDKs that packages the hard Nostr client machinery — relay routing, outbox discovery, canonical state, signing, durable publishing — behind a small API you *call*. Not a framework you live inside.

</p>

---

## Why this is cool

Nostr's wire protocol is small. A *dependable local view* is not.

- Every serious app re-implements the same distributed plumbing: relay discovery, outbox routing, subscription repair, dedup, replaceable-event rules, deletion, expiry, retry, and "what did the network actually prove?"
- Most implement it **badly** — silent truncation, lost subscriptions, stale replaceable events, fake "synced" booleans.
- NMP concentrates that machinery in **one embeddable engine** with the bad behaviors ruled out at the boundary.
- **A library you call, not a framework you inherit.** Your app keeps its own state model, navigation, identity UX, and UI. NMP never becomes your container or reducer.

## Two nouns

Everything is expressed as one of two things:

- **A live query** — a declarative demand ("these authors' notes"). NMP keeps the local view…
