---
repo: "Open-BFME/Open-BFME-2"
name: "Open-BFME-2"
description: "Byte-exact source recreation of BFME 2's game.dat — sister project of Open-BFME-1"
readmeQualityOk: true
url: "https://github.com/Open-BFME/Open-BFME-2"
language: "C++"
languages: ["C++"]
languagePcts: [86]
stars: 33
forks: 12
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 23
recentReleases: 0
createdAt: "2026-08-29T16:05:08Z"
lastCommitAt: "2026-09-30T09:54:48Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 38
maintainers: ["peppy-penguin", "Maxime10"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c60fb117b68e04efbca85af08a3fcef310066119e92e1b4732b67cf448174b1/Open-BFME/Open-BFME-2"
---

# BFME 2 Source Code

Goal: Source code that rebuilds BFME 2's engine binary (`game.dat`) byte-for-byte, and game modernization improvements that you've only seen in your dreams.

[Join our Discord to participate!](https://discord.gg/wCvA2XqPUT)

## What?

* We rewrite the game's code as C++, one small piece at a time.
* Each piece must turn back into the exact same bytes as the original game.dat (BFME 2, version 1.06).
* When every piece matches and links, the whole game is open source, and we can fix bugs and make mods.

### What the bars measure

* **Rebuilt from source**: code rebuilding to the original game.dat's exact bytes, partly generated code or prebuilt libraries.
* **Game code in C++**: the game's own code (no libraries) in C++.
* **Linking**: the part of that code in files that link cleanly (link census).

<details open>
<summary><b>Progress over time and code map</b></summary>

[Interactive report](https://open-bfme.github.io/Open-BFME-2/)

</details>

## Status

Retail statically links Visual C++ 7.1's own support libraries, and `tools/lib_probe.py` places
their members without needing an attached row to anchor a window. The vendored
DirectX archives do **not**…
