---
repo: "ggdrn/KH-DAYS-VITA"
name: "KH-DAYS-VITA"
description: "Port of Decompilation of Kingdom Hearts: 358/2 Days to PS VITA"
readmeQualityOk: true
url: "https://github.com/ggdrn/KH-DAYS-VITA"
language: "C"
languages: ["C", "C++"]
languagePcts: [64, 26]
stars: 23
forks: 1
openIssues: 6
closedIssues: 21
watchers: 1
contributors: 2
recentReleases: 9
createdAt: "2026-10-02T22:05:13Z"
lastCommitAt: "2026-11-25T13:18:39Z"
lastReleaseAt: "2026-11-13T02:16:22Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 93
undervaluedScore: 47
maintainers: ["ggdrn", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/d13399f38fcf5c4d85b91cf3920f2c2a2d284fbd4b9671325edd12aa4cc0ee76/ggdrn/KH-DAYS-VITA"
---

# khdays-vita

A native PS Vita port of *Kingdom Hearts 358/2 Days* (Nintendo DS), built from the
[khdays-decomp](https://github.com/Yokimitsuro/khdays-decomp) decompilation.

The game code is recompiled for the Vita, not emulated. The DS hardware it expects (2D and 3D
engines, sound, card, touch screen) is reimplemented on top of VitaSDK and vitaGL.

## You need

- A Vita with HENkaku/Enso and VitaShell.
- `libshacccg.suprx` in `ur0:data/`, extracted from your own console (see the vitaGL README).
- Optional: [kubridge](https://github.com/bythos14/kubridge) in `ur0:tai/` (`*KERNEL` in
  `config.txt`), for crash reports in the log. The port runs without it.
- Your own dump of the **European** cartridge. No game data is included here.

| Gamecode | Size | SHA-1 |
|---|---|---|
| `YKGP` (Europe) | 268,435,456 bytes | `6fae8f5bbe80114b4e2535260eab5f4d0fc8a844` |

Other regions (US `YKGE` included) do not work.
