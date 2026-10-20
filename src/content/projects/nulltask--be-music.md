---
repo: "nulltask/be-music"
name: "be-music"
description: "TypeScript monorepo for the be-music BMS/Bmson toolchain"
readmeQualityOk: true
url: "https://github.com/nulltask/be-music"
homepage: "https://be-music.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 15
forks: 1
openIssues: 47
closedIssues: 43
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-28T13:27:33Z"
lastCommitAt: "2026-10-20T08:49:08Z"
lastReleaseAt: "2026-05-11T08:48:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 49
maintainers: ["nulltask", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fbaf13e7ecead723787cf5c0dc0bb7b52505d15e6acc26d3ee9a0d5d4a9a97db/nulltask/be-music"
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
- `@be-music/player`: Shared rules and playback engine: one play loop (manual, auto, replay), judgment, scoring, gauges and clear lamps, best records, course runs and NONSTOP, the play-log format, and the runtime contracts hosts plug into
- `@be-music/player-tui`: Terminal UI and `bms-player` CLI frontend for autoplay, keyboard play, Music Select, BGA, and SEA builds, plus the `bms-playlog` play-log…
