---
repo: "nulltask/be-music"
name: "be-music"
description: "TypeScript monorepo for the be-music BMS/BMSON toolchain"
readmeQualityOk: true
url: "https://github.com/nulltask/be-music"
homepage: "https://be-music-player-demo.nulltask.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 15
forks: 1
openIssues: 5
closedIssues: 28
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-28T13:27:33Z"
lastCommitAt: "2026-10-13T10:58:10Z"
lastReleaseAt: "2026-05-11T08:48:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 54
maintainers: ["nulltask"]
openGraphImageUrl: "https://opengraph.githubassets.com/be0dc489a3b0c894a9a55fcc913815cb1dba2e7872fc29504aad5df74126dc39/nulltask/be-music"
---

[Japanese version](https://github.com/nulltask/be-music/blob/HEAD/README.ja.md)

# be-music

BMS/BMSON toolchain composed of TypeScript + pnpm workspaces.

## Packages

- `@be-music/json`: pure IR of BMS/BMSON intermediate representation (JSON compatible) dedicated to Be-Music internal processing
- `@be-music/chart`: chart semantics helper such as beat resolution, event order, long note resolution, etc.
- `@be-music/utils`: Generic utilities reused across all packages, with narrow subpath exports for browser-safe core helpers and Node-facing helpers
- `@be-music/parser`: `.bms` / `.bme` / `.bml` / `.pms` / `.bmson` / JSON parser
- `@be-music/stringifier`: Stringization from JSON to `.bms` / `.bmson`
- `@be-music/audio-renderer`: Render the music score and output `.wav` / `.aiff`
- `@be-music/player`: Shared playback engine, timing, judgment, scoring, gauge, BGA timeline, and UI/audio adapter contracts
- `@be-music/player-tui`: Terminal UI and `bms-player` CLI frontend for autoplay, keyboard play, Music Select, BGA, and SEA builds, plus the `bms-playlog` play-log re-simulator
- `@be-music/lr2-skin`: Renderer-independent Lunatic Rave 2 skin parser, asset resolver, and theme loader
-…
