---
repo: "Cooler2/ApusGameEngine"
name: "ApusGameEngine"
description: "An open source Delphi/Pascal game engine"
url: "https://github.com/Cooler2/ApusGameEngine"
language: "Pascal"
languages: ["Pascal"]
languagePcts: [96]
topics: ["delphi", "delphi-game", "delphi-library", "game-engine", "delphi-game-engine", "freepascal", "gamedev", "gamedev-library"]
stars: 189
forks: 30
openIssues: 3
closedIssues: 5
watchers: 15
contributors: 2
recentReleases: 0
createdAt: "2020-03-04T16:23:38Z"
lastCommitAt: "2026-06-26T21:31:16Z"
lastReleaseAt: "2021-09-06T18:48:18Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 82
undervaluedScore: 39
maintainers: ["Cooler2"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/244948203/66af8e1b-4402-4ef1-9bb3-911495301bf8"
fundingLinks: ["PATREON:https://patreon.com/ApusGameEngine"]
discussionCount: 7
---

## Apus Game Engine

Cross-platform 2D/3D game engine written in Delphi/Pascal by Ivan Polyacov ([Apus Software](https://apus-software.com)). In active development since the early 2000s, used in several commercial titles.

**Games made with this engine:**
* [Astral Masters](https://store.steampowered.com/app/1790630/Astral_Masters/) — Windows, IOS (Engine-2)
* [Spectromancer](https://store.steampowered.com/app/22500/Spectromancer/) — Windows, IOS (Engine-3)
* [Astral Towers](https://store.steampowered.com/app/983450/Astral_Towers/) — Windows, Linux, IOS (Engine-3 / 4)
* [Astral Heroes](https://store.steampowered.com/app/488910/Astral_Heroes/) — Windows (Engine-3)

---

### 💡 Philosophy

The engine is written in standard Object Pascal and compiles with both **Delphi 11+** and **FPC 3.2+** from a single codebase, with no conditional forks for compiler-specific syntax. This is a deliberate design constraint: language features that work in one compiler but not the other are avoided. The goal is long-term portability — the same source should remain buildable regardless of which Pascal toolchain you use or what platform you target.

This means: no inline variables, no type inference,…
