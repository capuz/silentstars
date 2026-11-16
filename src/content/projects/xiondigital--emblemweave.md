---
repo: "XiONDiGiTaL/EmblemWeave"
name: "EmblemWeave"
description: "A feature-rich recompilation launcher for Fire Emblem: Fortune's Weave, with integrated mod management and in-game enhancements."
readmeQualityOk: true
url: "https://github.com/XiONDiGiTaL/EmblemWeave"
homepage: "http://xiondigital.net/EmblemWeave/"
language: "C++"
languages: ["C++"]
languagePcts: [72]
topics: ["aarch64", "ai-assisted", "cheats", "egui", "fire-emblem", "game-launcher", "game-mods", "nintendo-switch-2", "recompilation", "rust"]
stars: 110
forks: 4
openIssues: 14
closedIssues: 19
watchers: 3
contributors: 4
recentReleases: 10
createdAt: "2026-11-08T06:22:50Z"
lastCommitAt: "2026-11-16T04:29:09Z"
lastReleaseAt: "2026-11-14T17:23:38Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 91
undervaluedScore: 35
maintainers: ["XiONDiGiTaL", "ranbinrang-rgb", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/67aa780c5d95788426e71920f00395d18ae9d71534a9b4062ebb54f33541431a/XiONDiGiTaL/EmblemWeave"
---

Recompiled ahead of time, and played natively with no emulator.<br>
  Built by <a href="https://github.com/XiONDiGiTaL">XiØN</a>.

---

EmblemWeave is a feature-rich recompilation launcher for *Fire Emblem: Fortune's
Weave*. It builds the game ahead of time from your own dump and plays it natively
on Windows with no emulator, and it gathers everything around that into one
application: integrated mod management, save profiles and a save editor, cheats,
an in-game menu, and a recompilation pipeline you can watch run.

You supply the game from your own legally obtained copy. EmblemWeave contains no
game code, no assets and no keys, and it only ever reads your files.

The engine underneath is **fefw-recomp** by
[Goldoire](https://github.com/Goldoire/fefw-recomp) and its contributors. Its
author stepped away and the repository was removed;
[Obersteinn](https://github.com/Obersteinn) preserved the final 0.2.0 release with its build tools, so the
reference build and its tested-dump manifest are still available. EmblemWeave
carries that engine forward as the launcher around it, and
[docs/UPSTREAM.md](https://github.com/XiONDiGiTaL/EmblemWeave/blob/HEAD/docs/UPSTREAM.md) records exactly…
