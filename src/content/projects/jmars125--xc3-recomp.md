---
repo: "jmars125/xc3-recomp"
name: "xc3-recomp"
description: "Static recompilation of Xenoblade Chronicles 3 to PC"
readmeQualityOk: true
url: "https://github.com/jmars125/xc3-recomp"
language: "C"
languages: ["C"]
languagePcts: [79]
stars: 146
forks: 7
openIssues: 14
closedIssues: 3
watchers: 3
contributors: 7
recentReleases: 10
createdAt: "2026-11-02T19:58:51Z"
lastCommitAt: "2026-11-12T05:35:46Z"
lastReleaseAt: "2026-11-08T07:29:57Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 81
undervaluedScore: 27
maintainers: ["jmars125"]
openGraphImageUrl: "https://opengraph.githubassets.com/9eef682a402cdca0589249556878e651fa7ef084df0ab97c94938fd027bac4a8/jmars125/xc3-recomp"
---

# XC3 Recomp

**XC3 Recomp** is a static recompilation of *Xenoblade Chronicles 3* (Nintendo Switch, 2022) into a native Windows x86-64 application ([docs/architecture.md](https://github.com/jmars125/xc3-recomp/blob/HEAD/docs/architecture.md)). It is a fork of [XCX Recomp](https://github.com/jmars125/xcx-recomp), itself a fork of [TotK Recomp](https://github.com/valentderah/totk-pc-recomp) by Valiantsin Dzerakh.

> [!IMPORTANT]
> **No game files are included.** You need your own legally obtained copy of *Xenoblade Chronicles 3*, dumped from your own console: the base game and the 2.2.1 update (the add-on content is optional). Instructions for obtaining those files will not be provided.
>
> The game is built from your files on your machine, so the result contains the game. It is for your own use. Do not share it.

## Status

Playable from New Game through the story, cutscenes and battles on Windows, with sound, text and the menu. 60 fps by
default; 30 to 360 in the settings, with game speed kept right at any rate.

Known issues:

- Some busy areas and cutscenes drop to around 40 fps on any GPU: the game's own CPU work bounds them. Frame generation
  helps there.
- The first visit…
