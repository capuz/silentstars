---
repo: "brillcp/PocketDex"
name: "PocketDex"
description: "A simple Pokedex app written in SwiftUI that implements the PokeAPI, using Swift Concurrency, MVVM architecture and pagination"
readmeQualityOk: true
url: "https://github.com/brillcp/PocketDex"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
topics: ["app", "await-async", "concurrency", "ios", "ios-swift", "pokeapi", "pokedex", "pokemon", "pokemon-api", "swift"]
stars: 138
forks: 6
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-07-12T15:50:57Z"
lastCommitAt: "2026-10-15T08:32:51Z"
lastReleaseAt: "2026-05-12T17:02:04Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 71
undervaluedScore: 24
maintainers: ["brillcp"]
openGraphImageUrl: "https://opengraph.githubassets.com/bfec51b8635d72bde765dba262d18c7f4a08f3dd850ef81590190266b549b1b0/brillcp/PocketDex"
---

# PocketDex+

PocketDex+ is a SwiftUI app built on top of the [PokeAPI](https://pokeapi.co), with a working turn-based Pokemon battle mode driven by **Apple's on-device FoundationModels framework** and **local multiplayer** over MultipeerConnectivity. Browse the dex, dig into a pokemon, pick a fight against AI or a friend nearby.

If you're a senior iOS engineer looking for a worked example of modern SwiftUI patterns (**Swift 6 strict concurrency**, actors, `@Observable`, SwiftData with a background `@ModelActor`, on-device AI, MultipeerConnectivity), or someone earlier in their iOS journey trying to see how these pieces fit together in a real app, hopefully there's something here for you. Every feature is small enough to read end-to-end, and the code is commented to explain *why* things are built the way they are: data flow, threading choices, and the non-obvious decisions.

Built by [Viktor Gidlöf](https://viktorgidlof.com).

---

# Architecture 🏛

PocketDex+ is **Protocol-Oriented MVVM** with clear layer boundaries and **Swift 6 data-race safety** enforced by the compiler.

## Key architectural benefits

- ✅ **Swift 6 language mode**: full compile-time data-race checking, with…
