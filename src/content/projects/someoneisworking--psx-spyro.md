---
repo: "SomeoneIsWorking/psx-spyro"
name: "psx-spyro"
description: "Native PC port of Spyro the Dragon (PS1), built on the psxport static-recompilation framework. Supply your own disc."
readmeQualityOk: true
url: "https://github.com/SomeoneIsWorking/psx-spyro"
language: "C++"
languages: ["C++"]
languagePcts: [87]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-28T10:57:07Z"
lastCommitAt: "2026-10-21T17:30:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 43
maintainers: ["SomeoneIsWorking"]
openGraphImageUrl: "https://opengraph.githubassets.com/45610fba30d2bf5ba160a8ed849baef68b8020146f13f2aa161d2a054f5d0710/SomeoneIsWorking/psx-spyro"
---

# SpyroEngine — Spyro 1, 2, and 3

A work-in-progress native PC port of the original PlayStation Spyro trilogy. The target architecture
combines title-owned native subsystems with psxport's runtime Lightrec executor for every remaining
MIPS instruction read from the player's authenticated game files.

No game code, asset, executable, disc image, or BIOS is distributed. Supply a legally obtained copy.

## Title status

| Title | Executable identity | Current evidence |
| --- | --- | --- |
| Spyro the Dragon | `SCUS_942.28` | Reaches the title/save flow, opening cutscene and Artisans gameplay through Lightrec. Presents on the Record path; 60 fps composes only the screen tint and letterbox, and widescreen keeps retail's culls and HUD (issue 0186). |
| Spyro 2 | `SCUS_944.25` | Reaches Glimmer gameplay from its own title screen. Record path with widened culls, an anchored HUD and interpolated terrain; mobys, HUD, sky and particles have no producer (issue 0176). |
| Spyro 3 | `SCUS_944.67` | Reaches Sunrise Spring gameplay from its own title screen. Record path as Spyro 2, on the same terrain producer. |

Status and evidence are in `docs/project-state.md`; feature chains in…
