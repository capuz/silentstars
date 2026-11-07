---
repo: "Master-Chiken/boonta-reborn-88"
name: "boonta-reborn-88"
description: "Research and homebrew development for an enhanced Star Wars: Episode I – Racer (1999) experience on Nintendo GameCube and Wii, with HD visuals, bonus features, and console-specific builds. Unofficial fan project, not affiliated with or endorsed by the original rights holders."
readmeQualityOk: true
url: "https://github.com/Master-Chiken/boonta-reborn-88"
language: "Python"
languages: ["Python", "C"]
languagePcts: [62, 36]
stars: 5
forks: 0
openIssues: 6
closedIssues: 29
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-10-14T11:50:24Z"
lastCommitAt: "2026-11-07T22:53:01Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 51
maintainers: ["Master-Chiken"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a9db5c83e19d8ea086947ef83a6d3571b91b18941dac2750553f7bfc72bc3a1/Master-Chiken/boonta-reborn-88"
discussionCount: 0
---

# Boonta Reborn 88

**Boonta Reborn 88 is a fan-made homebrew project inspired by _Star Wars: Episode I – Racer_ (1999).** The goal is to build an enhanced racing game for Nintendo GameCube and Wii. It is not an official Lucasfilm, Disney, or original-publisher project.

The work is still at the prototype stage. We want to build on public research and compatible tools, but we keep the game's commercial code and assets separate unless their reuse and redistribution rights are clearly established.

## The current state

The repository contains an original GameCube prototype in `gamecube-demo/`. It builds a native DOL/ELF and has automated tests plus Dolphin diagnostics for specific code paths and rendered frames.

**The prototype has not yet passed a manual playability test.** A person still needs to run it in a visible Dolphin session with a configured controller, complete a three-lap race, confirm the finish and reset, and try another run. Physical GameCube/Wii compatibility is also unverified.

### What is already working

- A native GameCube build using devkitPPC and libogc.
- An original 3D test scene with a procedural desert course, rival pods, canyon geometry, and a…
