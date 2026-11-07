---
repo: "Hanabi-Live/hanabi-live"
name: "hanabi-live"
description: "A web server that allows people to play Hanab, a cooperative card game of logic and reasoning."
readmeQualityOk: true
url: "https://github.com/Hanabi-Live/hanabi-live"
homepage: "https://hanab.live"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [54, 27]
topics: ["hanabi", "golang", "typescript", "game", "card-game"]
stars: 215
forks: 159
openIssues: 224
closedIssues: 2024
watchers: 4
contributors: 92
recentReleases: 7
createdAt: "2017-12-02T10:19:10Z"
lastCommitAt: "2026-11-07T16:12:57Z"
lastReleaseAt: "2026-11-07T16:08:50Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "release_machine", "fork_magnet"]
healthScore: 98
undervaluedScore: 52
maintainers: ["Zamiell"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/112832461/7c1ce2f6-5596-44b5-8754-a28be74d5b2b"
---

## Description

- This is the source code for [Hanab Live](http://hanab.live/), a website that
  allows people to play a cooperative card game online. It is similar to the
  card game [Hanabi](https://boardgamegeek.com/boardgame/98778/hanabi).
- This project has no affiliation with the card game Hanabi,
  [Antoine Bauza](https://en.wikipedia.org/wiki/Antoine_Bauza) (the creator of
  Hanabi), or any of the the real-life publishers of the game (of which there
  are many).
- The client is programmed in [TypeScript](https://www.typescriptlang.org/). It
  is located in the [`packages/client`](https://github.com/Hanabi-Live/hanabi-live/blob/HEAD/packages/client) directory.
  - A lot of the code was originally taken from
    [Keldon Jones'](http://keldon.net/) implementation of the game. (His site no
    longer exists.)
- The server is programmed in [Rust](https://www.rust-lang.org/). It is located
  in the [`server`](https://github.com/Hanabi-Live/hanabi-live/blob/HEAD/server) subdirectory.
  - It uses a [PostgreSQL](https://www.postgresql.org/) database to store
    information about users and completed games, and durable Redis storage for
    recoverable live games.
- The core game…
