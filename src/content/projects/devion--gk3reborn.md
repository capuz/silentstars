---
repo: "Devion/GK3Reborn"
name: "GK3Reborn"
description: "Gabriel Knight 3 Reborn - VK/Raytraced Engine in C#"
readmeQualityOk: true
url: "https://github.com/Devion/GK3Reborn"
language: "C#"
languages: ["C#"]
languagePcts: [95]
stars: 6
forks: 1
openIssues: 7
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-18T22:29:30Z"
lastCommitAt: "2026-09-27T09:27:27Z"
lastReleaseAt: "2026-09-08T15:40:26Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 84
undervaluedScore: 52
maintainers: ["Devion"]
openGraphImageUrl: "https://opengraph.githubassets.com/cab2fa0235f78a2f375db5f71aeb1371d6624c17888f324b51ed145b560dd9d5/Devion/GK3Reborn"
discussionCount: 0
---

# GK3Reborn

A modern, GPL-3.0 C#/.NET 10 engine for *Gabriel Knight 3: Blood of the Sacred,
Blood of the Damned* (Sierra Studios, 1999).

GK3Reborn plays the complete game from a legally owned installation, replacing
the 1999 presentation and verb-based UI with a Vulkan renderer, spatial audio, a
pointer-first interaction model and an offline content pipeline that converts the
original data into modern formats.

**This project ships no original game assets.** It requires an installation you
own, which it reads and never modifies.

Status: **early**. The solution builds and the test suite passes. The content
pipeline reads the original archives and converts the cinematics, models, textures
and scenes. A room now loads the way the game builds it — both of its initialisation
files, their conditions decided against a point in the story — and renders under
Vulkan with the artists' own light rigs and optional ray-traced shadows and
occlusion. Everything after that is still ahead: nothing walks, nothing is
clickable, no script drives a scene, and there is no audio or UI. See
[`../Plan`](https://github.com/Devion/GK3Reborn/blob/HEAD/../Plan) for the full program plan, and…
