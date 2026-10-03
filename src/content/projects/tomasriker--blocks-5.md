---
repo: "TomasRiker/blocks-5"
name: "blocks-5"
description: "Blocks 5 - Bob's Amazing Adventures"
readmeQualityOk: true
url: "https://github.com/TomasRiker/blocks-5"
homepage: "https://www.david-scherfgen.de/meine-spiele/blocks-5/"
language: "C"
languages: ["C", "C++"]
languagePcts: [70, 24]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2014-07-11T07:35:26Z"
lastCommitAt: "2026-10-03T09:23:25Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 90
undervaluedScore: 76
maintainers: ["claude", "TomasRiker"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad1456b67548967a93f4dbf29bab6cb5c90aa51789e35df4688bdb6d4cd0884e/TomasRiker/blocks-5"
---

Blocks 5 - Bob's Amazing Adventures
===================================

A 2D tile-based puzzle/action game in C++, on SDL 1.2, OpenGL and OpenAL Soft.

Building on Windows
-------------------
Run `Build.bat` from the repository root. It locates MSBuild, builds all three projects for
`Win32`, and then packs `data.zip`, `levels/skins/*.zip` and `levels/campaigns/blocks.zip` —
build products that are not in Git and that the game cannot start without.

    Build.bat                     Release, newest toolset this Visual Studio has
    Build.bat Debug
    Build.bat /toolset:v143       pin one toolset instead of taking the newest
    Build.bat /stage              also assemble a redistributable tree in Blocks5\stage
    Build.bat /clean              delete every build product again, and exit
    Build.bat /run -windowed      build, then run the game with these arguments
    Build.bat /?                  all options

For a compiler-only setup, "Build Tools for Visual Studio" — 2022 or any later year — is
enough; no IDE is needed. Tested with **v143 and v145**; the toolset notes at the top of
`Build.bat` say what that does and does not mean for older ones.

The game must run with…
