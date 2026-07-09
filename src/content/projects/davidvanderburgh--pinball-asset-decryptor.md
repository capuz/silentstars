---
repo: "davidvanderburgh/pinball-asset-decryptor"
name: "pinball-asset-decryptor"
description: "Unified asset decryptor for Pinball Brothers, Spooky Pinball, Back of Flipper, and Jersey Jack Pinball machines (32 games)."
readmeQualityOk: true
url: "https://github.com/davidvanderburgh/pinball-asset-decryptor"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 6
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-05-15T18:53:54Z"
lastCommitAt: "2026-07-09T20:44:06Z"
lastReleaseAt: "2026-05-18T01:45:40Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 65
maintainers: ["davidvanderburgh", "coryaltheide"]
openGraphImageUrl: "https://opengraph.githubassets.com/1d5e0559d9b22622e5d84da43b215bb2cfd1a6d24f7a22e8154fce53b3b7b755/davidvanderburgh/pinball-asset-decryptor"
---

# Pinball Asset Decryptor

One app to extract, view, and modify game assets from pinball machines made
by **American Pinball**, **Barrels of Fun**, **Chicago Gaming Company**,
**Data East** (classic DMD), **Dutch Pinball**, **Jersey Jack Pinball**,
**Pinball Brothers**, **Sega** (Whitestar DMD), **Spooky Pinball**,
**Stern Pinball** (Spike 2 + Whitestar DMD), and **Williams** (WPC-era) —
130+ games across eleven manufacturers.

This is a unified replacement for separate decryptor apps that all shared
the same Tk GUI shell, queue-based pipeline contract, checksum tracking,
and mod-pack workflow. Each manufacturer is a plugin under
[pinball_decryptor/plugins/](https://github.com/davidvanderburgh/pinball-asset-decryptor/blob/HEAD/pinball_decryptor/plugins/); the shared shell
lives in [pinball_decryptor/core/](https://github.com/davidvanderburgh/pinball-asset-decryptor/blob/HEAD/pinball_decryptor/core/) and
[pinball_decryptor/gui/](https://github.com/davidvanderburgh/pinball-asset-decryptor/blob/HEAD/pinball_decryptor/gui/).

## Disclaimer

This project is an independent interoperability utility. It is **not
affiliated with, endorsed by, or sponsored by** American Pinball, Chicago…
