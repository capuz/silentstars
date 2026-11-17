---
repo: "MathiasKowoll/MacGameFix"
name: "MacGameFix"
description: "The game-folder fixes of MacGameVideoFix as their own app: fourteen Windows games fixed on a Mac with nothing patched in CrossOver. Works with CrossOver, CrossOver Preview and Steam Play tools such as NotProton."
readmeQualityOk: true
url: "https://github.com/MathiasKowoll/MacGameFix"
language: "C"
languages: ["C"]
languagePcts: [73]
stars: 98
forks: 5
openIssues: 6
closedIssues: 4
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-10-14T02:45:13Z"
lastCommitAt: "2026-11-17T12:19:59Z"
lastReleaseAt: "2026-10-19T14:10:52Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 31
maintainers: ["MathiasKowoll", "prsloan", "tombirdQAQ"]
openGraphImageUrl: "https://opengraph.githubassets.com/13c2d7e46715f7e0b3b08978cbca456db66b81ab613692ddda1a3aaae988ce75/MathiasKowoll/MacGameFix"
---

# MacGameFix

Preview 1.6.1-pre.1: **Forza Horizon 5 complete and gameplay validated; Forza Horizon 6 WIP with sign-in and driving advances.** [Release notes and validation limits](https://github.com/MathiasKowoll/MacGameFix/blob/HEAD/docs/releases/1.6.1-pre.1.md). The FH6 runtime belongs to the existing Rosetta improvement; diagnostics are optional.

Fixes for Windows games on a Mac that go into the game's own folder, and the
small macOS application that installs, checks and removes them. One more is
for a macOS game: it turns on the MetalFX denoiser that Cyberpunk 2077 ships
and leaves off, by changing the game's own app.

Most game-folder fixes do not replace a CrossOver module. FH6 additionally uses the paired ntdll from the existing Rosetta improvement. The other Windows game fixes work with
CrossOver as CodeWeavers ships it, with CrossOver Preview, and with Steam Play
tools for macOS such as [NotProton](https://github.com/NotProtonNot/NotProton):
a proxy DLL beside the game, and for a few titles registry keys in the game's
own prefix. Forza Horizon 5 and Forza Horizon 6 also add a private alias of the
selected runner's own D3DMetal module; the alias is made locally and the…
