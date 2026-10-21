---
repo: "macabeus/asmlift"
name: "asmlift"
description: "📜 A spirit that lifts fallen assembly back into the light"
readmeQualityOk: true
url: "https://github.com/macabeus/asmlift"
homepage: "https://macabeus.github.io/asmlift/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 19
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-07-08T00:30:06Z"
lastCommitAt: "2026-10-21T21:15:19Z"
lastReleaseAt: "2026-10-07T00:21:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 48
maintainers: ["macabeus"]
openGraphImageUrl: "https://opengraph.githubassets.com/4daa4c5e21c6b40e12accc47c128943bd1b2fa9eaf1ee39b55cacb6f07dfc4c2/macabeus/asmlift"
---

# asmlift

> 📜 A spirit that lifts fallen assembly back into the light

A **matching decompiler**: assembly in, C / C++ / Pascal out, aiming for source that recompiles
**byte-identical** to the original object. Designed for retro game decompilation.

Check the [playground](https://macabeus.github.io/asmlift/) to see it in action or the
[benchmark](https://macabeus.github.io/asmlift/#view=benchmark) report to see its current performance.

> ⚙️ **What is Matching Decompilation?**
>
> Matching decompilation is the art of converting assembly back into C source code that, when compiled, produces byte-for-byte identical machine code. It’s popular in the retro gaming community for recreating the source code of classic games. For example, [Super Mario 64](https://github.com/n64decomp/sm64) and [The Legend of Zelda: Ocarina of Time](https://github.com/zeldaret/oot) have been fully match-decompiled.
>
> [Learn more by watching my talk.](https://www.youtube.com/watch?v=sF_Yk0udbZw)

## Why not m2c?

[m2c](https://github.com/matt-kempster/m2c) is a great tool built over years of reverse engineering experience from many contributors, and its learnings were very helpful for asmlift.

But I…
