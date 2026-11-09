---
repo: "SmokeDoggy044/CoD2-BRO-Decomp"
name: "CoD2-BRO-Decomp"
description: "Decompilation fork of the CoD2: Big Red One native loader (toward a full native build)"
readmeQualityOk: true
url: "https://github.com/SmokeDoggy044/CoD2-BRO-Decomp"
language: "C++"
languages: ["C++"]
languagePcts: [94]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-10-17T21:43:35Z"
lastCommitAt: "2026-11-09T00:54:08Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 40
maintainers: ["SmokeDoggy044"]
openGraphImageUrl: "https://opengraph.githubassets.com/f934e13c0030098a5ea7120b71c13ca77b6a0299c01148079be77c6ed2848e6d/SmokeDoggy044/CoD2-BRO-Decomp"
---

# Call of Duty 2: Big Red One - decompilation

*Call of Duty 2: Big Red One* never came out on PC. This project is working toward
changing that: we're turning the original Xbox game back into C++ source code that
can be built and run natively on Linux and Windows.

It's early days: about 74% of the functions have a name, and 7,441 have been
rewritten in C++. The renderer, sound, animation, client game, collision, streaming,
engine core (memory, files, settings, commands) and the client with its menus are done or
nearly; the game logic (AI, entities, level scripts) is the big part still to come.

**Just want to play?** Use the
[native loader](https://github.com/SmokeDoggy044/CoD2-BRO-Native-Loader) instead.
It already runs the full single-player campaign on PC today. This repository is
where the decompilation happens, and there's nothing here to play yet.

You'll need your own copy of the game either way. None of the game's code or data is
included here.

Developed with AI: see [Made with AI](#made-with-ai).

## Progress

*As of 2026-11-08. The numbers come from `tools/progress.py`, which tracks every
function of the game.*

| | Functions | Named | Rewritten | Left to rewrite |…
