---
repo: "Open-BFME/Open-BFME-2"
name: "Open-BFME-2"
description: "Byte-exact source recreation of BFME 2's game.dat — sister project of Open-BFME-1"
readmeQualityOk: true
url: "https://github.com/Open-BFME/Open-BFME-2"
language: "C++"
languages: ["C++"]
languagePcts: [87]
stars: 35
forks: 14
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 25
recentReleases: 0
createdAt: "2026-08-29T16:05:08Z"
lastCommitAt: "2026-10-02T09:57:27Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 38
maintainers: ["peppy-penguin", "dylanrussellmd", "nleigh"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb3de7f1b57d8a2340a6cbecf89f1fdc8e40b4fcc49f8bcea210afaf8cf954c2/Open-BFME/Open-BFME-2"
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
