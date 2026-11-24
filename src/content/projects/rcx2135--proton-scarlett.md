---
repo: "rcx2135/proton-scarlett"
name: "proton-scarlett"
description: "Heavily vibeslopped experimental Proton fork for the Xbox Series X|S build of GTA VI on Linux. "
readmeQualityOk: true
url: "https://github.com/rcx2135/proton-scarlett"
language: "C++"
languages: ["C++", "KCL", "C"]
languagePcts: [53, 24, 22]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 91
recentReleases: 0
createdAt: "2026-11-23T16:43:05Z"
lastCommitAt: "2026-11-24T14:08:06Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 38
maintainers: ["rcx2135"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d1fda823d3c0a7696cd8a71b17357df0aecf7fe8eb322e859572aa9a938c100/rcx2135/proton-scarlett"
---

# scarlett-proton

scarlett-proton is a Proton fork implementing Xbox Series X|S console APIs for x86-64 games on Linux.
Wine loads the original executable; project-owned DLLs supply console imports. [Build and test](https://github.com/rcx2135/proton-scarlett/blob/HEAD/scarlett/README.md).

## GTA VI on Linux: progress at a glance

| Question | Where things stand |
| --- | --- |
| Can I play it? | **Not yet.** The game hasn't shown its first frame or reached the main menu. |
| How far does it get? | The original Xbox game starts on Linux with both AMD graphics and an NVIDIA RTX 3070. It opens game files and begins setting up graphics. |
| Can it draw anything yet? | In a [separate test](https://github.com/rcx2135/proton-scarlett/blob/HEAD/scarlett/tests/clear-fallback/README.md), the game's own drawing code produced the expected colored rectangle on both GPUs. |
| What's blocking it? | Experimental builds on both GPUs get past the counter wait and a frame-tagged submission. They stop as the game prepares an image for rendering. |
