---
repo: "rockenrooster/Smash64DS_Port"
name: "Smash64DS_Port"
description: "Nintendo DS source port of Super Smash Bros. 64 via the BattleShip decomp."
readmeQualityOk: true
url: "https://github.com/rockenrooster/Smash64DS_Port"
language: "C"
languages: ["C"]
languagePcts: [82]
stars: 23
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-07-14T20:33:45Z"
lastCommitAt: "2026-08-24T04:21:56Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 36
maintainers: ["rockenrooster"]
openGraphImageUrl: "https://opengraph.githubassets.com/0146b76b57146c261aab6f884d98b16a6dad37c6fbbc3d47fe211d8fa0af768c/rockenrooster/Smash64DS_Port"
---

# Smash 64 DS Port

This project combines the original game logic reconstructed by the
[BattleShip](https://github.com/JRickey/BattleShip) project with a Nintendo DS
backend. The result is a playable Nintendo DS port rather than a new Smash-style
game written from scratch.

See [PROJECT_GOAL.md](https://github.com/rockenrooster/Smash64DS_Port/blob/HEAD/PROJECT_GOAL.md) for the authoritative product, fidelity,
milestone, and definition-of-done contract.

The current build focuses on a one-minute Mario-versus-Fox match on Dream Land,
with items off. Bring your own legally obtained North American Super Smash Bros.
ROM; this repository contains no Nintendo assets or ROM-derived data.

Please support me on Patreon to help me continue this project! (slow progress for now) https://www.patreon.com/cw/Rockenrooster

## Quick start

```powershell
git clone https://github.com/rockenrooster/Smash64DS_Port.git Smash64DS_Port
# Install the Windows prerequisites listed below, then open PowerShell 7.
pwsh -NoProfile -File .\Smash64DS_Port\build.ps1 -Rom C:\path\to\baserom.us.z64
```

The script downloads pinned source dependencies, checks the ROM, regenerates the
required assets locally, and…
