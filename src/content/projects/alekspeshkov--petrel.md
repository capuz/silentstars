---
repo: "AleksPeshkov/petrel"
name: "petrel"
description: "UCI chess engine"
readmeQualityOk: true
url: "https://github.com/AleksPeshkov/petrel"
language: "C++"
languages: ["C++"]
languagePcts: [90]
topics: ["chess", "chess-ai", "chess-bot", "chess-engine", "uci", "uci-chess-engine", "cpp20", "nnue"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-07-06T11:28:32Z"
lastCommitAt: "2026-07-28T14:44:31Z"
lastReleaseAt: "2026-03-19T23:03:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 78
maintainers: ["AleksPeshkov"]
openGraphImageUrl: "https://opengraph.githubassets.com/c87838fbb6b48245c99d50d7b0539f8a1e888db9ca21d28c7b1f91212361a48c/AleksPeshkov/petrel"
---

# Petrel is UCI Chess Engine

Petrel is a conventional alpha-beta search engine, but some implementation details set it apart from others.
Petrel's design goal is to be other engine's robust sparring partner particularly at very short (subsecond per game) time controls.

Petrel 3.5 rated `3435` Elo on the [CCRL Blitz](https://computerchess.org.uk/ccrl/404/cgi/engine_details.cgi?eng=Petrel%203.5%2064-bit) list; `3363` Elo on the [CCRL 40/15](https://computerchess.org.uk/ccrl/4040/cgi/engine_details.cgi?print=Details&each_game=0&eng=Petrel%203.5%2064-bit). Petrel 2.2 rated `2775` Elo on the [Ultimate Bullet Classical](https://e4e6.com/) list.

## Features

* [**Unique position representation**](https://www.chessprogramming.org/Piece-Sets) – Neither bitboards nor mailbox based on 128-bit SIMD vectors
* [**Hyperbola Quintessence**](https://www.chessprogramming.org/Hyperbola_Quintessence) for sliding pieces attack generation
* [**Incrementally updated attack tables**](https://www.chessprogramming.org/Attack_and_Defend_Maps)
* Fast **Simplified SEE based on attack tables**
* **Bulk legal move generation** directly from attack tables
* Unorthodox search code framework without move lists…
