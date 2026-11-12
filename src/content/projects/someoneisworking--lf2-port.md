---
repo: "SomeoneIsWorking/lf2-port"
name: "lf2-port"
description: "Native Linux/macOS port of Little Fighter 2 v2.0a by static recompilation. Plays the game: menus, character select, VS matches, sound and music. Controller hotswap and borderless windowed. No game content redistributed."
readmeQualityOk: true
url: "https://github.com/SomeoneIsWorking/lf2-port"
language: "C"
languages: ["C"]
languagePcts: [76]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-07-29T16:51:42Z"
lastCommitAt: "2026-11-12T11:39:52Z"
lastReleaseAt: "2026-09-12T12:32:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 55
maintainers: ["SomeoneIsWorking"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff96f1a637d0734d028ae2d40f9e09eef9ef374cda6aab52cf2bdf1b483958e5/SomeoneIsWorking/lf2-port"
---

# lf2-port

A native Linux, macOS, and Android port of **Little Fighter 2 v2.0a**. The
target product keeps the port's native host systems and selected native game
behavior while `shared/x86port` dynamically translates every remaining x86-32
guest instruction from the player's original executable.

The repository is currently integrating its runtime executor. Its native
renderer, platform services, UI, input, audio, packaging, and gameplay
enhancements remain. The x86-64 gameplay target builds against
`x86port_runtime`, reaches the mode menu, and then refuses when control enters
PE/DOS-header data at `0x0040000C`. The pinned runtime still has no bounded
fallback. The current work is the [native/JIT migration](https://github.com/SomeoneIsWorking/lf2-port/blob/HEAD/docs/migration.md);
capability truth is in
[project state](https://github.com/SomeoneIsWorking/lf2-port/blob/HEAD/docs/project-state.md).

## Intended product

```text
authenticated lf2.exe
        |
native LF2 entry and bounded initialization
        |
LF2 runtime adapter -> x86port JIT -> translated blocks from live guest bytes
        |                    |
        |                    +-> LF2 native overrides by guest…
