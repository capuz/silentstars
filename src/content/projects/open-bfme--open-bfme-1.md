---
repo: "Open-BFME/Open-BFME-1"
name: "Open-BFME-1"
description: "Open Source, 1:1 binary swappable recreation of the Lord of the Rings, Battle for Middle-Earth"
readmeQualityOk: true
url: "https://github.com/Open-BFME/Open-BFME-1"
language: "C++"
languages: ["C++", "C"]
languagePcts: [66, 21]
stars: 97
forks: 24
openIssues: 0
closedIssues: 0
watchers: 5
contributors: 34
recentReleases: 0
createdAt: "2026-06-28T04:47:06Z"
lastCommitAt: "2026-09-23T08:46:21Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 29
maintainers: ["gborges0727", "kalub92", "StarkillerHDX"]
openGraphImageUrl: "https://opengraph.githubassets.com/558b6d2cf202ba899b086926aaa3088b330489f276a9f4f1cc84ad75d285ca98/Open-BFME/Open-BFME-1"
---

# BFME 1 Source Code

Goal: Source code that rebuilds BFME 1's executable byte-for-byte, and game modernization improvements that you've only seen in your dreams.

[Join our Discord to participate!](https://discord.gg/wCvA2XqPUT)

## What?

* If you take a part of the BFME binary, recreate the exact source code that would make that part of the binary, then compile the source code and inject it into the binary, you get the same binary
* Doing this piece by piece will eventually give you a full, open source recreation of BFME, and enable some (insane) mods

## Roadmap

* [ ] BFME 1 Source Code (see the live progress bar above)
* [x] Network delay fix
* [ ] Memory fix
* [ ] Better crash logs
* [ ] 60/120 FPS
* [ ] Multi CPU
* [ ] AC fix
* [ ] World builder Source Code
* [ ] 16 player maps

## How You Can Help

Clone the repo and give your AI agent this exact prompt — measured on six agent
sessions, a vaguer prompt reliably produces zero progress:

> Read AGENTS.md and follow it. Loop: take the served candidate's whole file,
> convert bodies to byte-exact C++, bank each verified body as its own commit,
> and before stopping run `python3 tools/progress.py origin/master` — if C++
>…
