---
repo: "Deez-coder/SMO-android-port"
name: "SMO-android-port"
description: "a (very wip) port of super mario odyssey to android"
readmeQualityOk: true
url: "https://github.com/Deez-coder/SMO-android-port"
language: "C"
languages: ["C"]
languagePcts: [82]
stars: 98
forks: 5
openIssues: 32
closedIssues: 8
watchers: 5
contributors: 2
recentReleases: 4
createdAt: "2026-11-03T08:02:25Z"
lastCommitAt: "2026-11-21T13:32:51Z"
lastReleaseAt: "2026-11-18T13:29:18Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 72
undervaluedScore: 17
maintainers: ["Deez-coder"]
openGraphImageUrl: "https://opengraph.githubassets.com/35d9fd19c709938c03d5ce2c4cf864eae0bda24137e3b314161769d81115c7ef/Deez-coder/SMO-android-port"
---

the one official source of this port, anywhere else is NOT done by me
# SMO Android Port

*Super Mario Odyssey* (version 1.0.0) running natively on Android, built on the static recompilation from
[smo-recomp](https://github.com/Coz-0/smo-recomp).

The game runs natively. Its ARM64 code is translated to C ahead of time and compiled for Android with the NDK, with no CPU interpreter, JIT or compatibility layer in between, and this project's runtime takes care of the rest: the console's system libraries, NVN graphics (on Vulkan), shaders, audio, input and the file system.

There's no game code, no game assets, no keys and no firmware in this repo. You need your own copy of the game and keys dumped from your own console.

Made with AI. Most of the code was written by Claude, Anthropic's AI assistant (through Claude Code), with the project's creator directing it, reviewing it and testing it on a real phone. Expect some rough edges, and if something breaks, please send logs (see below).

## Status: beta 0.5

The game boots, plays and saves. Here's how it runs on the dev's phone, on the phone's own driver.
