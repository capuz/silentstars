---
repo: "Open-BFME/Open-BFME-2"
name: "Open-BFME-2"
description: "Byte-exact source recreation of BFME 2's game.dat — sister project of Open-BFME-1"
readmeQualityOk: true
url: "https://github.com/Open-BFME/Open-BFME-2"
language: "C++"
languages: ["C++"]
languagePcts: [90]
stars: 58
forks: 29
openIssues: 2
closedIssues: 2
watchers: 1
contributors: 44
recentReleases: 0
createdAt: "2026-08-29T16:05:08Z"
lastCommitAt: "2026-10-13T10:57:03Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 35
maintainers: ["admiraly", "nleigh", "yasinschroeder"]
openGraphImageUrl: "https://opengraph.githubassets.com/49e8e613261ee9176ba4afaa5c188577887b3893bc0529bd9a497945fd11d0f0/Open-BFME/Open-BFME-2"
---

# BFME 2 Source Code

Goal: Source code that rebuilds BFME 2's engine binary (`game.dat`) byte-for-byte, and game modernization improvements that you've only seen in your dreams.

[Join our Discord to participate!](https://discord.gg/wCvA2XqPUT)

## What?

* We rewrite the game's code as C++, one small piece at a time.
* Each piece must turn back into the exact same bytes as the original game.dat (BFME 2, version 1.06).
* When every piece matches and links, the whole game is open source, and we can fix bugs and make mods.

### What the bars measure

* **Rebuilt from source**: code rebuilding to the original game.dat's exact bytes, partly generated code or prebuilt libraries.
* **Game code in C++**: the game's own code (no libraries) in C++.
* **Linking**: the part of that code in files that link cleanly (link census). Each file is judged on its own: its names resolve, with no duplicate or wrong copy.
* **Strict link check** (the line under the bars): the whole tree linked at the original game's addresses with every reference checked ([`tools/link_cycle.py`](https://github.com/Open-BFME/Open-BFME-2/blob/HEAD/tools/link_cycle.py)). *Self-strict* is code placed at its original…
