---
repo: "LooperSalty/AnyXboxX"
name: "AnyXboxX"
description: "AnyXboxX — prototype d'émulateur Xbox Series X (HLE du GDK sur Unicorn)"
readmeQualityOk: true
url: "https://github.com/LooperSalty/AnyXboxX"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
topics: ["emulator", "gdk", "unicorn", "xbox", "xbox-series-x", "grand-theft-auto-vi", "gta-6", "gta-vi", "gta6", "victory"]
stars: 479
forks: 87
openIssues: 20
closedIssues: 52
watchers: 8
contributors: 42
recentReleases: 3
createdAt: "2026-11-21T00:18:13Z"
lastCommitAt: "2026-11-27T12:57:24Z"
lastReleaseAt: "2026-11-27T01:21:49Z"
status: "newborn"
tags: []
healthScore: 91
undervaluedScore: 27
maintainers: ["LooperSalty", "mauroalvare", "KainanP"]
openGraphImageUrl: "https://opengraph.githubassets.com/bded437a282b772be3be2ae6a8f5ff896b7cf66fdfe3f8ffbf3512c94647dd97/LooperSalty/AnyXboxX"
discussionCount: 2
---

# AnyXboxX — Xbox Series X emulator (prototype)

**English** · [Français](https://github.com/LooperSalty/AnyXboxX/blob/HEAD/docs/i18n/README.fr.md)

> **Note**
>
> **Where we are (2026-11-27)**
>
> - ✅ **The game runs.** GTA VI 1.0.2.1 (Xbox Series build) starts, plays its cutscenes and reaches the open world through VIctory, the copy in `third_party/victory`.
> - 📈 **About 24 fps median in the world in Full HD, 30 fps (the game's own cap) in scenes of up to about 4,000 draws** (Series X mode, RTX 4070 SUPER and i7-13700KF, warm cache, a 14-minute session through the launcher on 2026-11-27), about 20 in 4K, up from 14.2 on the previous base. `third_party/victory` builds on [Vice-Tay](https://github.com/TaynanGT/Vice-Tay), which keeps the title's buffers on the card, prepares the next frame while the card works and spreads the work over several threads; on 16 or more logical CPUs the launcher gives those threads more room (19.6 -> 23.8 fps median). Heavy scenes (7,000-11,000 draws) still fall to 10-18 fps. Earlier measurements: [docs/progress.md](https://github.com/LooperSalty/AnyXboxX/blob/HEAD/docs/progress.md).
