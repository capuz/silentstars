---
repo: "Lattymoy/daggerfall-js-source"
name: "daggerfall-js-source"
description: "Open-source game technology for the browser: a hand-written WebGL2 renderer, file-format readers, and the test and build tooling around them. All of my code is MIT-licensed and free on GitHub."
readmeQualityOk: true
url: "https://github.com/Lattymoy/daggerfall-js-source"
homepage: "https://lattymoy.github.io/daggerfall-js-source/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
stars: 18
forks: 14
openIssues: 33
closedIssues: 23
watchers: 0
contributors: 10
recentReleases: 10
createdAt: "2026-08-27T00:22:34Z"
lastCommitAt: "2026-10-29T21:23:58Z"
lastReleaseAt: "2026-09-21T13:10:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine", "fork_magnet"]
healthScore: 88
undervaluedScore: 58
maintainers: ["claude", "Lattymoy", "blueeenonok-lang"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a01eed163ce96e6a52ed0f6ba75f327b22163e155f228322bf915e0a51b9333/Lattymoy/daggerfall-js-source"
fundingLinks: ["CUSTOM:https://www.patreon.com/c/dfenhanced", "KO_FI:https://ko-fi.com/daggerfallonline"]
---

# DFO Online

**DFO Online** - an open-source reimplementation of a classic 1996 RPG,
played from your own copy of The Elder Scrolls II: Daggerfall. It began as a
1:1 port of Daggerfall Unity (MIT, Interkarma and contributors) and is now its
own game: Daggerfall Unity is the reference for its data layer and logic, not a
target to match. Presentation rebuilt on hand-rolled WebGL2. MIT licensed, with
Daggerfall Unity's notice alongside (LICENSE). DFO Online is an independent,
unofficial project, not affiliated with or endorsed by Bethesda Softworks or
ZeniMax Media. The Elder Scrolls and Daggerfall are trademarks of ZeniMax
Media Inc.

The project's working name in the docs and the code is `project-dagger`, and
the repository, the live domain, the servers and the desktop app's identifier
still carry the old `daggerfall` spellings - renaming those is a move outside
this tree (BR1, BR5).

Play it: https://daggerfalljs.dev/

The site is `index.html` (what it is, how to play, credits); the game is
`play/index.html`, served at `/play/`. Both deploy from `main` to GitHub
Pages. The landing page takes its palette and fonts from the enhanced skin
at build (`scripts/landingHtml.mjs`) and…
