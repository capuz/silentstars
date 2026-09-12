---
repo: "Open-BFME/Open-BFME-1"
name: "Open-BFME-1"
description: "Open Source, 1:1 binary swappable recreation of the Lord of the Rings, Battle for Middle-Earth"
readmeQualityOk: true
url: "https://github.com/Open-BFME/Open-BFME-1"
language: "C++"
languages: ["C++", "C"]
languagePcts: [65, 22]
stars: 87
forks: 21
openIssues: 0
closedIssues: 0
watchers: 5
contributors: 29
recentReleases: 0
createdAt: "2026-06-28T04:47:06Z"
lastCommitAt: "2026-09-12T08:05:29Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 30
maintainers: ["jonathan", "gborges0727", "StarkillerHDX"]
openGraphImageUrl: "https://opengraph.githubassets.com/22ef06066ad98bd28b66f7ae88b97c9ed7fb830df12fd612fbd2e70eb0d5d80d/Open-BFME/Open-BFME-1"
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
