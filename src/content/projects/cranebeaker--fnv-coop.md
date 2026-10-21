---
repo: "cranebeaker/fnv-coop"
name: "fnv-coop"
description: "Story co-op for Fallout: New Vegas: shared quests, dialogue results, karma and reputation (developer preview)"
readmeQualityOk: true
url: "https://github.com/cranebeaker/fnv-coop"
homepage: "https://coopanything.app/games/fallout-new-vegas/"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [53, 45]
stars: 9
forks: 2
openIssues: 11
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-10-16T12:15:23Z"
lastCommitAt: "2026-10-21T17:17:23Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 43
maintainers: ["ZachariaRaven", "cranebeaker"]
openGraphImageUrl: "https://opengraph.githubassets.com/4fcb74fabaf6e696e85b6308387563a4725c9ad858e362fbb1c5e07d232c7953/cranebeaker/fnv-coop"
---

# Fallout: New Vegas co-op: story sync (developer preview)

> **Status (October 2026): developer preview, the code for full co-op is written; in-game testing is next. See the 10-step roadmap below.**
>
> | Area | Where it stands |
> |---|---|
> | Sync core (protocol, merge rules, rejoin, rules engine) | built, covered by game-free tests and a 4-player soak |
> | Co-op rules for every story quest | written for 481 quests |
> | Engine hooks that record world changes | cover about two thirds of the script commands the game uses |
> | Two game copies on one PC for automated tests | working |
> | Quest stage sync between two real game copies | working: stages arrive exactly once, with no scripts re-run on the client |
> | Goodsprings stage sweep | 65 of 104 stages pass |
> | NV:MP alongside the plugin | both clients connect and see each other |
>
> There is no player release yet. Progress updates land here.

Play the whole **Fallout: New Vegas** story together: 2 to 4 players, one shared world, one shared quest
state. This repo is the **story layer**: an xNVSE plugin plus a game-free sync core that keeps quests,
objectives, dialogue results, reputation and karma identical on every…
