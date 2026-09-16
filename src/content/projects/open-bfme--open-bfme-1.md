---
repo: "Open-BFME/Open-BFME-1"
name: "Open-BFME-1"
description: "Open Source, 1:1 binary swappable recreation of the Lord of the Rings, Battle for Middle-Earth"
readmeQualityOk: true
url: "https://github.com/Open-BFME/Open-BFME-1"
language: "C++"
languages: ["C++", "C"]
languagePcts: [65, 22]
stars: 91
forks: 21
openIssues: 0
closedIssues: 0
watchers: 5
contributors: 30
recentReleases: 0
createdAt: "2026-06-28T04:47:06Z"
lastCommitAt: "2026-09-16T08:48:03Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 29
maintainers: ["gborges0727", "TheThag", "jonathan"]
openGraphImageUrl: "https://opengraph.githubassets.com/d27ebd3f685b2c1e1467d8e02e3d12946e71c49c58d6a9697ef51e4f377983b5/Open-BFME/Open-BFME-1"
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
