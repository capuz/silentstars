---
repo: "Kendoismebutmaybenot/wondershot"
name: "wondershot"
description: "Super Mario Bros. Wonder (Switch 2 Edition) recompilation for PC, built on Longshot. Get WondershotBuilder from Releases. No game files included."
readmeQualityOk: true
url: "https://github.com/Kendoismebutmaybenot/wondershot"
homepage: "https://github.com/Kendoismebutmaybenot/wondershot/releases"
language: "Python"
languages: ["Python", "C++", "C"]
languagePcts: [38, 35, 25]
stars: 97
forks: 1
openIssues: 8
closedIssues: 11
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-11-23T23:58:26Z"
lastCommitAt: "2026-11-26T23:26:26Z"
lastReleaseAt: "2026-11-24T21:33:43Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 91
undervaluedScore: 35
maintainers: ["Kendoismebutmaybenot", "Mustard-Tiger"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff6f5f605f5a47ac4d766667c50f02c44985d4e82e533de677174b52ad01b325/Kendoismebutmaybenot/wondershot"
---

# Wondershot

> **Alpha.** Get **WondershotBuilder** from [Releases](https://github.com/Kendoismebutmaybenot/wondershot/releases), unzip it
> anywhere, run `WondershotBuilder.exe`, point it at your own game dump (a folder with `exefs` and `romfs`, or the game's `.nup`),
> press Build, then Play. The first build fetches the compiler and libraries once (about 230 MB, each checked against
> `tools.lock`), recompiles the game on your PC and sets the folder up; it takes a while and wants a fair amount of RAM. When a
> newer Wondershot release is out, the builder says so and Update downloads it and rebuilds only what changed. Your game's files can
> stay where they are (the game folder links to them) or be copied into the game folder, which then stands alone; the builder asks. The app is
> `builder/WondershotBuilder` (WPF, .NET 8); `scripts/wonder_builder_package.py` makes its folder and zip.
