---
repo: "izrin96/objekt-explorer"
name: "objekt-explorer"
description: "Client-side web explorer for Modhaus Cosmo K-POP NFT (Objekts)"
readmeQualityOk: true
url: "https://github.com/izrin96/objekt-explorer"
homepage: "https://objekt.top"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["artms", "cosmo", "idntt", "kpop", "modhaus", "objekt", "triples"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-01-06T21:42:23Z"
lastCommitAt: "2026-10-05T10:47:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 74
maintainers: ["izrin96"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f627b9270fa9a49926fd4b5534da24675f2e58a6f0013d9bef70644fdafe527/izrin96/objekt-explorer"
---

# Objekt Explorer

A web explorer for [Cosmo](https://cosmo.fans)'s Objekts, focused on the client-side experience. Cosmo is an app by Modhaus Inc. that decentralizes K-pop using blockchain technology; Objekts are its digital photocard NFTs.

Live at **[objekt.top](https://objekt.top)**.

## Features

- Browse and filter every indexed Objekt collection
- Per-profile collections, pins, locks and ownership history
- Time travel: view any profile's collection as it was on a past date
- Trade lists (have/want) with matching between profiles
- Market listings and price tracking
- Live activity feed over WebSockets

## Stack

| Layer       | Technology                                           |
| ----------- | ---------------------------------------------------- |
| Runtime     | Bun 1.4                                              |
| Frontend    | TanStack React Start, Vite, React 19, Tailwind CSS 4 |
| API         | ORPC (type-safe RPC) with Zod                        |
| Database    | PostgreSQL 18, Drizzle ORM                           |
| Auth        | Better Auth                                          |
| Real-time   | WebSockets, Valkey pub-sub                           |
|…
