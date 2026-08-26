---
repo: "Open-BFME/openbfme-godot"
name: "openbfme-godot"
description: "BFME Godot: A modern implementation of BFME 2 into Godot using the game's original assets"
readmeQualityOk: true
url: "https://github.com/Open-BFME/openbfme-godot"
language: "GDScript"
languages: ["GDScript", "Python"]
languagePcts: [48, 45]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 3
createdAt: "2026-07-25T21:39:41Z"
lastCommitAt: "2026-08-26T04:17:37Z"
lastReleaseAt: "2026-08-09T08:19:19Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 53
maintainers: ["Ancalgonn"]
openGraphImageUrl: "https://opengraph.githubassets.com/a63e3cf34f30a1fe4e003797e429e92f1756f40313e9637193a95dca22f18b40/Open-BFME/openbfme-godot"
---

</p>

<h1 align="center">OpenBFME</h1>

  Experimental open-source RTS engine in Godot for <strong>Rise of the Witch-king 2.01</strong>.
</p>

</p>

OpenBFME is a Godot 4.7 remake of *BFME2: Rise of the Witch-king* (2.01),
focused on single-player skirmish across all 7 factions. Layout, lanes, and
the agent contract: [AGENTS.md](https://github.com/Open-BFME/openbfme-godot/blob/HEAD/AGENTS.md). Product strategy: [DIRECTION.md](https://github.com/Open-BFME/openbfme-godot/blob/HEAD/DIRECTION.md).

Retail-derived files live under `workspace/`; use them freely. Git ignores
`workspace/` and the publication-boundary CI scans tracked files for retail
bytes and machine-absolute paths — that is the whole policy.

## How to run (Windows)

```bat
set OPENBFME_GODOT=C:\Path\To\Godot_v4.7-stable_win64_console.exe
set ROTWK_INSTALL=C:\Path\To\RotWK
run_rotwk_one_button.bat "%ROTWK_INSTALL%" --multi-map --build --publish --launch
```

Already converted: `run_game.bat`. Offline tools check:
`powershell -File tools\gate-rotwk-systems.ps1 -SkipLiveRetail`.
Setup detail: [docs/ONBOARDING.md](https://github.com/Open-BFME/openbfme-godot/blob/HEAD/docs/ONBOARDING.md).

## Credits and inspiration…
